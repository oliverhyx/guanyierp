const Base = require("./Base");

class Purchase extends Base {
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
        "requestMethod": "gy.erp.purchase.get",
        "flag": null,
        "total": 231,
        "hasMore": true,
        "purchaseOrderList": [
            {
                "code": "PO841102440559",
                "note": "",
                "create_date": "2025-03-25 13:40:08",
                "approve_date": "2025-03-25 13:40:16",
                "close": false,
                "del": false,
                "wms": 0,
                "warehouse_code": "RM001",
                "warehouse_name": "日弥公共仓",
                "supplier_code": "RMGYS0003",
                "supplier_name": "浙江有时有间生物科技有限公司",
                "status": 1,
                "detailList": [
                    {
                        "qty": 5000,
                        "price": 0,
                        "amount": 0,
                        "note": "",
                        "taxAmount": 0,
                        "item_id": 399888100130,
                        "item_sku_id": 399888101236,
                        "item_code": "F140014",
                        "sku_code": "F140014",
                        "sku_note": "",
                        "sku_name": "（赠品）手拎袋",
                        "price_no_rate": 0,
                        "amount_no_rate": 0,
                        "tax_rate": 0,
                        "unarrive_qty": 0
                    }
                ],
                "create_name": "赵幽兰",
                "order_type": "2.日常补货",
                "expected_receipt_date": "2025-03-25 00:00:00",
                "from_no": null,
                "wms_order": 0,
                "wms_error": null
            }
        ]
    }
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
