const Base = require("./Base");

class Shop extends Base {
	constructor() {
		super();
	}

	/**
	 *
	 * @param {*} data
	 * @returns
{
    "success": true,
    "errorCode": "",
    "subErrorCode": "",
    "errorDesc": "",
    "subErrorDesc": "",
    "requestMethod": "gy.erp.shop.get",
    "flag": null,
    "shops": [
      {
        "id": 710944505983,
        "nick": "HI KIM",
        "code": "RMSHOP008",
        "name": "HI KIM",
        "create_date": "2024-03-08 17:49:17",
        "modify_date": "2025-03-31 18:01:47",
        "note": "",
        "type_name": "有赞微商城"
      }
    ],
    "total": 11
  }
	 */
	async search(data) {
		/**
		 * 管易ERP店铺查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * modify_start_date: 修改时间开始段
		 * modify_end_date: 修改时间结束段
		 * code: 店铺代码
		 */
		const body = {
			...this,
			method: "gy.erp.shop.get",
			page_no: 1, // 页码，默认为1
			page_size: 10, // 每页大小，默认为10
			modify_start_date: null, // 修改时间开始段
			modify_end_date: null, // 修改时间结束段
			code: null, // 店铺代码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}
}
module.exports = Shop;
