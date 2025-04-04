const Base = require("./Base");

class Trade extends Base {
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
    "requestMethod": "gy.erp.trade.deliverys.get",
    "flag": null,
    "deliverys": [
      {
        "create_date": "2025-03-28 14:31:03",
        "modify_date": "2025-03-28 15:13:22",
        "code": "SDO842184194341",
        "qty": 1,
        "pay_time": null,
        "cod": false,
        "refund": 0,
        "invoiceDate": null,
        "bigchar": null,
        "cancel": 0,
        "picture_bill": true,
        "post_fee": "0",
        "cod_fee": "0",
        "discount_fee": "0",
        "post_cost": "0",
        "unpaid_amount": "0",
        "pictureBill": true,
        "platform_code": "s842184115601",
        "plan_delivery_date": null,
        "buyer_memo": null,
        "seller_memo": "发莓子25，樱花25，香蕉14，19203520201226101533Q",
        "receiver_name": "马飞",
        "receiver_phone": "",
        "receiver_mobile": "18675513614",
        "receiver_zip": "",
        "receiver_address": "广东省广州市番禺区石楼镇兴亚二路33号21栋502",
        "create_name": "胡诚燕",
        "express_no": "SF3147682322520",
        "vip_name": "日弥",
        "shop_name": "日弥自有店铺（公共仓）",
        "area_name": "广东省-广州市-番禺区",
        "warehouse_name": "日弥公共仓",
        "express_code": "SFDSBK",
        "express_name": "顺丰一联单",
        "tag_name": "",
        "seller_memo_late": null,
        "shop_memo": "",
        "shelf_no": null,
        "details": [
          {
            "id": 842184158191,
            "qty": 1,
            "discount": 1,
            "refund": 0,
            "itemCategoryName": "日弥辅料",
            "itemUnitName": null,
            "barcode": null,
            "tariff": 0,
            "memo": "",
            "picUrl": null,
            "oid": "",
            "discount_fee": "0",
            "amount_after": "0",
            "lack": 0,
            "trade_code": "SO842184115601",
            "origin_price": 0,
            "origin_amount": 0,
            "platform_item_name": "",
            "platform_sku_name": "",
            "item_id": "401834641925",
            "item_sku_id": "403389093180",
            "item_code": "F01108",
            "item_name": "春美包装38*44快递袋子",
            "sku_code": "F01108",
            "sku_name": "春美包装38*44快递袋子",
            "sku_note": "",
            "combine_item_code": null,
            "combine_item_name": null,
            "location_code": "",
            "platform_code": "s842184115601",
            "tax_rate": 0,
            "tax_amount": 0,
            "order_type": "Sales",
            "platform_flag": 0,
            "detail_unique": null,
            "detail_batch": null,
            "is_gift": 0,
            "businessman_name": null,
            "item_add_attribute": 0,
            "gift_source_view": null,
            "currency_code": null,
            "currency_name": null,
            "tax_no": "",
            "post_cost": "0",
            "other_service_fee": "0",
            "total_cost_price": "0",
            "price": "0",
            "amount": "0",
            "post_fee": "0",
            "plat_discount_amount": 0,
            "distribution_post_fee": null,
            "sale_unit_name": null,
            "exchange_rate": null,
            "lack_qty": 0,
            "lack_reason": null,
            "combine_item_code_split": null,
            "combine_item_name_split": null,
            "mini_stock_detail_list": null,
            "anchor_id": null,
            "anchor_name": null,
            "platform_additional_order_number": null
          }
        ],
        "delivery_statusInfo": {
          "scan": false,
          "weight": false,
          "wms": 0,
          "delivery": 2,
          "cancel": false,
          "intercept": false,
          "print_express": true,
          "express_print_name": "胡诚燕",
          "express_print_date": "2025-03-28 14:51:16",
          "print_delivery": false,
          "delivery_print_name": null,
          "delivery_print_date": null,
          "scan_name": null,
          "scan_date": null,
          "weight_name": null,
          "weight_date": null,
          "wms_order": 0,
          "delivery_name": "胡诚燕",
          "delivery_date": "2025-03-28 15:13:22",
          "cancel_name": null,
          "cancel_date": null,
          "weight_qty": "0.0",
          "thermal_print": 1,
          "thermal_print_status": 1,
          "picking_user": null,
          "picking_date": null,
          "standard_weight": 0,
          "pick_finish": false,
          "logistics_printed_bitch": null,
          "logistics_serial_no": null,
          "wms_date": null,
          "volume_total": null
        },
        "invoices": [],
        "payments": null,
        "vip_code": "日弥",
        "warehouse_code": "RM001",
        "shop_code": "RMSHOP001",
        "vip_real_name": "日弥",
        "vip_id_card": "",
        "package_center_code": null,
        "package_center_name": null,
        "sync_status": 0,
        "sync_memo": null,
        "drp_tenant_name": null,
        "drp_tenant_mobile": null,
        "payment": "0",
        "amount": "0",
        "store_name": null,
        "store_code": null,
        "finance_approver": null,
        "appointment_no": null,
        "insure_amount": 0,
        "sub_type_name": null,
        "stock_location": [],
        "distribution_channel": null,
        "tax_amount_total": "0",
        "order_type_name": null,
        "extend_memo": null,
        "drp_customer_name": null,
        "actual_volume": null,
        "extend_info": null,
        "store_info": null,
        "from_type_name": null
      }
    ],
    "total": 283
  }
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
	 *
	 * 参数说明：
	 * page_no: 页码，默认为1
	 * page_size: 每页大小，默认为10
	 * start_delivery_date: 发货时间开始段，与end_delivery_date搭配使用，时间跨度不能超过24小时
	 * end_delivery_date: 发货时间结束段，与start_delivery_date搭配使用，时间跨度不能超过24小时
	 * shop_code: 店铺代码，提供此参数则发货时间参数可不填
	 * code: 单据编号，提供此参数则发货时间参数可不填
	 * sync_status: 数据同步状态，-1:同步失败，0:未同步，1:已同步，不传不检查该状态
{
    "success": true,
    "errorCode": "",
    "subErrorCode": "",
    "errorDesc": "",
    "subErrorDesc": "",
    "requestMethod": "gy.erp.trade.deliverys.history.get",
    "flag": null,
    "deliverys": [
      {
        "create_date": "2024-12-31 16:54:32",
        "modify_date": "2025-01-02 10:40:57",
        "code": "SDO813455941490",
        "qty": 400,
        "pay_time": null,
        "cod": false,
        "refund": 0,
        "invoiceDate": null,
        "bigchar": null,
        "unpaid_amount": "0",
        "post_fee": "0",
        "cod_fee": "0",
        "discount_fee": "0",
        "post_cost": "0",
        "platform_code": "2022063098377000005-18",
        "plan_delivery_date": null,
        "buyer_memo": null,
        "seller_memo": "6，樱花70置换香蕉10樱花60 抹茶110置换香蕉110",
        "receiver_name": "李佳",
        "receiver_phone": "",
        "receiver_mobile": "13927140205",
        "receiver_zip": "",
        "receiver_address": "广东省云浮市新兴县凤凰广场菜鸟驿站",
        "create_name": "陈柳波",
        "express_no": "ZY202409783047",
        "vip_name": "李佳13927140205",
        "shop_name": "日弥自有店铺（公共仓）",
        "area_name": "广东省-云浮市-新兴县",
        "warehouse_name": "日弥公共仓",
        "express_code": "ZTOKY",
        "express_name": "中通快运",
        "tag_name": null,
        "seller_memo_late": null,
        "shop_memo": "",
        "shelf_no": null,
        "details": [
          {
            "id": 813455926024,
            "qty": 120,
            "discount": 1,
            "refund": 0,
            "itemCategoryName": "日弥成品",
            "itemUnitName": null,
            "barcode": null,
            "tariff": 0,
            "memo": null,
            "picUrl": null,
            "oid": null,
            "lack": 0,
            "discount_fee": "0",
            "amount_after": "0",
            "trade_code": "SO813425025016",
            "origin_price": 0,
            "origin_amount": 0,
            "platform_item_name": "F140004",
            "platform_sku_name": null,
            "item_id": "399888073577",
            "item_sku_id": "399888096833",
            "item_code": "F140004",
            "item_name": "（成品）脂排舞-莓子味",
            "sku_code": "F140004",
            "sku_name": "脂排舞-莓子味",
            "sku_note": "",
            "combine_item_code": null,
            "combine_item_name": null,
            "location_code": "",
            "platform_code": "2022063098377000005-18",
            "tax_rate": 0,
            "tax_amount": 0,
            "order_type": "Sales",
            "platform_flag": 0,
            "detail_unique": null,
            "detail_batch": null,
            "businessman_name": null,
            "is_gift": 0,
            "gift_source_view": null,
            "currency_code": null,
            "currency_name": null,
            "plat_discount_amount": 0,
            "distribution_post_fee": null,
            "sale_unit_name": null,
            "exchange_rate": null,
            "lack_qty": 0,
            "lack_reason": null,
            "post_cost": "0",
            "other_service_fee": "0",
            "total_cost_price": "0",
            "price": "0",
            "amount": "0",
            "post_fee": "0",
            "combine_item_code_split": null,
            "combine_item_name_split": null,
            "anchor_id": null,
            "anchor_name": null,
            "platform_additional_order_number": null
          },
        ],
        "delivery_statusInfo": {
          "scan": false,
          "weight": false,
          "wms": 0,
          "delivery": 2,
          "cancel": false,
          "print_express": true,
          "express_print_name": "胡诚燕",
          "express_print_date": "2025-01-02 10:40:08",
          "print_delivery": true,
          "delivery_print_name": "胡诚燕",
          "delivery_print_date": "2025-01-02 10:40:02",
          "scan_name": null,
          "scan_date": null,
          "weight_name": null,
          "weight_date": null,
          "wms_order": 0,
          "delivery_name": "胡诚燕",
          "delivery_date": "2025-01-02 10:40:57",
          "cancel_name": null,
          "cancel_date": null,
          "weight_qty": "0.0",
          "thermal_print": 2,
          "thermal_print_status": 0,
          "logistics_printed_bitch": null,
          "logistics_serial_no": null,
          "wms_date": null,
          "volume_total": null
        },
        "invoices": [],
        "payments": null,
        "vip_code": "李佳13927140205",
        "warehouse_code": "RM001",
        "shop_code": "RMSHOP001",
        "vip_real_name": "",
        "vip_id_card": "",
        "package_center_code": null,
        "package_center_name": null,
        "sync_status": 0,
        "sync_memo": null,
        "picture_bill": false,
        "drp_tenant_name": null,
        "drp_tenant_mobile": null,
        "store_name": null,
        "store_code": null,
        "finance_approver": null,
        "appointment_no": null,
        "insure_amount": 0,
        "sub_type_name": null,
        "payment": "0",
        "amount": "0",
        "stock_location": [],
        "distribution_channel": null,
        "tax_amount_total": "0",
        "order_type_name": null,
        "extend_memo": null,
        "drp_customer_name": null,
        "actual_volume": null,
        "extend_info": null,
        "store_info": null,
        "from_type_name": null
      }
    ],
    "total": 18
  }
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
