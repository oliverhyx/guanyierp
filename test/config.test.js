const fs = require('fs');
const path = require('path');
const config = require('../lib/config');

// 模拟fs模块
jest.mock('fs');

describe('配置模块测试', () => {
  // 在每个测试前重置所有模拟
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadConfig 方法', () => {
    it('应该从指定路径加载配置文件', () => {
      // 模拟文件存在和读取
      const mockConfigPath = '/path/to/config.json';
      const mockConfig = { guanyi_appkey: 'test_appkey' };
      
      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
      
      const result = config.loadConfig(mockConfigPath);
      
      expect(fs.existsSync).toHaveBeenCalledWith(mockConfigPath);
      expect(fs.readFileSync).toHaveBeenCalledWith(mockConfigPath, 'utf8');
      expect(result).toEqual(mockConfig);
    });
    
    it('应该从当前工作目录加载配置文件', () => {
      // 模拟当前工作目录的配置文件存在
      const cwdConfig = path.resolve(process.cwd(), '.neuit.config.json');
      const mockConfig = { guanyi_appkey: 'test_appkey' };
      
      fs.existsSync.mockImplementation((path) => path === cwdConfig);
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
      
      const result = config.loadConfig();
      
      expect(fs.existsSync).toHaveBeenCalledWith(cwdConfig);
      expect(fs.readFileSync).toHaveBeenCalledWith(cwdConfig, 'utf8');
      expect(result).toEqual(mockConfig);
    });
    
    it('应该从项目根目录加载配置文件', () => {
      // 模拟当前工作目录没有配置文件，但项目根目录有
      const cwdConfig = path.resolve(process.cwd(), '.neuit.config.json');
      const projectRoot = path.resolve(process.cwd(), '..');
      const packageJsonPath = path.join(projectRoot, 'package.json');
      const configFilePath = path.join(projectRoot, '.neuit.config.json');
      const mockConfig = { guanyi_appkey: 'test_appkey' };
      
      // 第一个existsSync调用返回false，其他情况返回true
      fs.existsSync.mockImplementation((path) => {
        if (path === cwdConfig) return false;
        if (path === packageJsonPath) return true;
        if (path === configFilePath) return true;
        return false;
      });
      
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
      
      // 模拟path.dirname为了检查向上查找目录的逻辑
      const originalDirname = path.dirname;
      path.dirname = jest.fn((dir) => {
        if (dir === process.cwd()) return projectRoot;
        return originalDirname(dir);
      });
      
      const result = config.loadConfig();
      
      expect(fs.existsSync).toHaveBeenCalledWith(configFilePath);
      expect(fs.readFileSync).toHaveBeenCalledWith(configFilePath, 'utf8');
      expect(result).toEqual(mockConfig);
      
      // 恢复原始函数
      path.dirname = originalDirname;
    });
    
    it('当没有找到配置文件时应该抛出错误', () => {
      // 模拟所有可能的配置文件都不存在
      fs.existsSync.mockReturnValue(false);
      
      expect(() => {
        config.loadConfig();
      }).toThrow('No valid configuration file found');
    });
    
    it('当配置文件无法解析时应该抛出错误', () => {
      // 模拟文件存在但内容无效
      const mockConfigPath = '/path/to/config.json';
      
      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue('invalid json');
      
      expect(() => {
        config.loadConfig(mockConfigPath);
      }).toThrow(`Error reading config file ${mockConfigPath}`);
    });
  });
  
  describe('getConfig 方法', () => {
    it('应该返回指定键的配置值', () => {
      // 模拟loadConfig函数返回
      const mockConfig = { 
        guanyi_appkey: 'test_appkey',
        guanyi_sessionkey: 'test_sessionkey'
      };
      
      // 创建loadConfig的spy
      const loadConfigSpy = jest.spyOn(config, 'loadConfig').mockReturnValue(mockConfig);
      
      const result = config.getConfig('guanyi_appkey');
      
      expect(loadConfigSpy).toHaveBeenCalled();
      expect(result).toBe('test_appkey');
      
      // 恢复原始函数
      loadConfigSpy.mockRestore();
    });
    
    it('未提供键时应该返回整个配置对象', () => {
      // 模拟loadConfig函数返回
      const mockConfig = { 
        guanyi_appkey: 'test_appkey',
        guanyi_sessionkey: 'test_sessionkey'
      };
      
      // 创建loadConfig的spy
      const loadConfigSpy = jest.spyOn(config, 'loadConfig').mockReturnValue(mockConfig);
      
      const result = config.getConfig();
      
      expect(loadConfigSpy).toHaveBeenCalled();
      expect(result).toEqual(mockConfig);
      
      // 恢复原始函数
      loadConfigSpy.mockRestore();
    });
    
    it('应该传递configPath参数给loadConfig', () => {
      // 测试configPath参数传递
      const mockConfigPath = '/path/to/config.json';
      const mockConfig = { guanyi_appkey: 'test_appkey' };
      
      // 创建loadConfig的spy
      const loadConfigSpy = jest.spyOn(config, 'loadConfig').mockReturnValue(mockConfig);
      
      config.getConfig('guanyi_appkey', mockConfigPath);
      
      expect(loadConfigSpy).toHaveBeenCalledWith(mockConfigPath);
      
      // 恢复原始函数
      loadConfigSpy.mockRestore();
    });
  });
}); 