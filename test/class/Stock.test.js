const Stock = require('../../lib/class/Stock');
const Base = require('../../lib/class/Base');

// 模拟Base类
jest.mock('../../lib/class/Base');

describe('Stock 类测试', () => {
  let stock;
  
  beforeEach(() => {
    // 清除所有模拟
    jest.clearAllMocks();
    
    // 设置Base类的curl方法模拟
    Base.prototype.curl = jest.fn().mockResolvedValue({
      success: true,
      stocks: [
        {
          barcode: null,
          qty: 0,
          warehouse_code: 'RM001',
          item_code: 'F140085',
          sku_code: 'F140085',
          salable_qty: 0,
          road_qty: 0,
          pick_qty: 0,
          item_name: '(试用装）very blue 洗发水+护发素12ml',
          warehouse_name: '日弥公共仓'
        }
      ],
      total: 1
    });
    
    // 设置Base类的setProperty方法模拟
    Base.prototype.setProperty = jest.fn().mockImplementation((source, obj) => {
      return { ...source, ...obj };
    });
    
    // 创建库存实例
    stock = new Stock();
  });
  
  describe('构造函数', () => {
    it('应该调用父类构造函数', () => {
      expect(Base).toHaveBeenCalled();
    });
  });
  
  describe('search 方法', () => {
    it('应该使用默认参数调用 curl 方法', async () => {
      const result = await stock.search({});
      
      // 验证curl方法的调用
      expect(Base.prototype.curl).toHaveBeenCalled();
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.new.stock.get',
          page_no: 1,
          page_size: 10,
          start_date: null,
          end_date: null,
          barcode: null,
          warehouse_code: null,
          cancel: 1,
          item_code: null,
          item_sku_code: null
        }),
        {}
      );
      
      // 验证返回结果
      expect(result).toEqual({
        success: true,
        stocks: [
          {
            barcode: null,
            qty: 0,
            warehouse_code: 'RM001',
            item_code: 'F140085',
            sku_code: 'F140085',
            salable_qty: 0,
            road_qty: 0,
            pick_qty: 0,
            item_name: '(试用装）very blue 洗发水+护发素12ml',
            warehouse_name: '日弥公共仓'
          }
        ],
        total: 1
      });
    });
    
    it('应该使用自定义参数覆盖默认参数', async () => {
      const customParams = {
        page_no: 2,
        page_size: 20,
        warehouse_code: 'RM001',
        item_code: 'F140085'
      };
      
      await stock.search(customParams);
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.new.stock.get'
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
      
      const result = await stock.search({});
      
      expect(result).toEqual({
        success: false,
        errorCode: 'E001',
        errorDesc: '请求参数错误'
      });
    });
    
    it('应该处理带有修改日期过滤的查询', async () => {
      const dateParams = {
        start_date: '2025-01-01 00:00:00',
        end_date: '2025-01-31 23:59:59'
      };
      
      await stock.search(dateParams);
      
      // 验证setProperty的调用包含日期参数
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          start_date: '2025-01-01 00:00:00',
          end_date: '2025-01-31 23:59:59'
        })
      );
    });
    
    it('应该能够按仓库代码查询', async () => {
      // 模拟一个按仓库代码查询的响应
      Base.prototype.curl.mockResolvedValueOnce({
        success: true,
        stocks: [
          {
            warehouse_code: 'RM001',
            item_code: 'F140085',
            warehouse_name: '日弥公共仓'
          }
        ],
        total: 1
      });
      
      const result = await stock.search({ warehouse_code: 'RM001' });
      
      // 验证setProperty的调用包含仓库代码
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          warehouse_code: 'RM001'
        })
      );
      
      // 验证返回结果
      expect(result.success).toBe(true);
      expect(result.stocks[0].warehouse_code).toBe('RM001');
    });
    
    it('应该能够按商品代码查询', async () => {
      // 模拟一个按商品代码查询的响应
      Base.prototype.curl.mockResolvedValueOnce({
        success: true,
        stocks: [
          {
            warehouse_code: 'RM001',
            item_code: 'F140085',
            sku_code: 'F140085'
          }
        ],
        total: 1
      });
      
      const result = await stock.search({ item_code: 'F140085' });
      
      // 验证setProperty的调用包含商品代码
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          item_code: 'F140085'
        })
      );
      
      // 验证返回结果
      expect(result.success).toBe(true);
      expect(result.stocks[0].item_code).toBe('F140085');
    });
  });
}); 