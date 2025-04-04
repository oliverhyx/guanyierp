const Base = require("./Base");

class Product extends Base {
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
    "requestMethod": "gy.erp.items.get",
    "flag": null,
    "total": 550,
    "items": [
      {
        "id": 831148139185,
        "create_date": "2025-02-25 09:20:47",
        "modify_date": "2025-03-31 11:14:30",
        "code": "F140384",
        "name": "（成品）脂排舞-蜜瓜味",
        "note": "",
        "weight": 0.24,
        "combine": false,
        "del": false,
        "length": 0,
        "width": 0,
        "height": 0,
        "volume": 0,
        "simple_name": "（成品）脂排舞-蜜瓜味",
        "category_code": "1401",
        "category_name": "日弥成品",
        "supplier_code": "RMGYS0003",
        "item_unit_code": null,
        "item_unit_name": null,
        "package_point": 0,
        "sales_point": 0,
        "sales_price": 0,
        "purchase_price": 0,
        "agent_price": 0,
        "cost_price": 0,
        "stock_status_code": null,
        "pic_url": "https://zjk-prd-file-r.oss-cn-zhangjiakou.aliyuncs.com/permanent/399400064454/ic/item/picture/20250225092244_696_1740446564848ITEM_PIC_20250225092244/ITEM_PIC_20250225092244.jpg",
        "tax_no": "",
        "tax_rate": 0,
        "origin_area": "",
        "supplier_outerid": "",
        "shelf_life": 0,
        "warning_days": 0,
        "skus": [
          {
            "id": 831148855232,
            "code": "F140384",
            "name": "成品）脂排舞-蜜瓜味",
            "note": "",
            "order": 0,
            "weight": 0.24,
            "volume": 0,
            "package_point": 0,
            "sales_point": 0,
            "sales_price": 0,
            "purchase_price": 0,
            "agent_price": 0,
            "cost_price": 0,
            "stock_status_code": null,
            "bar_code": null,
            "tax_no": "",
            "tax_rate": 0,
            "origin_area": "",
            "supplier_outerid": "",
            "goods_id": 831148851180
          }
        ],
        "combine_items": [],
        "custom_attr": {},
        "item_add_attribute": 0,
        "item_brand_id": "692839702113",
        "item_brand_code": "NIMI00003",
        "item_brand_name": "NIMI",
        "goods_id": null,
        "bar_code": null,
        "package_material": false
		}
	]
}
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
