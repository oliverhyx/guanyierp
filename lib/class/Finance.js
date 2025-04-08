const Base = require("./Base")
/**
 * 财务管理
 */
class Finance extends Base {
	constructor() {
		super()
	}

	/**
	 * 销货收款单查询
	 * @param {*} data 
	 * @returns 
	 */
	async customerpaymentSearch(data) {
		/**
		 * 管易ERP销货收款单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 * approve_status: 审核状态，0:未审核，1:已审核
		 * code: 单据编号
		 */
		const body = {
			...this,
			method: "gy.erp.customerpayment.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 修改时间开始段
			end_date: null,            // 修改时间结束段
			approve_status: null,      // 审核状态，0:未审核，1:已审核
			code: null                 // 单据编号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 进销存数据查询
	 * @param {*} data 
	 * @returns 
	 */
	async itemstockcrmSearch(data) {
		/**
		 * 管易ERP进销存数据查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 开始日期
		 * end_date: 结束日期
		 * warehourse_code: 仓库代码
		 * item_code: 商品代码
		 * sku_code: 规格代码，必须与item_code搭配使用
		 */
		const body = {
			...this,
			method: "gy.erp.report.itemstockcrm.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 开始日期，必填
			end_date: null,            // 结束日期，必填
			warehourse_code: null,     // 仓库代码
			item_code: null,           // 商品代码
			sku_code: null             // 规格代码，必须与item_code搭配使用
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 供应商流水账查询
	 * @param {*} data 
	 * @returns 
	 */
	async supplierbillSearch(data) {
		/**
		 * 管易ERP供应商流水账查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 记账时间开始段
		 * end_date: 记账时间结束段
		 * supplier_code: 供应商代码
		 */
		const body = {
			...this,
			method: "gy.erp.stock.supplierbill.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 记账时间开始段
			end_date: null,            // 记账时间结束段
			supplier_code: null        // 供应商代码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 平台账务流水账查询
	 * @param {*} data 
	 * @returns 
	 */
	async accountOrderSearch(data) {
		/**
		 * 管易ERP平台账务流水账查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 * approve_status: 审核状态，0:未审核，1:已审核
		 * finance_code: 账务编号
		 */
		const body = {
			...this,
			method: "gy.erp.alipay.account.order.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 修改时间开始段
			end_date: null,            // 修改时间结束段
			approve_status: null,      // 审核状态，0:未审核，1:已审核
			finance_code: null         // 账务编号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
	/**
	 * 采购预付款单查询
	 * @param {*} data 
	 * @returns 
	 */
	async purchasePrepaySearch(data) {
		/**
		 * 管易ERP采购预付款单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 * approve: 审核状态，0:未审核，1:已审核
		 * code: 单据编号
		 */
		const body = {
			...this,
			method: "gy.erp.purchase.prepay.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 修改时间开始段
			end_date: null,            // 修改时间结束段
			approve: null,             // 审核状态，0:未审核，1:已审核
			code: null                 // 单据编号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
	/**
	 * 采购应收应付单查询
	 * @param {*} data 
	 * @returns 
	 */
	async purchasePaymentSearch(data) {
		/**
		 * 管易ERP采购应收应付单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 * approve: 审核状态，0:未审核，1:已审核
		 * code: 单据编号
		 */
		const body = {
			...this,
			method: "gy.erp.purchase.payment.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 修改时间开始段
			end_date: null,            // 修改时间结束段
			approve: null,             // 审核状态，0:未审核，1:已审核
			code: null                 // 单据编号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
	/**
	 * 平台费用科目查询
	 * @param {*} data 
	 * @returns 
	 */
	async platformSubjectSearch(data) {
		/**
		 * 管易ERP平台费用科目查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 * id: 平台科目ID
		 */
		const body = {
			...this,
			method: "gy.erp.tenant.platform.subject.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 修改时间开始段
			end_date: null,            // 修改时间结束段
			id: null                   // 平台科目ID
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 系统费用科目新增
	 * @param {*} data 
	 * @returns 
	 */
	async vipAdd(data) {
		/**
		 * 管易ERP系统费用科目新增接口
		 * method: 接口方法名
		 * code: 费用科目代码
		 * name: 费用科目名称
		 */
		const body = {
			...this,
			method: "gy.erp.vip.add",
			code: null,                // 费用科目代码
			name: null                 // 费用科目名称
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 系统费用科目查询
	 * @param {*} data 
	 * @returns 
	 */
	async syssubjectSearch(data) {
		/**
		 * 管易ERP系统费用科目查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 * subject_id: 系统费用科目ID
		 */
		const body = {
			...this,
			method: "gy.erp.syssubject.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 修改时间开始段
			end_date: null,            // 修改时间结束段
			subject_id: null           // 系统费用科目ID
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
}
module.exports = Finance
