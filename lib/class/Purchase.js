const Base = require("./Base");
/**
 * 采购管理
 */
class Purchase extends Base {
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
		 * 管易ERP采购订单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_create_date: 创建时间开始段
		 * end_create_date: 创建时间结束段
		 * start_approve_date: 审核时间开始段
		 * end_approve_date: 审核时间结束段
		 * warehouse_code: 仓库代码
		 * supplier_code: 供应商代码
		 * code: 采购订单编号
		 * status: 订单状态，0:未审核，1:已审核生成
		 */
		const body = {
			...this,
			method: "gy.erp.purchase.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_create_date: null,   // 创建时间开始段
			end_create_date: null,     // 创建时间结束段
			start_approve_date: null,  // 审核时间开始段
			end_approve_date: null,    // 审核时间结束段
			warehouse_code: null,      // 仓库代码
			supplier_code: null,       // 供应商代码
			code: null,                // 采购订单编号
			status: null,              // 订单状态，0:未审核，1:已审核生成
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}
}
module.exports = Purchase;
