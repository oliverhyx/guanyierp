const Base = require("./Base")

class Stock extends Base {
	constructor() {
		super()
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
    "requestMethod": "gy.erp.new.stock.get",
    "flag": null,
    "total": 281,
    "stocks": [
        {
            "barcode": null,
            "del": false,
            "qty": 0,
            "warehouse_code": "RM001",
            "item_code": "F140085",
            "sku_code": "F140085",
            "salable_qty": 0,
            "road_qty": 0,
            "pick_qty": 0,
            "item_name": "(试用装）very blue 洗发水+护发素12ml",
            "item_sku_name": "(试用装）very blue 洗发水+护发素12ml",
            "warehouse_name": "日弥公共仓",
            "pick_qty_reject": 0,
            "qty_reject": 0,
            "total_qty": 0,
            "total_pick_qty": 0
        }
    ]
}
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
}
module.exports = Stock
