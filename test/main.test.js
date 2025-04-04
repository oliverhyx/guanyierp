const main = require('../lib/main');
const Base = require('../lib/class/Base');
const Product = require('../lib/class/Product');
const Purchase = require('../lib/class/Purchase');
const Shop = require('../lib/class/Shop');
const Stock = require('../lib/class/Stock');
const Trade = require('../lib/class/Trade');

describe('主模块导出测试', () => {
  it('应该正确导出所有类', () => {
    // 验证模块导出了所有类
    expect(main.Base).toBe(Base);
    expect(main.Product).toBe(Product);
    expect(main.Purchase).toBe(Purchase);
    expect(main.Shop).toBe(Shop);
    expect(main.Stock).toBe(Stock);
    expect(main.Trade).toBe(Trade);
  });
  
  it('应该能够创建每个类的实例', () => {
    // 测试能否通过导出的类创建实例
    expect(new main.Base()).toBeInstanceOf(Base);
    expect(new main.Product()).toBeInstanceOf(Product);
    expect(new main.Purchase()).toBeInstanceOf(Purchase);
    expect(new main.Shop()).toBeInstanceOf(Shop);
    expect(new main.Stock()).toBeInstanceOf(Stock);
    expect(new main.Trade()).toBeInstanceOf(Trade);
  });
  
  it('导出的对象不应包含未在代码中定义的属性', () => {
    // 确保只导出了预期的类
    const expectedKeys = ['Base', 'Product', 'Purchase', 'Shop', 'Stock', 'Trade'];
    const actualKeys = Object.keys(main);
    
    // 验证没有多余的键
    expect(actualKeys.sort()).toEqual(expectedKeys.sort());
    
    // 验证没有少键
    expect(actualKeys.length).toBe(expectedKeys.length);
  });
}); 