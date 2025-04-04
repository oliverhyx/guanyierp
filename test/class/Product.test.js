const Product = require('../../lib/class/Product');
const Base = require('../../lib/class/Base');

// 模拟Base类
jest.mock('../../lib/class/Base');

describe('Product 类测试', () => {
  let product;
  
  beforeEach(() => {
    // 清除所有模拟
    jest.clearAllMocks();
    
    // 设置Base类的curl方法模拟
    Base.prototype.curl = jest.fn().mockResolvedValue({
      success: true,
      items: [
        {
          id: 831148139185,
          code: 'F140384',
          name: '（成品）脂排舞-蜜瓜味',
          weight: 0.24
        }
      ],
      total: 1
    });
    
    // 设置Base类的setProperty方法模拟
    Base.prototype.setProperty = jest.fn().mockImplementation((source, obj) => {
      return { ...source, ...obj };
    });
    
    // 创建产品实例
    product = new Product();
  });
  
  describe('构造函数', () => {
    it('应该调用父类构造函数', () => {
      expect(Base).toHaveBeenCalled();
    });
  });
  
  describe('search 方法', () => {
    it('应该使用默认参数调用 curl 方法', async () => {
      const result = await product.search({});
      
      // 验证curl方法的调用
      expect(Base.prototype.curl).toHaveBeenCalled();
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.items.get',
          page_no: 1,
          page_size: 10,
          start_date: null,
          end_date: null,
          code: null
        }),
        {}
      );
      
      // 验证返回结果
      expect(result).toEqual({
        success: true,
        items: [
          {
            id: 831148139185,
            code: 'F140384',
            name: '（成品）脂排舞-蜜瓜味',
            weight: 0.24
          }
        ],
        total: 1
      });
    });
    
    it('应该使用自定义参数覆盖默认参数', async () => {
      const customParams = {
        page_no: 2,
        page_size: 20,
        code: 'F140384'
      };
      
      await product.search(customParams);
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.items.get'
        }),
        customParams
      );
    });
    
    it('应该处理错误响应', async () => {
      // 模拟错误响应
      Base.prototype.curl.mockResolvedValueOnce({
        success: false,
        errorCode: 'E001',
        errorDesc: '请求参数错误'
      });
      
      const result = await product.search({});
      
      expect(result).toEqual({
        success: false,
        errorCode: 'E001',
        errorDesc: '请求参数错误'
      });
    });
    
    it('应该处理带有日期过滤的查询', async () => {
      const dateParams = {
        start_date: '2025-01-01 00:00:00',
        end_date: '2025-01-31 23:59:59'
      };
      
      await product.search(dateParams);
      
      // 验证setProperty的调用包含日期参数
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          start_date: '2025-01-01 00:00:00',
          end_date: '2025-01-31 23:59:59'
        })
      );
    });
  });
}); 