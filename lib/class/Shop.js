const Base = require("./Base");
/**
 * 基础信息
 */
class Shop extends Base {
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
		 * 管易ERP店铺查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * modify_start_date: 修改时间开始段
		 * modify_end_date: 修改时间结束段
		 * code: 店铺代码
		 */
		const body = {
			...this,
			method: "gy.erp.shop.get",
			page_no: 1, // 页码，默认为1
			page_size: 10, // 每页大小，默认为10
			modify_start_date: null, // 修改时间开始段
			modify_end_date: null, // 修改时间结束段
			code: null, // 店铺代码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 仓库查询
	 * @param {*} data
	 * @returns
	 */
	async warehouseSearch(data) {
		/**
		 * 管易ERP仓库查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小
		 * start_date: 开始时间
		 * end_date: 结束时间
		 * date_type: 时间类型，0：创建时间，1：修改时间，默认1
		 * has_del_data: 是否附带返回已删除的仓库数据，true：返回，false：不返回，默认false
		 * code: 仓库代码
		 */
		const body = {
			...this,
			method: "gy.erp.warehouse.get",
			page_no: 1, // 页码，默认为1
			page_size: 10, // 每页大小
			start_date: null, // 开始时间
			end_date: null, // 结束时间
			date_type: 1, // 时间类型，默认1
			has_del_data: false, // 是否返回已删除仓库数据，默认false
			code: null, // 仓库代码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 仓库新增
	 * @param {*} data
	 * @returns
	 */
	async warehouseAdd(data) {
		/**
		 * 管易ERP仓库新增接口
		 * method: 接口方法名
		 * warehouse_code: 仓库代码
		 * warehouse_name: 仓库名称
		 * contact_name: 联系人
		 * contact_phone: 联系电话
		 * contact_mobile: 联系手机
		 * province: 省信息
		 * city: 市信息
		 * district: 区信息
		 * address: 详细地址
		 * note: 备注
		 */
		const body = {
			...this,
			method: "gy.erp.warehouse.add",
			warehouse_code: null, // 仓库代码
			warehouse_name: null, // 仓库名称
			contact_name: null, // 联系人
			contact_phone: null, // 联系电话
			contact_mobile: null, // 联系手机
			province: null, // 省信息
			city: null, // 市信息
			district: null, // 区信息
			address: null, // 详细地址
			note: null, // 备注
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 商品品牌新增
	 * @param {*} data 
	 * @returns
	 */
	async breandAdd(data) {
		/**
		 * 管易ERP商品品牌新增接口
		 * method: 接口方法名
		 * code: 商品品牌代码
		 * name: 商品品牌名称 
		 * note: 备注
		 */
		const body = {
			...this,
			method: "gy.erp.item.brand.add",
			code: null, // 商品品牌代码
			name: null, // 商品品牌名称
			note: null, // 备注
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 商品品牌修改
	 * @param {*} data 
	 * @returns
	 */
	async brandUpdate(data) {
		/**
		 * 管易ERP商品品牌修改接口
		 * method: 接口方法名
		 * id: 商品品牌ID
		 * code: 商品品牌代码
		 * name: 商品品牌名称
		 * note: 备注
		 */
		const body = {
			...this,
			method: "gy.erp.item.brand.update",
			id: null, // 商品品牌ID
			code: null, // 商品品牌代码 
			name: null, // 商品品牌名称
			note: null, // 备注
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 供应商查询
	 * @param {*} data 
	 * @returns
	 */
	async supplierSearch(data) {
		/**
		 * 管易ERP供应商查询接口
		 * method: 接口方法名
		 * page_no: 页码
		 * page_size: 每页大小
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 * code: 供应商代码
		 */
		const body = {
			...this,
			method: "gy.erp.supplier.get",
			page_no: 1, // 页码
			page_size: 10, // 每页大小
			start_date: null, // 修改时间开始段
			end_date: null, // 修改时间结束段
			code: null, // 供应商代码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 收付款账户查询
	 * @param {*} data 
	 * @returns
	 */
	async accountSearch(data) {
		/**
		 * 管易ERP收付款账户查询接口
		 * method: 接口方法名
		 * page_no: 页码
		 * page_size: 每页大小
		 * start_date: 修改时间开始段
		 * end_date: 修改时间结束段
		 * code: 账户代码
		 */
		const body = {
			...this,
			method: "gy.erp.account.info.get",
			page_no: 1, // 页码
			page_size: 10, // 每页大小
			start_date: null, // 修改时间开始段
			end_date: null, // 修改时间结束段
			code: null, // 账户代码
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}
}
module.exports = Shop;
