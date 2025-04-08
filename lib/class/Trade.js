const Base = require("./Base");

/**
 * 订单管理
 */
class Trade extends Base {
	constructor() {
		super();
	}

	/**
	 * 订单新增
	 * @param {*} data
	 * @returns
	 */
	async add(data) {
		/**
		 * 管易ERP订单新增接口
		 * method: 接口方法名
		 * shop_code: 店铺代码
		 * vip_code: 会员代码
		 * platform_code: 平台单号
		 * warehouse_code: 仓库代码
		 * business_man_code: 业务员
		 * express_code: 物流公司
		 * post_fee: 物流费用
		 * currency_code: 币别代码
		 * seller_memo: 卖家备注
		 * cod: 是否货到付款
		 * deal_datetime: 拍单时间
		 * order_type_code: 订单类型
		 * plan_delivery_date: 预计发货时间
		 * cod_fee: 买家到付服务费
		 * other_service_fee: 其他服务费
		 * buyer_memo: 买家留言
		 * seller_memo_late: 二次备注
		 * extend_memo: 附加信息
		 * jz: 是否淘宝家装订单
		 * manual_specify_batch_no: 是否手工指定批次
		 * distribution_order: 是否强制指定为分销商订单
		 * details: 商品明细
		 * payments: 支付明细
		 * invoices: 发票信息
		 * receiver_name: 收货人
		 * receiver_phone: 固定电话
		 * receiver_mobile: 手机号码
		 * receiver_zip: 邮政编码
		 * receiver_province: 省名称
		 * receiver_city: 市名称
		 * receiver_district: 区名称
		 * receiver_address: 收货地址
		 * vipRealName: 真实姓名
		 * vipIdCard: 身份证号
		 * vipEmail: 电子邮箱
		 * tag_code: 订单标记
		 */
		const body = {
			...this,
			method: "gy.erp.trade.add",
			shop_code: null, // 店铺代码
			vip_code: null, // 会员代码
			platform_code: null, // 平台单号
			warehouse_code: null, // 仓库代码
			business_man_code: null, // 业务员
			express_code: null, // 物流公司
			post_fee: null, // 物流费用
			currency_code: null, // 币别代码
			seller_memo: null, // 卖家备注
			cod: null, // 是否货到付款
			deal_datetime: null, // 拍单时间
			order_type_code: null, // 订单类型
			plan_delivery_date: null, // 预计发货时间
			cod_fee: null, // 买家到付服务费
			other_service_fee: null, // 其他服务费
			buyer_memo: null, // 买家留言
			seller_memo_late: null, // 二次备注
			extend_memo: null, // 附加信息
			jz: null, // 是否淘宝家装订单
			manual_specify_batch_no: null, // 是否手工指定批次
			distribution_order: null, // 是否强制指定为分销商订单
			details: [], // 商品明细
			payments: [], // 支付明细
			invoices: [], // 发票信息
			receiver_name: null, // 收货人
			receiver_phone: null, // 固定电话
			receiver_mobile: null, // 手机号码
			receiver_zip: null, // 邮政编码
			receiver_province: null, // 省名称
			receiver_city: null, // 市名称
			receiver_district: null, // 区名称
			receiver_address: null, // 收货地址
			vipRealName: null, // 真实姓名
			vipIdCard: null, // 身份证号
			vipEmail: null, // 电子邮箱
			tag_code: null // 订单标记
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 订单二次备注修改
	 * @param {*} data
	 * @returns
	 */
	async memoUpdate(data) {
		/**
		 * 管易ERP订单二次备注修改接口
		 * method: 接口方法名
		 * tid: 平台单号
		 * memo: 备注
		 */
		const body = {
			...this,
			method: "gy.erp.trade.memo.update",
			tid: null, // 平台单号
			memo: null // 备注
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 订单退款状态修改
	 * @param {*} data 
	 * @returns 
	 */
	async refundUpdate(data) {
		/**
		 * 管易ERP订单退款状态修改接口
		 * method: 接口方法名
		 * tid: 平台单号
		 * oid: 子订单号
		 * refund_state: 退款状态，0:未退款，1:退款完成，2:退款中
		 */
		const body = {
			...this,
			method: "gy.erp.trade.refund.update",
			tid: null,                 // 平台单号
			oid: null,                 // 子订单号
			refund_state: null         // 退款状态，0:未退款，1:退款完成，2:退款中
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 订单标记修改
	 * @param {*} data 
	 * @returns 
	 */
	async tagUpdate(data) {
		/**
		 * 管易ERP订单标记修改接口
		 * method: 接口方法名
		 * code: 单据编号
		 * tag_code: 标记代码（标记代码与标记名称两者必选其一，两者都提供时，以标记代码为准）
		 * tag_name: 标记名称（标记代码与标记名称两者必选其一，两者都提供时，以标记代码为准）
		 * operater: 操作人
		 */
		const body = {
			...this,
			method: "gy.erp.trade.tag.update",
			code: null,                // 单据编号
			tag_code: null,            // 标记代码
			tag_name: null,            // 标记名称
			operater: null             // 操作人
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 订单查询
	 * @param {*} data
	 * @returns
	 */
	async search(data) {
		/**
		 * 管易ERP订单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 开始时间
		 * end_date: 结束时间
		 * date_type: 时间类型，0:创建时间，1:拍单时间，2:付款时间，3:修改时间，默认0
		 * order_state: 订单类型，0:全部，1:未审核，2:已审核，默认0
		 * warehouse_code: 仓库代码
		 * shop_code: 店铺代码
		 * vip_name: 会员名称
		 * platform_code: 平台单号
		 * receiver_mobile: 收件手机
		 * code: 单据编号
		 * has_cancel_data: 是否附带返回已取消与已删除的订单数据，false:不返回，true:返回，默认false
		 */
		const body = {
			...this,
			method: "gy.erp.trade.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 开始时间
			end_date: null,            // 结束时间
			date_type: null,           // 时间类型，0:创建时间，1:拍单时间，2:付款时间，3:修改时间，默认0
			order_state: null,         // 订单类型，0:全部，1:未审核，2:已审核，默认0
			warehouse_code: null,      // 仓库代码
			shop_code: null,           // 店铺代码
			vip_name: null,            // 会员名称
			platform_code: null,       // 平台单号
			receiver_mobile: null,     // 收件手机
			code: null,                // 单据编号
			has_cancel_data: null      // 是否附带返回已取消与已删除的订单数据，false:不返回，true:返回，默认false
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 订单历史查询
	 * @param {*} data
	 * @returns
	 */
	async historySearch(data) {
		/**
		 * 管易ERP订单历史查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 开始时间
		 * end_date: 结束时间
		 * date_type: 时间类型，0:创建时间，1:拍单时间，2:付款时间，3:修改时间，默认0
		 * order_state: 订单类型，0:全部，1:未审核，2:已审核，默认0
		 * warehouse_code: 仓库代码
		 * shop_code: 店铺代码
		 * vip_name: 会员名称
		 * platform_code: 平台单号
		 * receiver_mobile: 收件手机
		 * code: 单据编号
		 * retrun_total: 是否返回总量，0:不返回，1:返回，默认1
		 */
		const body = {
			...this,
			method: "gy.erp.trade.history.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 开始时间
			end_date: null,            // 结束时间
			date_type: null,           // 时间类型，0:创建时间，1:拍单时间，2:付款时间，3:修改时间，默认0
			order_state: null,         // 订单类型，0:全部，1:未审核，2:已审核，默认0
			warehouse_code: null,      // 仓库代码
			shop_code: null,           // 店铺代码
			vip_name: null,            // 会员名称
			platform_code: null,       // 平台单号
			receiver_mobile: null,     // 收件手机
			code: null,                // 单据编号
			retrun_total: 1            // 是否返回总量，0:不返回，1:返回，默认1
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
	
	/**
	 * 发货单查询
	 * @param {*} data
	 * @returns
	 */
	async deliverySearch(data) {
		/**
		 * 管易ERP发货单查询接口
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_create: 创建时间开始段
		 * end_create: 创建时间结束段
		 * start_delivery_date: 发货时间开始段
		 * end_delivery_date: 发货时间结束段
		 * start_modify_date: 修改时间开始段，格式：yyyy-MM-dd HH:mm:ss，必须与修改时间结束段搭配使用
		 * end_modify_date: 修改时间结束段，格式：yyyy-MM-dd HH:mm:ss，必须与修改时间开始段搭配使用
		 * del: 是否同时返回已作废的单据，0:不返回已作废的单据，1:返回已作废的单据，默认0
		 * code: 单据编号
		 * warehouse_code: 仓库代码
		 * shop_code: 店铺代码
		 * outer_code: 平台单号
		 * print: 打印状态，0:未打印，1:打印
		 * scan: 扫描状态
		 * delivery: 发货状态，0:未发货、发货中、发货失败，1:发货成功
		 * cod: 货到付款状态
		 * vip_name: 会员名称
		 * wms: 是否外仓单据，0:不是，1:是
		 * mail_no: 物流单号
		 * sync_status: 数据同步状态，-1:同步失败，0:未同步，1:已同步，不传不检查该状态
		 */
		const body = {
			...this,
			method: "gy.erp.trade.deliverys.get",
			page_no: 1,
			page_size: 10,
			start_create: null,
			end_create: null,
			start_delivery_date: null,
			end_delivery_date: null,
			start_modify_date: null,
			end_modify_date: null,
			del: 0,
			code: null,
			warehouse_code: null,
			shop_code: null,
			outer_code: null,
			print: null,
			scan: null,
			delivery: null,
			cod: null,
			vip_name: null,
			wms: null,
			mail_no: null,
			sync_status: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 历史发货单查询
	 * @param {Object} data - 查询参数
	 * @returns {Object} 查询结果
	 */
	async deliveryHistorySearch(data) {
		const body = {
			...this,
			method: "gy.erp.trade.deliverys.history.get",
			page_no: 1,
			page_size: 10,
			start_delivery_date: null,
			end_delivery_date: null,
			shop_code: null,
			code: null,
			sync_status: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 发货单同步状态更新
	 * @param {*} data 
	 * @returns 
	 */
	async syncstatusUpdate(data) {
		/**
		 * 管易ERP发货单同步状态批量更新接口
		 * method: 接口方法名
		 * deliveryCodeList: 发货单号列表
		 * status: 数据同步状态，-1:同步失败，0:未同步，1:已同步
		 * sync_memo: 数据同步备注
		 * operator: 操作人，默认admin
		 * operate_date: 操作时间，默认当前时间
		 */
		const body = {
			...this,
			method: "gy.erp.trade.deliverys.syncstatus.update",
			deliveryCodeList: [],      // 发货单号列表
			status: null,              // 数据同步状态，-1:同步失败，0:未同步，1:已同步
			sync_memo: null,           // 数据同步备注
			operator: null,            // 操作人，默认admin
			operate_date: null         // 操作时间，默认当前时间
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
	
	/**
	 * 发货包裹明细查询
	 * @param {*} data 
	 * @returns 
	 */
	async deliveryPackageOrderSearch(data) {
		/**
		 * 管易ERP发货包裹明细查询接口
		 * method: 接口方法名
		 * code: 发货单单据编号
		 */
		const body = {
			...this,
			method: "gy.erp.delivery.package.order.get",
			code: null                 // 发货单单据编号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 发货单取消
	 * @param {*} data 
	 * @returns 
	 */
	async deliveryCancel(data) {
		/**
		 * 管易ERP发货单取消接口
		 * method: 接口方法名
		 * deilivery_code: 发货单单据号
		 * operator: 操作人，默认admin
		 * operate_date: 操作时间，默认当前服务器时间
		 */
		const body = {
			...this,
			method: "gy.erp.delivery.order.cancel",
			deilivery_code: null,      // 发货单单据号
			operator: null,            // 操作人，默认admin
			operate_date: null         // 操作时间，默认当前服务器时间
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 发货单修改
	 * @param {*} data 
	 * @returns 
	 */
	async deliveryUpdate(data) {
		/**
		 * 管易ERP发货单修改接口
		 * method: 接口方法名
		 * code: 单据编号
		 * express_code: 物流公司代码
		 * mail_no: 运单号
		 * weight_qty: 称重重量
		 * note: 发货备注
		 * post_cost: 物流成本
		 * receiver_name: 收货人
		 * receiver_phone: 收货人电话
		 * receiver_mobile: 收货人手机
		 * receiver_province: 省
		 * receiver_city: 市
		 * receiver_district: 区
		 * receiver_address: 地址
		 * vip_real_name: 真实姓名
		 * vip_id_card: 身份证号
		 * vip_email: 电子邮箱
		 * deliverys_state_paramlist: 操作列表
		 */
		const body = {
			...this,
			method: "gy.erp.trade.deliverys.update",
			code: null,                      // 单据编号
			express_code: null,              // 物流公司代码
			mail_no: null,                   // 运单号
			weight_qty: null,                // 称重重量
			note: null,                      // 发货备注
			post_cost: null,                 // 物流成本
			receiver_name: null,             // 收货人
			receiver_phone: null,            // 收货人电话
			receiver_mobile: null,           // 收货人手机
			receiver_province: null,         // 省
			receiver_city: null,             // 市
			receiver_district: null,         // 区
			receiver_address: null,          // 地址
			vip_real_name: null,             // 真实姓名
			vip_id_card: null,               // 身份证号
			vip_email: null,                 // 电子邮箱
			deliverys_state_paramlist: null  // 操作列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 发货包裹称重
	 * @param {*} data 
	 * @returns 
	 */
	async deliveryWeightAdd(data) {
		/**
		 * 管易ERP发货包裹称重接口
		 * method: 接口方法名
		 * mail_no: 物流单号
		 * weight: 称重重量
		 * ignore_error_weight: 是否忽略差重异常
		 * ignore_error_refund: 是否忽略退款异常
		 * ignore_error_already_weighed: 是否忽略已称重异常
		 * operator: 操作人
		 * operate_date: 操作时间
		 */
		const body = {
			...this,
			method: "gy.erp.delivery.order.weight.add",
			mail_no: null,                       // 物流单号
			weight: null,                        // 称重重量
			ignore_error_weight: null,           // 是否忽略差重异常，默认false
			ignore_error_refund: null,           // 是否忽略退款异常，默认false
			ignore_error_already_weighed: null,  // 是否忽略已称重异常，默认false
			operator: null,                      // 操作人，默认admin
			operate_date: null                   // 操作时间，默认服务器当前时间
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 退货单新增
	 * @param {*} data 
	 * @returns 
	 */
	async returnAdd(data) {
		/**
		 * 管易ERP退货单新增接口
		 * method: 接口方法名
		 * type_code: 退货类型代码
		 * shop_code: 店铺代码
		 * vip_code: 会员代码
		 * note: 备注
		 * trade_code: 销售订单单据编号
		 * trade_platform_code: 销售订单平台单号
		 * item_detail: 退入商品明细
		 * refund_detail: 退款明细
		 */
		const body = {
			...this,
			method: "gy.erp.trade.return.add",
			type_code: null,           // 退货类型代码
			shop_code: null,           // 店铺代码
			vip_code: null,            // 会员代码
			note: null,                // 备注
			trade_code: null,          // 销售订单单据编号
			trade_platform_code: null, // 销售订单平台单号
			item_detail: [],           // 退入商品明细
			refund_detail: []          // 退款明细
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 退货单入库
	 * @param {*} data 
	 * @returns 
	 */
	async returnApprove(data) {
		/**
		 * 管易ERP退货单入库接口
		 * method: 接口方法名
		 * code: 退货单单据编号
		 * warehouse_code: 退入仓库代码
		 * express_code: 退回快递代码
		 * express_no: 退回快递运单号
		 */
		const body = {
			...this,
			method: "gy.erp.trade.return.approve",
			code: null,                // 退货单单据编号
			warehouse_code: null,      // 退入仓库代码
			express_code: null,        // 退回快递代码
			express_no: null           // 退回快递运单号
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 退货单查询
	 * @param {*} data 
	 * @returns 
	 */
	async returnSearch(data) {
		/**
		 * 管易ERP退货单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * code: 单据编号
		 * start_create: 创建时间开始段
		 * end_create: 创建时间结束段
		 * in_begin_time: 入库时间开始段
		 * in_end_time: 入库时间结束段
		 * shop_code: 店铺代码
		 * platform_code: 平台单号
		 * return_type: 退货类型代码
		 * express_no: 快递单号
		 * vip_name: 会员名称
		 * agree: 同意状态，0:未同意，1:同意
		 * receive: 入库状态，0:未入库，1:已入库
		 * cancel: 作废状态，0:未作废，1:已作废
		 * no_parcel: 是否三无包裹，0:不是，1:是
		 * receiver_name: 退货人姓名
		 * receiver_phone: 退货人手机
		 * warehousein_code: 退入仓库代码
		 * warehouseout_code: 退出仓库代码
		 * modify_start_date: 修改时间开始段
		 * modify_end_date: 修改时间结束段
		 */
		const body = {
			...this,
			method: "gy.erp.trade.return.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			code: null,                // 单据编号
			start_create: null,        // 创建时间开始段
			end_create: null,          // 创建时间结束段
			in_begin_time: null,       // 入库时间开始段
			in_end_time: null,         // 入库时间结束段
			shop_code: null,           // 店铺代码
			platform_code: null,       // 平台单号
			return_type: null,         // 退货类型代码
			express_no: null,          // 快递单号
			vip_name: null,            // 会员名称
			agree: null,               // 同意状态，0:未同意，1:同意
			receive: null,             // 入库状态，0:未入库，1:已入库
			cancel: null,              // 作废状态，0:未作废，1:已作废
			no_parcel: null,           // 是否三无包裹，0:不是，1:是
			receiver_name: null,       // 退货人姓名
			receiver_phone: null,      // 退货人手机
			warehousein_code: null,    // 退入仓库代码
			warehouseout_code: null,   // 退出仓库代码
			modify_start_date: null,   // 修改时间开始段
			modify_end_date: null      // 修改时间结束段
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
	/**
	 * 退款单查询
	 * @param {*} data 
	 * @returns 
	 */
	async refundSearch(data) {
		/**
		 * 管易ERP退款单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_create: 创建时间开始段
		 * end_create: 创建时间结束段
		 * strat_agree_date: 退款同意时间开始段
		 * end_agree_date: 退款同意时间结束段
		 * start_modify_date: 修改时间开始段
		 * end_modify_date: 修改时间结束段
		 * code: 单据编号
		 * platfrom_code: 平台订单号
		 * refund_code: 平台退款单号
		 * type_code: 会员代码
		 * vip_name: 会员名称
		 * payment_type_code: 退款支付方式代码
		 * shop_code: 店铺代码
		 * cancel: 取消状态，0:未取消，1:已取消
		 */
		const body = {
			...this,
			method: "gy.erp.trade.refund.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_create: null,        // 创建时间开始段
			end_create: null,          // 创建时间结束段
			strat_agree_date: null,    // 退款同意时间开始段
			end_agree_date: null,      // 退款同意时间结束段
			start_modify_date: null,   // 修改时间开始段
			end_modify_date: null,     // 修改时间结束段
			code: null,                // 单据编号
			platfrom_code: null,       // 平台订单号
			refund_code: null,         // 平台退款单号
			type_code: null,           // 会员代码
			vip_name: null,            // 会员名称
			payment_type_code: null,   // 退款支付方式代码
			shop_code: null,           // 店铺代码
			cancel: null               // 取消状态，0:未取消，1:已取消
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 退款单新增
	 * @param {*} data 
	 * @returns 
	 */
	async refundAdd(data) {
		/**
		 * 管易ERP退款单新增接口
		 * method: 接口方法名
		 * refund_code: 退款单单号
		 * refund_type: 退款单种类，0:仅退款，1:退货退款
		 * refund_reason: 退款原因
		 * trade_code: 关联订单单号
		 * shop_code: 店铺代码
		 * vip_code: 会员代码
		 * type_code: 单据类型代码
		 * payment_type_code: 退款支付方式代码
		 * amount: 退款金额
		 * note: 备注
		 * item_detail: 退款商品列表，退货退款(refund_type为1)必填
		 */
		const body = {
			...this,
			method: "gy.erp.trade.refund.add",
			refund_code: null,         // 退款单单号
			refund_type: null,         // 退款单种类，0:仅退款，1:退货退款
			refund_reason: null,       // 退款原因
			trade_code: null,          // 关联订单单号
			shop_code: null,           // 店铺代码
			vip_code: null,            // 会员代码
			type_code: null,           // 单据类型代码
			payment_type_code: null,   // 退款支付方式代码
			amount: null,              // 退款金额
			note: null,                // 备注
			item_detail: []            // 退款商品列表，退货退款(refund_type为1)必填
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 支付方式查询
	 * @param {*} data 
	 * @returns 
	 */
	async paymentSearch(data) {
		/**
		 * 管易ERP支付方式查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * modify_start_date: 修改时间开始段
		 * modify_end_date: 修改时间结束段
		 * code: 支付方式代码
		 */
		const body = {
			...this,
			method: "gy.erp.trade.payment.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			modify_start_date: null,   // 修改时间开始段
			modify_end_date: null,     // 修改时间结束段
			code: null                 // 支付方式代码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 区域查询
	 * @param {*} data 
	 * @returns 
	 */
	async areaSearch(data) {
		/**
		 * 管易ERP区域查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 */
		const body = {
			...this,
			method: "gy.erp.area.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 修改时间开始段
			end_date: null             // 修改时间结束段
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 账单查询
	 * @param {*} data 
	 * @returns 
	 */
	async accountSearch(data) {
		/**
		 * 管易ERP账单查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_date: 开始时间
		 * end_date: 结束时间
		 * data_type: 数据类型，1：未归档数据，2：已归档数据，默认1
		 */
		const body = {
			...this,
			method: "gy.erp.trade.account.get",
			page_no: 1,                // 页码，默认为1
			page_size: 10,             // 每页大小，默认为10
			start_date: null,          // 开始时间
			end_date: null,            // 结束时间
			data_type: 1               // 数据类型，1：未归档数据，2：已归档数据，默认1
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
}
module.exports = Trade;
