//#region import
const request = require("request");
const crypto = require("crypto");
const config = require('../config');
//#endregion
class Base {
	constructor() {
		this.appkey = config.getConfig('guanyi_appkey');
		this.sessionkey = config.getConfig('guanyi_sessionkey');
	}
	/**
	 * 处理请求体，移除控制属性
	 * @param {*} obj
	 * @returns
	 */
	removeControlProperties(obj) {
		const result = {};
		for (const key in obj) {
			// 跳过以下划线开头的控制属性
			if (![null, undefined, ''].includes(obj[key])) {
				result[key] = obj[key];
			}
		}
		return result;
	};

	setProperty(source, obj) {
		for (const key in obj) {
			source[key] = obj[key];
		}
		return source
	}

	getSign(body) {
		const str = `${config.getConfig('guanyi_appsecret')}${JSON.stringify(
			body
		  )}${config.getConfig('guanyi_appsecret')}`;
        console.log(str)
		const hash = crypto.createHash("md5");
		hash.update(str);
		return hash.digest("hex").toUpperCase();
	}

	async curl(_body) {
		const body = this.removeControlProperties(_body);
		const data = {
			...body,
			sign: this.getSign(body)
		};
		console.log(data)
		return new Promise((resolve, reject) => {
			request({
				url: config.getConfig('guanyi_baseUrl'),
				method: "POST",
				json: true,
				body: data,
				headers: {
					'Content-Type': 'application/json',
					'Accept': '*/*' // 添加Accept头，接受任何类型的响应
				}
			}, (error, response, body) => {
				if (error) {
					resolve({
						success: false,
						errorDesc: error.message
					})
				} else if (response.statusCode !== 200) {
					resolve({
						success: false,
						errorDesc: `HTTP error: ${response.statusCode}, ${JSON.stringify(body)}`
					})
				} else {
					resolve(body);
				}
			});
		});
	}
}

module.exports = Base;
