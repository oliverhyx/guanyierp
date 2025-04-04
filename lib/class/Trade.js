const Base = require("./Base");

/**
 * 订单管理
 */
class Trade extends Base {
	constructor() {
		super();
	}

	/**
	 *
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
}
module.exports = Trade;
