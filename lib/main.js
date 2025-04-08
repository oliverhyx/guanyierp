//#region import
const {
  setConfig,
  resetConfig,
  getConfig
} = require('./config');
const Base = require('./class/Base');
const Product = require('./class/Product');
const Purchase = require('./class/Purchase');
const Shop = require('./class/Shop');
const Stock = require('./class/Stock');
const Trade = require('./class/Trade');
//#endregion

module.exports = {
  Base,
  Product,
  Purchase,
  Shop,
  Stock,
  Trade,
  setConfig,
  resetConfig,
  getConfig
};