# @neuit/guanyierp

用于管理管易 ERP 系统的 Node.js 接口库

## 安装

```bash
npm install @neuit/guanyierp
```

## 配置

该库支持多种方式配置：

### 1. 通过配置文件

在项目根目录创建 `.neuit.config.json` 文件：

```json
{
  "guanyi_appkey": "YOUR_APPKEY",
  "guanyi_sessionkey": "YOUR_SESSIONKEY",
  "guanyi_appsecret": "YOUR_APPSECRET",
  "guanyi_baseUrl": "YOUR_BASEURL"
}
```

## 使用示例

```javascript
const { Shop } = require("@neuit/guanyierp");

const shop = new Shop()
const res = await shop.search({})
console.log(res)
```

## API 文档

待完善...

## 许可证

MIT
