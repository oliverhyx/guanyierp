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
	/**
	 * 采购订单新增
	 * @param {*} data
	 * @returns
	 */
	async add(data) {
		/**
		 * 管易ERP采购订单新增接口
		 * method: 接口方法名
		 * warehouse_code: 仓库代码
		 * supplier_code: 供应商代码
		 * order_type: 单据类型代码
		 * plan_date: 预计到货时间
		 * note: 备注
		 * detail_list: 采购明细列表
		 */
		const body = {
			...this,
			method: "gy.erp.purchase.add",
			warehouse_code: null,      // 仓库代码
			supplier_code: null,       // 供应商代码
			order_type: null,         // 单据类型代码
			plan_date: null,          // 预计到货时间
			note: null,               // 备注
			detail_list: []           // 采购明细列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 采购订单审核
	 * @param {*} data 
	 * @returns 
	 */
	async approve(data) {
		/**
		 * 管易ERP采购订单审核接口
		 * method: 接口方法名
		 * code: 单据编号
		 */
		const body = {
			...this,
			method: "gy.erp.purchase.approve",
			code: null // 单据编号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 采购入库单新增并审核
	 * @param {*} data
	 * @returns
	 */
	async arriveAdd(data) {
		/**
		 * 管易ERP采购入库单新增并审核接口
		 * method: 接口方法名
		 * purchase_code: 采购订单号
		 * warehouse_code: 仓库代码
		 * supplier_code: 供应商代码
		 * order_type: 单据类型代码
		 * wms_bizcode: 外部系统单据号
		 * ex_cost: 其他费用
		 * note: 备注
		 * operator: 操作人
		 * detail_list: 商品列表
		 */
		const body = {
			...this,
			method: "gy.erp.purchase.arrive.add",
			purchase_code: null,      // 采购订单号
			warehouse_code: null,     // 仓库代码
			supplier_code: null,      // 供应商代码
			order_type: null,        // 单据类型代码
			wms_bizcode: null,       // 外部系统单据号
			ex_cost: null,           // 其他费用
			note: null,              // 备注
			operator: null,          // 操作人
			detail_list: []          // 商品列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 采购入库单新增
	 * @param {*} data
	 * @returns
	 */
	async arriveNewAdd(data) {
		/**
		 * 管易ERP采购入库单新增接口
		 * method: 接口方法名
		 * purchase_code: 采购订单号
		 * warehouse_code: 仓库代码
		 * supplier_code: 供应商代码
		 * order_type: 单据类型代码
		 * wms_bizcode: 外部系统单号
		 * ex_cost: 其他费用
		 * note: 备注
		 * detail_list: 商品列表
		 */
		const body = {
			...this,
			method: "gy.erp.new.purchase.arrive.add",
			purchase_code: null,      // 采购订单号
			warehouse_code: null,     // 仓库代码
			supplier_code: null,      // 供应商代码
			order_type: null,        // 单据类型代码
			wms_bizcode: null,       // 外部系统单号
			ex_cost: null,           // 其他费用
			note: null,              // 备注
			detail_list: []          // 商品列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 采购入库单审核
	 * @param {*} data
	 * @returns
	 */
	async arriveApprove(data) {
		/**
		 * 管易ERP采购入库单审核接口
		 * method: 接口方法名
		 * code: 采购入库单号
		 */
		const body = {
			...this,
			method: "gy.erp.new.purchase.arrive.approve",
			code: null,               // 采购入库单号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 采购入库单查询
	 * @param {*} data 
	 * @returns 
	 */
	async arriveSearch(data) {
		/**
		 * 管易ERP采购入库单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_create: 创建时间开始段
		 * end_create: 创建时间结束段
		 * start_approve: 审核时间开始段
		 * end_approve: 审核时间结束段
		 * warehouse_code: 仓库代码
		 * supplier_code: 供应商代码
		 * code: 单据编号
		 * status: 审核状态，0:未审核，1:已审核
		 * start_modify: 修改时间开始段
		 * end_modify: 修改时间结束段
		 * has_cancel_data: 是否返回已作废的入库单数据，false:不返回，true:返回，默认false
		 * has_account: 记账状态，0:未记账，1:已记账，-1:记录失败
		 */
		const body = {
			...this,
			method: "gy.erp.purchase.arrive.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_create: null,        // 创建时间开始段
			end_create: null,          // 创建时间结束段
			start_approve: null,       // 审核时间开始段
			end_approve: null,         // 审核时间结束段
			warehouse_code: null,      // 仓库代码
			supplier_code: null,       // 供应商代码
			code: null,                // 单据编号
			status: null,              // 审核状态，0:未审核，1:已审核
			start_modify: null,        // 修改时间开始段
			end_modify: null,          // 修改时间结束段
			has_cancel_data: false,    // 是否返回已作废的入库单数据，默认false
			has_account: null          // 记账状态，0:未记账，1:已记账，-1:记录失败
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 采购退货单新增
	 * @param {*} data
	 * @returns
	 */
	async returnAdd(data) {
		/**
		 * 管易ERP采购退货单新增接口
		 * method: 接口方法名
		 * warehouse_code: 仓库代码
		 * supplier_code: 供应商代码
		 * type_code: 单据类型代码
		 * ex_cost: 其他费用
		 * note: 备注
		 * detail_list: 商品列表
		 */
		const body = {
			...this,
			method: "gy.erp.purchase.return.add",
			warehouse_code: null,      // 仓库代码
			supplier_code: null,       // 供应商代码
			type_code: null,          // 单据类型代码
			ex_cost: null,            // 其他费用
			note: null,               // 备注
			detail_list: []           // 商品列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 采购退货单出库
	 * @param {*} data
	 * @returns
	 */
	async returnOut(data) {
		/**
		 * 管易ERP采购退货单出库接口
		 * method: 接口方法名
		 * code: 采购退货出库单单据编号
		 * details: 出库明细列表，为空则按采购退货出库单中的数量进行出库
		 */
		const body = {
			...this,
			method: "gy.erp.purchase.return.out",
			code: null,                // 采购退货出库单单据编号
			details: []                // 出库明细列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 采购退货单查询
	 * @param {*} data 
	 * @returns 
	 */
	async returnSearch(data) {
		/**
		 * 管易ERP采购退货单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_create: 创建时间开始段
		 * end_create: 创建时间结束段
		 * start_approve: 审核时间开始段
		 * end_approve: 审核时间结束段
		 * warehouse_code: 仓库代码
		 * supplier_code: 供应商代码
		 * code: 单据编号
		 * status: 订单状态，0:未审核，1:已审核
		 */
		const body = {
			...this,
			method: "gy.erp.purchase.return.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_create: null,        // 创建时间开始段
			end_create: null,          // 创建时间结束段
			start_approve: null,       // 审核时间开始段
			end_approve: null,         // 审核时间结束段
			warehouse_code: null,      // 仓库代码
			supplier_code: null,       // 供应商代码
			code: null,                // 单据编号
			status: null               // 订单状态，0:未审核，1:已审核
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
}
module.exports = Purchase;
