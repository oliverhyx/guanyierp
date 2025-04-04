const Base = require("./Base");

/**
 * 商品管理
 */
class Product extends Base {
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
		 * 管易ERP商品查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段，与end_date搭配使用
		 * end_date: 修改时间结束段，与start_date搭配使用
		 * code: 商品代码，用于按商品代码筛选
		 */
		const body = {
			...this,
			method: "gy.erp.items.get",
			page_no: 1, // 页码，默认为1
			page_size: 10, // 每页大小，默认为10
			start_date: null, // 修改时间开始段，与end_date搭配使用
			end_date: null, // 修改时间结束段，与start_date搭配使用
			code: null, // 商品代码，用于按商品代码筛选
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}
}
module.exports = Product;
