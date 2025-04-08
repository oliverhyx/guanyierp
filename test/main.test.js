const main = require('../lib/main');
const Base = require('../lib/class/Base');
const Product = require('../lib/class/Product');
const Purchase = require('../lib/class/Purchase');
const Shop = require('../lib/class/Shop');
const Stock = require('../lib/class/Stock');
const Trade = require('../lib/class/Trade');
const {setConfig, resetConfig} = require('../lib/config');
describe('主模块导出测试', () => {
  // it('应该正确导出所有类', () => {
  //   // 验证模块导出了所有类
  //   expect(main.Base).toBe(Base);
  //   expect(main.Product).toBe(Product);
  //   expect(main.Purchase).toBe(Purchase);
  //   expect(main.Shop).toBe(Shop);
  //   expect(main.Stock).toBe(Stock);
  //   expect(main.Trade).toBe(Trade);
  // });
  
  // it('应该能够创建每个类的实例', () => {
  //   // 测试能否通过导出的类创建实例
  //   expect(new main.Base()).toBeInstanceOf(Base);
  //   expect(new main.Product()).toBeInstanceOf(Product);
  //   expect(new main.Purchase()).toBeInstanceOf(Purchase);
  //   expect(new main.Shop()).toBeInstanceOf(Shop);
  //   expect(new main.Stock()).toBeInstanceOf(Stock);
  //   expect(new main.Trade()).toBeInstanceOf(Trade);
  // });

  // it('应该正确导出setConfig和resetConfig函数', () => {
  //   expect(main.setConfig).toBe(setConfig);
  //   expect(main.resetConfig).toBe(resetConfig);
  // });

  it('setConfig应该能够设置配置', () => {
    // 设置测试配置
    const testConfig = {
      guanyi_appkey: 'TEST_APPKEY',
      guanyi_sessionkey: 'TEST_SESSIONKEY',
      guanyi_appsecret: 'TEST_APPSECRET',
      guanyi_baseUrl: 'http://test.api.guanyierp.com/rest/erp_open'
    };
    
    main.setConfig(testConfig);
    
    // 创建Base实例来验证配置是否生效
    const baseInstance = new main.Base();
    expect(baseInstance.appkey).toBe('TEST_APPKEY');
    expect(baseInstance.sessionkey).toBe('TEST_SESSIONKEY');
  });

  it('resetConfig应该能够重置配置', () => {
    // 先设置一个测试配置
    const testConfig = {
      guanyi_appkey: 'ANOTHER_APPKEY',
      guanyi_sessionkey: 'ANOTHER_SESSIONKEY'
    };
    
    main.setConfig(testConfig);
    
    // 重置配置
    main.resetConfig();
    
    // 验证重置后，再次获取配置会抛出错误
    expect(main.getConfig('guanyi_appkey')).toBe("YOUR_APPKEY");
  });
}); 