const Base = require("./Base");
/**
 * 基础信息
 */
class Shop extends Base {
	constructor() {
		super();
	}

	/**
	 *
	 * @param {*} data
	 * @returns
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
