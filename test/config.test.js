const fs = require('fs');
const path = require('path');
const { loadConfig, getConfig, getAppId } = require('../lib/main');

// 备份当前工作目录，以便后续恢复
const originalCwd = process.cwd;

describe('Config module', () => {
  // 创建临时配置文件用于测试
  const tempConfigPath = path.join(__dirname, 'temp-config.json');
  const tempConfig = {
    appid: 'test-app-id',
    appsecret: 'test-app-secret',
    baseUrl: 'https://api.test.com'
  };
  
  beforeEach(() => {
    // 写入临时配置文件
    fs.writeFileSync(tempConfigPath, JSON.stringify(tempConfig, null, 2));
    
    // 重写process.cwd以便测试不同的配置查找逻辑
    process.cwd = jest.fn().mockReturnValue(__dirname);
  });
  
  afterEach(() => {
    // 删除临时配置文件
    if (fs.existsSync(tempConfigPath)) {
      fs.unlinkSync(tempConfigPath);
    }
    
    // 恢复原始的process.cwd
    process.cwd = originalCwd;
  });
  
  test('loadConfig should load config from specified path', () => {
    const config = loadConfig(tempConfigPath);
    expect(config).toEqual(tempConfig);
  });
  
  test('getConfig should return specific config value', () => {
    const appid = getConfig('appid', tempConfigPath);
    expect(appid).toBe(tempConfig.appid);
  });
  
  test('getAppId should return appid from config', () => {
    const appid = getAppId(tempConfigPath);
    expect(appid).toBe(tempConfig.appid);
  });
  
  test('loadConfig should throw error if no config file found', () => {
    // 确保不存在这个路径
    const nonExistentPath = path.join(__dirname, 'non-existent-config.json');
    if (fs.existsSync(nonExistentPath)) {
      fs.unlinkSync(nonExistentPath);
    }
    
    // 当前目录也不存在配置文件
    const cwdConfigPath = path.join(__dirname, 'guanyierp.config.json');
    if (fs.existsSync(cwdConfigPath)) {
      fs.unlinkSync(cwdConfigPath);
    }
    
    expect(() => loadConfig()).toThrow();
  });
}); 