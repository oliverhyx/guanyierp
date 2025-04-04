const Trade = require('../../lib/class/Trade');
const Base = require('../../lib/class/Base');

// 模拟Base类
jest.mock('../../lib/class/Base');

describe('Trade 类测试', () => {
  let trade;
  
  beforeEach(() => {
    // 清除所有模拟
    jest.clearAllMocks();
    
    // 设置Base类的curl方法模拟 - 用于deliverySearch方法
    Base.prototype.curl = jest.fn()
      .mockResolvedValueOnce({
        success: true,
        deliverys: [
          {
            code: 'SDO842184194341',
            platform_code: 's842184115601',
            create_date: '2025-03-28 14:31:03',
            modify_date: '2025-03-28 15:13:22',
            warehouse_name: '日弥公共仓',
            express_no: 'SF3147682322520'
          }
        ],
        total: 1
      })
      .mockResolvedValueOnce({
        success: true,
        deliverys: [
          {
            code: 'SDO813455941490',
            platform_code: '2022063098377000005-18',
            create_date: '2024-12-31 16:54:32',
            modify_date: '2025-01-02 10:40:57',
            warehouse_name: '日弥公共仓',
            express_no: 'ZY202409783047'
          }
        ],
        total: 1
      });
    
    // 设置Base类的setProperty方法模拟
    Base.prototype.setProperty = jest.fn().mockImplementation((source, obj) => {
      return { ...source, ...obj };
    });
    
    // 创建交易实例
    trade = new Trade();
  });
  
  describe('构造函数', () => {
    it('应该调用父类构造函数', () => {
      expect(Base).toHaveBeenCalled();
    });
  });
  
  describe('deliverySearch 方法', () => {
    it('应该使用默认参数调用 curl 方法', async () => {
      const result = await trade.deliverySearch({});
      
      // 验证curl方法的调用
      expect(Base.prototype.curl).toHaveBeenCalled();
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.trade.deliverys.get',
          page_no: 1,
          page_size: 10,
          start_create: null,
          end_create: null,
          start_delivery_date: null,
          end_delivery_date: null,
          start_modify_date: null,
          end_modify_date: null,
          del: 0,
          code: null,
          warehouse_code: null,
          shop_code: null,
          outer_code: null,
          print: null,
          scan: null,
          delivery: null,
          cod: null,
          vip_name: null,
          wms: null,
          mail_no: null,
          sync_status: null
        }),
        {}
      );
      
      // 验证返回结果
      expect(result).toEqual({
        success: true,
        deliverys: [
          {
            code: 'SDO842184194341',
            platform_code: 's842184115601',
            create_date: '2025-03-28 14:31:03',
            modify_date: '2025-03-28 15:13:22',
            warehouse_name: '日弥公共仓',
            express_no: 'SF3147682322520'
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
        shop_code: 'RMSHOP001'
      };
      
      await trade.deliverySearch(customParams);
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.trade.deliverys.get'
        }),
        customParams
      );
    });
  });
  
  describe('deliveryHistorySearch 方法', () => {
    it('应该使用默认参数调用 curl 方法', async () => {
      const result = await trade.deliveryHistorySearch({});
      
      // 验证curl方法的调用
      expect(Base.prototype.curl).toHaveBeenCalled();
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.trade.deliverys.history.get',
          page_no: 1,
          page_size: 10,
          start_delivery_date: null,
          end_delivery_date: null,
          shop_code: null,
          code: null,
          sync_status: null
        }),
        {}
      );
      
      // 验证返回结果
      expect(result).toEqual({
        success: true,
        deliverys: [
          {
            code: 'SDO813455941490',
            platform_code: '2022063098377000005-18',
            create_date: '2024-12-31 16:54:32',
            modify_date: '2025-01-02 10:40:57',
            warehouse_name: '日弥公共仓',
            express_no: 'ZY202409783047'
          }
        ],
        total: 1
      });
    });
    
    it('应该使用自定义参数覆盖默认参数', async () => {
      // 重置curl模拟以便能再次调用
      Base.prototype.curl.mockReset();
      Base.prototype.curl.mockResolvedValue({
        success: true,
        deliverys: [],
        total: 0
      });
      
      const customParams = {
        page_no: 2,
        page_size: 20,
        start_delivery_date: '2025-01-01 00:00:00',
        end_delivery_date: '2025-01-01 23:59:59'
      };
      
      await trade.deliveryHistorySearch(customParams);
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.trade.deliverys.history.get'
        }),
        customParams
      );
    });
    
    it('应该处理错误响应', async () => {
      // 重置curl模拟以便能再次调用
      Base.prototype.curl.mockReset();
      
      // 模拟错误响应
      Base.prototype.curl.mockResolvedValue({
        success: false,
        errorCode: 'E001',
        errorDesc: '请求参数错误'
      });
      
      const result = await trade.deliveryHistorySearch({});
      
      expect(result).toEqual({
        success: false,
        errorCode: 'E001',
        errorDesc: '请求参数错误'
      });
    });
    
    it('应该能够按发货日期范围查询历史发货单', async () => {
      // 重置curl模拟以便能再次调用
      Base.prototype.curl.mockReset();
      Base.prototype.curl.mockResolvedValue({
        success: true,
        deliverys: [],
        total: 0
      });
      
      const dateParams = {
        start_delivery_date: '2025-01-01 00:00:00',
        end_delivery_date: '2025-01-01 23:59:59'
      };
      
      await trade.deliveryHistorySearch(dateParams);
      
      // 验证setProperty的调用包含日期参数
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          start_delivery_date: '2025-01-01 00:00:00',
          end_delivery_date: '2025-01-01 23:59:59'
        })
      );
    });
    
    it('应该能够按店铺代码查询历史发货单', async () => {
      // 重置curl模拟以便能再次调用
      Base.prototype.curl.mockReset();
      Base.prototype.curl.mockResolvedValue({
        success: true,
        deliverys: [],
        total: 0
      });
      
      await trade.deliveryHistorySearch({ shop_code: 'RMSHOP001' });
      
      // 验证setProperty的调用包含店铺代码
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          shop_code: 'RMSHOP001'
        })
      );
    });
    
    it('应该能够按发货单号查询历史发货单', async () => {
      // 重置curl模拟以便能再次调用
      Base.prototype.curl.mockReset();
      Base.prototype.curl.mockResolvedValue({
        success: true,
        deliverys: [],
        total: 0
      });
      
      await trade.deliveryHistorySearch({ code: 'SDO813455941490' });
      
      // 验证setProperty的调用包含发货单号
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          code: 'SDO813455941490'
        })
      );
    });
  });
}); 