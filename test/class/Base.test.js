const Base = require('../../lib/class/Base');
const request = require('request');
const crypto = require('crypto');
const config = require('../../lib/config');

// 模拟依赖
jest.mock('request');
jest.mock('crypto');
jest.mock('../../lib/config');

describe('Base 类测试', () => {
  let base;
  
  beforeEach(() => {
    // 每次测试前重置所有模拟
    jest.clearAllMocks();
    
    // 设置配置模拟
    config.getConfig.mockImplementation((key) => {
      const configValues = {
        'guanyi_appkey': 'test_appkey',
        'guanyi_sessionkey': 'test_sessionkey',
        'guanyi_appsecret': 'test_appsecret',
        'guanyi_baseUrl': 'https://api.test.com'
      };
      return configValues[key];
    });
    
    // 设置加密模拟
    const mockHash = {
      update: jest.fn().mockReturnThis(),
      digest: jest.fn().mockReturnValue('mock_hash')
    };
    crypto.createHash.mockReturnValue(mockHash);
    
    // 为每个测试创建新实例
    base = new Base();
  });
  
  describe('构造函数', () => {
    it('应该从配置中初始化 appkey 和 sessionkey', () => {
      expect(base.appkey).toBe('test_appkey');
      expect(base.sessionkey).toBe('test_sessionkey');
      expect(config.getConfig).toHaveBeenCalledWith('guanyi_appkey');
      expect(config.getConfig).toHaveBeenCalledWith('guanyi_sessionkey');
    });
  });
  
  describe('removeControlProperties 方法', () => {
    it('应该从对象中移除 null、undefined 和空字符串值', () => {
      const testObj = {
        valid1: 'value1',
        valid2: 123,
        invalid1: null,
        invalid2: undefined,
        invalid3: '',
        valid3: 0,
        valid4: false
      };
      
      const result = base.removeControlProperties(testObj);
      
      expect(result).toEqual({
        valid1: 'value1',
        valid2: 123,
        valid3: 0,
        valid4: false
      });
    });
    
    it('如果输入为空对象，应该返回空对象', () => {
      expect(base.removeControlProperties({})).toEqual({});
    });
  });
  
  describe('setProperty 方法', () => {
    it('应该将属性从来源对象复制到目标对象', () => {
      const source = { a: 1, b: 2 };
      const obj = { b: 3, c: 4 };
      
      const result = base.setProperty(source, obj);
      
      expect(result).toEqual({ a: 1, b: 3, c: 4 });
      expect(source).toEqual({ a: 1, b: 3, c: 4 }); // 源对象应该被修改
    });
  });
  
  describe('getSign 方法', () => {
    it('应该基于 appsecret 和请求体生成 MD5 签名', () => {
      const body = { key1: 'value1', key2: 'value2' };
      
      base.getSign(body);
      
      const expectedStr = 'test_appsecret{"key1":"value1","key2":"value2"}test_appsecret';
      expect(crypto.createHash).toHaveBeenCalledWith('md5');
      expect(crypto.createHash().update).toHaveBeenCalledWith(expectedStr);
      expect(crypto.createHash().digest).toHaveBeenCalledWith('hex');
    });
  });
  
  describe('curl 方法', () => {
    it('应该使用正确的参数发起 POST 请求', async () => {
      // 设置模拟
      const mockBody = { key: 'value', appkey: 'test_appkey' };
      base.getSign = jest.fn().mockReturnValue('MOCK_SIGNATURE');
      request.mockImplementation((options, callback) => {
        callback(null, { statusCode: 200 }, { success: true, data: '测试响应' });
      });
      
      // 调用方法
      const result = await base.curl(mockBody);
      
      // 验证请求是否使用了正确的参数
      expect(request).toHaveBeenCalledWith({
        url: 'https://api.test.com',
        method: 'POST',
        json: true,
        body: { 
          key: 'value', 
          appkey: 'test_appkey',
          sign: 'MOCK_SIGNATURE' 
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        }
      }, expect.any(Function));
      
      // 验证响应
      expect(result).toEqual({ success: true, data: '测试响应' });
    });
    
    it('应该正确处理请求错误', async () => {
      // 设置模拟以模拟错误
      request.mockImplementation((options, callback) => {
        callback(new Error('网络错误'), null, null);
      });
      
      // 调用方法
      const result = await base.curl({ test: 'data' });
      
      // 验证错误处理
      expect(result).toEqual({
        success: false,
        errorDesc: '网络错误'
      });
    });
    
    it('应该正确处理非 200 响应', async () => {
      // 设置模拟以模拟非 200 响应
      request.mockImplementation((options, callback) => {
        callback(null, { statusCode: 500 }, { error: '服务器错误' });
      });
      
      // 调用方法
      const result = await base.curl({ test: 'data' });
      
      // 验证错误处理
      expect(result).toEqual({
        success: false,
        errorDesc: 'HTTP error: 500, {"error":"服务器错误"}'
      });
    });
  });
}); 