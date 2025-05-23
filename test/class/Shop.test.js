const Shop = require('../../lib/class/Shop');
const Base = require('../../lib/class/Base');

// 模拟Base类
jest.mock('../../lib/class/Base');

describe('Shop 类测试', () => {
  let shop;
  
  beforeEach(() => {
    // 清除所有模拟
    jest.clearAllMocks();
    
    // 设置Base类的curl方法模拟
    Base.prototype.curl = jest.fn().mockResolvedValue({
      success: true,
      shops: [
        {
          id: 710944505983,
          nick: 'HI KIM',
          code: 'RMSHOP008',
          name: 'HI KIM',
          create_date: '2024-03-08 17:49:17',
          modify_date: '2025-03-31 18:01:47',
          type_name: '有赞微商城'
        }
      ],
      total: 1
    });
    
    // 设置Base类的setProperty方法模拟
    Base.prototype.setProperty = jest.fn().mockImplementation((source, obj) => {
      return { ...source, ...obj };
    });
    
    // 创建店铺实例
    shop = new Shop();
  });
  
  describe('构造函数', () => {
    it('应该调用父类构造函数', () => {
      expect(Base).toHaveBeenCalled();
    });
  });
  
  describe('search 方法', () => {
    it('应该使用默认参数调用 curl 方法', async () => {
      const result = await shop.search({});
      
      // 验证curl方法的调用
      expect(Base.prototype.curl).toHaveBeenCalled();
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.shop.get',
          page_no: 1,
          page_size: 10,
          modify_start_date: null,
          modify_end_date: null,
          code: null
        }),
        {}
      );
      
      // 验证返回结果
      expect(result).toEqual({
        success: true,
        shops: [
          {
            id: 710944505983,
            nick: 'HI KIM',
            code: 'RMSHOP008',
            name: 'HI KIM',
            create_date: '2024-03-08 17:49:17',
            modify_date: '2025-03-31 18:01:47',
            type_name: '有赞微商城'
          }
        ],
        total: 1
      });
    });
    
    it('应该使用自定义参数覆盖默认参数', async () => {
      const customParams = {
        page_no: 2,
        page_size: 20,
        code: 'RMSHOP008'
      };
      
      await shop.search(customParams);
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.shop.get'
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
      
      const result = await shop.search({});
      
      expect(result).toEqual({
        success: false,
        errorCode: 'E001',
        errorDesc: '请求参数错误'
      });
    });
    
    it('应该处理带有修改日期过滤的查询', async () => {
      const dateParams = {
        modify_start_date: '2025-01-01 00:00:00',
        modify_end_date: '2025-01-31 23:59:59'
      };
      
      await shop.search(dateParams);
      
      // 验证setProperty的调用包含日期参数
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          modify_start_date: '2025-01-01 00:00:00',
          modify_end_date: '2025-01-31 23:59:59'
        })
      );
    });
    
    it('应该能够按店铺代码查询', async () => {
      // 模拟一个按店铺代码查询的响应
      Base.prototype.curl.mockResolvedValueOnce({
        success: true,
        shops: [
          {
            id: 710944505983,
            nick: 'HI KIM',
            code: 'RMSHOP008',
            name: 'HI KIM',
            type_name: '有赞微商城'
          }
        ],
        total: 1
      });
      
      const result = await shop.search({ code: 'RMSHOP008' });
      
      // 验证setProperty的调用包含店铺代码
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          code: 'RMSHOP008'
        })
      );
      
      // 验证返回结果
      expect(result.success).toBe(true);
      expect(result.shops[0].code).toBe('RMSHOP008');
    });
  });
}); 