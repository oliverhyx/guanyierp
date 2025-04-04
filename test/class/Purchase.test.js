const Purchase = require('../../lib/class/Purchase');
const Base = require('../../lib/class/Base');

// 模拟Base类
jest.mock('../../lib/class/Base');

describe('Purchase 类测试', () => {
  let purchase;
  
  beforeEach(() => {
    // 清除所有模拟
    jest.clearAllMocks();
    
    // 设置Base类的curl方法模拟
    Base.prototype.curl = jest.fn().mockResolvedValue({
      success: true,
      purchaseOrderList: [
        {
          code: 'PO841102440559',
          note: '',
          create_date: '2025-03-25 13:40:08',
          approve_date: '2025-03-25 13:40:16',
          warehouse_code: 'RM001',
          supplier_code: 'RMGYS0003',
          status: 1
        }
      ],
      total: 1
    });
    
    // 设置Base类的setProperty方法模拟
    Base.prototype.setProperty = jest.fn().mockImplementation((source, obj) => {
      return { ...source, ...obj };
    });
    
    // 创建采购实例
    purchase = new Purchase();
  });
  
  describe('构造函数', () => {
    it('应该调用父类构造函数', () => {
      expect(Base).toHaveBeenCalled();
    });
  });
  
  describe('search 方法', () => {
    it('应该使用默认参数调用 curl 方法', async () => {
      const result = await purchase.search({});
      
      // 验证curl方法的调用
      expect(Base.prototype.curl).toHaveBeenCalled();
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.purchase.get',
          page_no: 1,
          page_size: 10,
          start_create_date: null,
          end_create_date: null,
          start_approve_date: null,
          end_approve_date: null,
          warehouse_code: null,
          supplier_code: null,
          code: null,
          status: null
        }),
        {}
      );
      
      // 验证返回结果
      expect(result).toEqual({
        success: true,
        purchaseOrderList: [
          {
            code: 'PO841102440559',
            note: '',
            create_date: '2025-03-25 13:40:08',
            approve_date: '2025-03-25 13:40:16',
            warehouse_code: 'RM001',
            supplier_code: 'RMGYS0003',
            status: 1
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
        supplier_code: 'RMGYS0003'
      };
      
      await purchase.search(customParams);
      
      // 验证setProperty的调用
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'gy.erp.purchase.get'
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
      
      const result = await purchase.search({});
      
      expect(result).toEqual({
        success: false,
        errorCode: 'E001',
        errorDesc: '请求参数错误'
      });
    });
    
    it('应该处理带有创建日期过滤的查询', async () => {
      const dateParams = {
        start_create_date: '2025-01-01 00:00:00',
        end_create_date: '2025-01-31 23:59:59'
      };
      
      await purchase.search(dateParams);
      
      // 验证setProperty的调用包含日期参数
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          start_create_date: '2025-01-01 00:00:00',
          end_create_date: '2025-01-31 23:59:59'
        })
      );
    });
    
    it('应该处理带有审核日期过滤的查询', async () => {
      const dateParams = {
        start_approve_date: '2025-01-01 00:00:00',
        end_approve_date: '2025-01-31 23:59:59'
      };
      
      await purchase.search(dateParams);
      
      // 验证setProperty的调用包含日期参数
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          start_approve_date: '2025-01-01 00:00:00',
          end_approve_date: '2025-01-31 23:59:59'
        })
      );
    });
    
    it('应该处理订单状态过滤', async () => {
      const statusParams = {
        status: 1 // 已审核生成
      };
      
      await purchase.search(statusParams);
      
      // 验证setProperty的调用包含状态参数
      expect(Base.prototype.setProperty).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          status: 1
        })
      );
    });
  });
}); 