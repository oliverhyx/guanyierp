const fs = require('fs');
const path = require('path');

// 存储配置的全局变量
let configCache = null;

/**
 * 查找并加载配置文件
 * 按以下顺序查找：
 * 1. 已初始化的配置
 * 2. 指定的路径
 * 3. 当前工作目录下的 .neuit.config.json
 * 4. 引用此包的项目根目录下的 .neuit.config.json
 * 
 * @param {string|Object} [configPathOrObject] - 可选的配置文件路径或配置对象
 * @returns {Object} 配置对象
 */
function loadConfig(configPathOrObject) {
  // 如果已经有缓存的配置，直接返回
  if (configCache) {
    return configCache;
  }

  // 如果传入的是对象，直接使用该对象作为配置
  if (configPathOrObject && typeof configPathOrObject === 'object') {
    configCache = configPathOrObject;
    return configCache;
  }

  // 可能的配置文件位置
  const possiblePaths = [];
  
  // 如果提供了配置文件路径，首先尝试这个路径
  if (configPathOrObject && typeof configPathOrObject === 'string') {
    possiblePaths.push(path.resolve(configPathOrObject));
  }
  
  // 当前工作目录
  possiblePaths.push(path.resolve(process.cwd(), '.neuit.config.json'));
  
  // 尝试查找使用这个包的项目根目录
  // 这通常是通过查找 package.json 来确定的
  let currentDir = process.cwd();
  while (currentDir !== '/') {
    const packageJsonPath = path.join(currentDir, 'package.json');
    const configFilePath = path.join(currentDir, '.neuit.config.json');
    
    if (fs.existsSync(packageJsonPath) && !possiblePaths.includes(configFilePath)) {
      possiblePaths.push(configFilePath);
    }
    
    // 向上移动一层目录
    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) {
      break; // 避免无限循环
    }
    currentDir = parentDir;
  }
  
  // 尝试加载第一个存在的配置文件
  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      try {
        const configContent = fs.readFileSync(filePath, 'utf8');
        configCache = JSON.parse(configContent);
        return configCache;
      } catch (error) {
        throw new Error(`Error reading config file ${filePath}: ${error.message}`);
      }
    }
  }
  
  // 如果没有找到配置文件，返回空对象或抛出错误
  throw new Error('No valid configuration file found. Please create a .neuit.config.json file or initialize with config object.');
}

/**
 * 获取配置中的特定字段
 * 
 * @param {string} key - 配置键名
 * @param {string|Object} [configPathOrObject] - 可选的配置文件路径或配置对象
 * @returns {any} 配置值
 */
function getConfig(key, configPathOrObject) {
  const config = loadConfig(configPathOrObject);
  return key ? config[key] : config;
}

/**
 * 重置配置缓存
 */
function resetConfig() {
  configCache = null;
}

/**
 * 设置配置
 * @param {*} data 
 */
function setConfig(data){
  configCache = data;
}

module.exports = {
  loadConfig,
  getConfig,
  resetConfig,
  setConfig
}; 