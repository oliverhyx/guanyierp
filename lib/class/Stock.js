const Base = require("./Base")
/**
 * 库存管理
 */
class Stock extends Base {
	constructor() {
		super()
	}

	/**
	 *
	 * @param {*} data
	 * @returns
	 */
	async search(data) {

		/**
		 * 管易ERP新库存查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段，与end_date搭配使用
		 * end_date: 修改时间结束段，与start_date搭配使用
		 * barcode: 商品条码
		 * warehouse_code: 仓库代码
		 * cancel: 是否返回停用的库存记录，0:不返回停用库存记录，1：返回停用的库存记录，默认1
		 * item_code: 商品代码
		 * item_sku_code: 规格代码
		 */
		const body = {
			...this,
			method: "gy.erp.new.stock.get",
			page_no: 1, // 页码，默认为1
			page_size: 10, // 每页大小，默认为10
			start_date: null, // 修改时间开始段
			end_date: null, // 修改时间结束段
			barcode: null, // 商品条码
			warehouse_code: null, // 仓库代码
			cancel: 1, // 是否返回停用的库存记录，默认1
			item_code: null, // 商品代码
			item_sku_code: null, // 规格代码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 其他入库单新增
	 * @param {*} data 
	 * @returns 
	 */
	async otherInAdd(data) {
		/**
		 * 管易ERP其他入库单新增接口
		 * method: 接口方法名
		 * code: 其他入库单号
		 * warehouse_code: 仓库代码
		 * in_type: 入库类型
		 * in_date: 入库日期
		 * remark: 备注
		 * details: 入库明细列表
		 */
		const body = {
			...this,
			method: "gy.erp.stock.other.in.add",
			warehouse_code: null,      // 仓库代码
			type: null,                // 入库类型代码
			note: null,                // 备注
			details: [],               // 入库明细列表
			wms_bizcode: null          // 第三方系统单号，判断排重的依据
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 其他出库单新增
	 * @param {*} data 
	 * @returns 
	 */
	async otherOutAdd(data) {
		/**
		 * 管易ERP其他出库单新增接口
		 * method: 接口方法名
		 * code: 其他出库单号
		 * warehouse_code: 仓库代码
		 * out_type: 出库类型
		 * out_date: 出库日期
		 * remark: 备注
		 * details: 出库明细列表
		 */
		const body = {
			...this,
			method: "gy.erp.stock.other.out.add",
			warehouse_code: null,      // 仓库代码
			type: null,                // 出库类型代码
			note: null,                // 备注
			details: [],               // 出库明细列表
			wms_bizcode: null          // 第三方系统单号，判断排重的依据
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 库存调拨单新增
	 * @param {*} data 
	 * @returns 
	 */
	async transferAdd(data) {
		/**
		 * 管易ERP库存调拨单新增接口
		 * method: 接口方法名
		 * code: 调拨单号
		 * from_warehouse_code: 调出仓库代码
		 * to_warehouse_code: 调入仓库代码
		 * transfer_date: 调拨日期
		 * remark: 备注
		 * details: 调拨明细列表
		 */
		const body = {
			...this,
			method: "gy.erp.stock.transfer.add",
			warehouse_out_code: null,  // 调出仓库代码
			warehouse_in_code: null,   // 调入仓库代码
			order_type: null,          // 单据类型代码
			note: null,                // 备注
			operator: null,            // 操作人
			detailList: []             // 商品列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 库存调拨单查询
	 * @param {*} data 
	 * @returns 
	 */
	async transferSearch(data) {
		/**
		 * 管易ERP库存调拨单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 * start_create: 创建时间开始段
		 * end_create: 创建时间结束段
		 * start_operation: 入库时间开始段
		 * end_operation: 入库时间结束段
		 * warehouse_out: 移出仓库
		 * warehouse_in: 移入仓库
		 * code: 单据编号
		 * status_in: 入库状态，0:未入库，1:已入库
		 * status_out: 出库状态，0:未出库，1:已出库
		 */
		const body = {
			...this,
			method: "gy.erp.stock.transfer.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 修改时间开始段
			end_date: null,            // 修改时间结束段
			start_create: null,        // 创建时间开始段
			end_create: null,          // 创建时间结束段
			start_operation: null,     // 入库时间开始段
			end_operation: null,       // 入库时间结束段
			warehouse_out: null,       // 移出仓库
			warehouse_in: null,        // 移入仓库
			code: null,                // 单据编号
			status_in: null,           // 入库状态，0:未入库，1:已入库
			status_out: null           // 出库状态，0:未出库，1:已出库
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 调拨单出库
	 * @param {*} data 
	 * @returns 
	 */
	async transferOut(data) {
		/**
		 * 管易ERP调拨单出库接口
		 * method: 接口方法名
		 * code: 调拨单据号
		 * details: 出库明细列表，为空则按调拨数据出库
		 */
		const body = {
			...this,
			method: "gy.erp.stock.transfer.out",
			code: null,                // 调拨单据号
			details: []                // 出库明细，为空则按调拨数据出库
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 调拨单入库
	 * @param {*} data 
	 * @returns 
	 */
	async transferIn(data) {
		/**
		 * 管易ERP调拨单入库接口
		 * method: 接口方法名
		 * code: 调拨单据号
		 * details: 入库明细列表，为空则按调拨数量入库
		 */
		const body = {
			...this,
			method: "gy.erp.stock.transfer.in",
			code: null,                // 调拨单据号
			details: []                // 入库明细，为空则按调拨数量入库
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 库存调整单新增
	 * @param {*} data 
	 * @returns 
	 */
	async adjustAdd(data) {
		/**
		 * 管易ERP库存调整单新增接口
		 * method: 接口方法名
		 * warehouse_code: 仓库代码
		 * order_type: 单据类型代码
		 * sourceOrderCode: 来源单据号
		 * note: 备注
		 * operator: 操作人
		 * detail_list: 商品列表
		 */
		const body = {
			...this,
			method: "gy.erp.stock.adjust.add",
			warehouse_code: null,      // 仓库代码
			order_type: null,          // 单据类型代码
			sourceOrderCode: null,     // 来源单据号
			note: null,                // 备注
			operator: null,            // 操作人
			detail_list: []            // 商品列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 库存调整单查询
	 * @param {*} data 
	 * @returns 
	 */
	async adjustSearch(data) {
		/**
		 * 管易ERP库存调整单查询接口
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
			method: "gy.erp.stock.adjustheader.get",
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
	 * 库存调整单明细查询
	 * @param {*} data 
	 * @returns 
	 */
	async adjustDetailSearch(data) {
		/**
		 * 管易ERP库存调整单明细查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * code: 调整单号
		 */
		const body = {
			...this,
			method: "gy.erp.stock.adjust.detail.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			code: null                 // 调整单号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 库存盘点单新增
	 * @param {*} data 
	 * @returns 
	 */
	async countAdd(data) {
		/**
		 * 管易ERP库存盘点单新增接口
		 * method: 接口方法名
		 * code: 盘点单号
		 * warehouse_code: 仓库代码
		 * count_date: 盘点日期
		 * remark: 备注
		 * details: 盘点明细列表
		 */
		const body = {
			...this,
			method: "gy.erp.stock.count.add",
			code: null,                // 盘点单号
			warehouse_code: null,      // 仓库代码
			count_date: null,          // 盘点日期
			remark: null,              // 备注
			details: []                // 盘点明细列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 库存盘点单查询
	 * @param {*} data 
	 * @returns 
	 */
	async countSearch(data) {
		/**
		 * 管易ERP库存盘点单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 * code: 单据编号
		 */
		const body = {
			...this,
			method: "gy.erp.stock.count.order.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 修改时间开始段
			end_date: null,            // 修改时间结束段
			code: null                 // 单据编号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 盘点单盈亏明细查询
	 * @param {*} data 
	 * @returns 
	 */
	async countBreakevenSearch(data) {
		/**
		 * 管易ERP盘点单盈亏明细查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * code: 单据编号
		 */
		const body = {
			...this,
			method: "gy.erp.stock.count.order.breakeven.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			code: null                 // 单据编号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 唯一码商品对照数据新增
	 * @param {*} data 
	 * @returns 
	 */
	async uniquecodeAdd(data) {
		/**
		 * 管易ERP唯一码商品对照数据新增接口
		 * method: 接口方法名
		 * barcode: 商品条码，可选，指定了商品代码情况下，该参数可选
		 * item_code: 商品代码，可选，指定了商品条码情况下，该参数可选
		 * sku_code: 规格代码，有规格的商品此参数必选，不允许单独出现，必须与item_code搭配出现
		 * uniqueCode: 唯一码
		 */
		const body = {
			...this,
			method: "gy.erp.items.uniquecode.add",
			barcode: null,             // 商品条码
			item_code: null,           // 商品代码
			sku_code: null,            // 规格代码
			uniqueCode: null           // 唯一码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 商品库位关系查询
	 * @param {*} data 
	 * @returns 
	 */
	async itemLocationSearch(data) {
		/**
		 * 管易ERP商品库位关系查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 开始时间，不可单独使用，需与结束时间搭配使用
		 * end_date: 结束时间，不可单独使用，需与开始时间搭配使用
		 * date_type: 时间类型，1：创建时间，2：修改时间，默认值：1
		 * barcode: 商品条码
		 * warehouse_code: 仓库代码
		 * location_code: 库位代码，不可单独使用，需与仓库代码搭配使用
		 * cancel: 停用状态，0:未停用，1:停用
		 */
		const body = {
			...this,
			method: "gy.erp.item.location.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 开始时间
			end_date: null,            // 结束时间
			date_type: 1,              // 时间类型，1：创建时间，2：修改时间，默认值：1
			barcode: null,             // 商品条码
			warehouse_code: null,      // 仓库代码
			location_code: null,       // 库位代码
			cancel: null               // 停用状态，0:未停用，1:停用
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 商品库位关系创建
	 * @param {*} data 
	 * @returns 
	 */
	async itemLocationAdd(data) {
		/**
		 * 管易ERP商品库位关系创建接口
		 * method: 接口方法名
		 * warehouse_code: 仓库代码
		 * location_code: 库位代码
		 * barcode: 商品条码
		 * default_item_location: 是否设置为默认库位
		 */
		const body = {
			...this,
			method: "gy.erp.item.location.add",
			warehouse_code: null,      // 仓库代码
			location_code: null,       // 库位代码
			barcode: null,             // 商品条码
			default_item_location: 0   // 是否设置为默认库位，0:否 1：是，默认0
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 商品库位关系删除
	 * @param {*} data 
	 * @returns 
	 */
	async itemLocationDelete(data) {
		/**
		 * 管易ERP商品库位关系删除接口
		 * method: 接口方法名
		 * warehouse_code: 仓库代码
		 * location_code: 库位代码
		 * barcode: 商品条码
		 */
		const body = {
			...this,
			method: "gy.erp.item.location.delete",
			warehouse_code: null,      // 仓库代码
			location_code: null,       // 库位代码
			barcode: null              // 商品条码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 默认库位关系设置
	 * @param {*} data 
	 * @returns 
	 */
	async defaultItemLocationSet(data) {
		/**
		 * 管易ERP默认库位关系设置接口
		 * method: 接口方法名
		 * warehouse_code: 仓库代码
		 * location_code: 库位代码
		 * barcode: 商品条码
		 */
		const body = {
			...this,
			method: "gy.erp.default.itemlocation.set",
			warehouse_code: null,      // 仓库代码
			location_code: null,       // 库位代码
			barcode: null              // 商品条码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
}
module.exports = Stock
