const Base = require("./Base");

/**
 * 商品管理
 */
class Product extends Base {
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

	/**
	 * 商品新增
	 * @param {Object} data 商品信息
	 * @param {string} data.code 商品代码 (必填)
	 * @param {string} data.name 商品名称
	 * @param {string} data.item_brand_id 商品品牌id
	 * @param {string} data.item_brand_code 商品品牌代码
	 * @param {string} data.simple_name 商品简称
	 * @param {string} data.category_code 商品类别code
	 * @param {string} data.supplier_code 供应商code
	 * @param {string} data.note 备注
	 * @param {boolean} data.minusStock 是否启用负库存
	 * @param {number} data.item_add_attribute 商品附加属性 (0:普通商品,1:唯一码商品,2:批次商品,默认0)
	 * @param {Array} data.skus 规格信息
	 * @param {string} data.pic_url 图片url
	 * @param {string} data.tax_code 税收分类编码
	 * @param {string} data.tax_no 商品税号
	 * @param {number} data.tax_rate 商品税率
	 * @param {string} data.unit_code 商品单位code
	 * @param {string} data.supplier_outer_id 供应商货号
	 * @param {string} data.weight 商品重量
	 * @param {number} data.length 长
	 * @param {number} data.width 宽
	 * @param {number} data.height 高
	 * @param {number} data.volume 商品体积
	 * @param {string} data.package_point 打包积分
	 * @param {string} data.sales_point 销售积分
	 * @param {string} data.sales_price 标准售价
	 * @param {string} data.purchase_price 标准进价
	 * @param {string} data.cost_price 成本价
	 * @param {string} data.agent_price 代理售价
	 * @param {string} data.stock_status_code 库存状态code
	 * @returns {Promise<Object>} 返回创建结果
	 */
	async add(data) {
		const body = {
			...this,
			method: "gy.erp.item.add",
			code: null,
			name: null,
			item_brand_id: null,
			item_brand_code: null,
			simple_name: null,
			category_code: null,
			supplier_code: null,
			note: null,
			minusStock: null,
			item_add_attribute: 0,
			skus: null,
			pic_url: null,
			tax_code: null,
			tax_no: null,
			tax_rate: null,
			unit_code: null,
			supplier_outer_id: null,
			weight: null,
			length: null,
			width: null,
			height: null,
			volume: null,
			package_point: null,
			sales_point: null,
			sales_price: null,
			purchase_price: null,
			cost_price: null,
			agent_price: null,
			stock_status_code: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 修改商品信息
	 * @param {Object} data 商品信息
	 * @param {string} data.id 商品ID
	 * @param {string} data.code 商品代码 
	 * @param {string} data.name 商品名称
	 * @param {string} data.item_brand_id 商品品牌id
	 * @param {string} data.item_brand_code 商品品牌代码
	 * @param {string} data.simple_name 商品简称
	 * @param {string} data.category_code 商品类别code
	 * @param {string} data.supplier_code 供应商code
	 * @param {string} data.note 备注
	 * @param {boolean} data.minusStock 是否启用负库存
	 * @param {number} data.item_add_attribute 商品附加属性
	 * @param {Array} data.skus 规格信息
	 * @param {string} data.pic_url 图片url
	 * @param {string} data.tax_code 税收分类编码
	 * @param {string} data.tax_no 商品税号
	 * @param {number} data.tax_rate 商品税率
	 * @param {string} data.unit_code 商品单位code
	 * @param {string} data.supplier_outer_id 供应商货号
	 * @param {string} data.weight 商品重量
	 * @param {number} data.length 长
	 * @param {number} data.width 宽
	 * @param {number} data.height 高
	 * @param {number} data.volume 商品体积
	 * @param {string} data.package_point 打包积分
	 * @param {string} data.sales_point 销售积分
	 * @param {string} data.sales_price 标准售价
	 * @param {string} data.purchase_price 标准进价
	 * @param {string} data.cost_price 成本价
	 * @param {string} data.agent_price 代理售价
	 * @param {string} data.stock_status_code 库存状态code
	 * @returns {Promise<Object>} 返回修改结果
	 */
	async update(data) {
		const body = {
			...this,
			method: "gy.erp.item.update",
			id: null,
			code: null,
			name: null,
			item_brand_id: null,
			item_brand_code: null,
			simple_name: null,
			category_code: null,
			supplier_code: null,
			note: null,
			minusStock: null,
			item_add_attribute: 0,
			skus: null,
			pic_url: null,
			tax_code: null,
			tax_no: null,
			tax_rate: null,
			unit_code: null,
			supplier_outer_id: null,
			weight: null,
			length: null,
			width: null,
			height: null,
			volume: null,
			package_point: null,
			sales_point: null,
			sales_price: null,
			purchase_price: null,
			cost_price: null,
			agent_price: null,
			stock_status_code: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 商品停用
	 * @param {Object} data 商品信息
	 * @param {string} data.id 商品ID (商品ID与商品代码二者必选其一)
	 * @param {string} data.code 商品代码 (商品ID与商品代码二者必选其一)
	 * @param {string} data.operater 操作人
	 * @returns {Promise<Object>} 返回停用结果
	 */
	async delete(data) {
		const body = {
			...this,
			method: "gy.erp.item.delete",
			id: null,
			code: null,
			operater: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 商品规格新增
	 * @param {Object} data 规格信息
	 * @param {string} data.item_id 商品id (必填)
	 * @param {string} data.code 规格代码 (必填)
	 * @param {string} data.name 规格名称 (必填)
	 * @param {string} data.stock_status_code 库存状态code
	 * @param {string} data.weight 重量
	 * @param {string} data.sales_point 销售积分
	 * @param {string} data.package_point 打包积分
	 * @param {string} data.purchase_price 标准进价
	 * @param {string} data.sales_price 标准售价
	 * @param {string} data.agent_price 代理售价
	 * @param {string} data.cost_price 成本价
	 * @param {string} data.note 备注
	 * @returns {Promise<Object>} 返回新增结果
	 */
	async skuAdd(data) {
		const body = {
			...this,
			method: "gy.erp.item.sku.add",
			item_id: null,
			code: null,
			name: null,
			stock_status_code: null,
			weight: null,
			sales_point: null,
			package_point: null,
			purchase_price: null,
			sales_price: null,
			agent_price: null,
			cost_price: null,
			note: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 商品规格修改
	 * @param {Object} data 规格信息
	 * @param {string} data.item_id 商品id (必填)
	 * @param {string} data.id 规格id (id和code必填一项)
	 * @param {string} data.code 规格代码 (id和code必填一项)
	 * @param {string} data.name 规格名称 (必填)
	 * @param {string} data.stock_status_code 库存状态code
	 * @param {string} data.weight 重量
	 * @param {string} data.sales_point 销售积分
	 * @param {string} data.package_point 打包积分
	 * @param {string} data.purchase_price 标准进价
	 * @param {string} data.sales_price 标准售价
	 * @param {string} data.agent_price 代理售价
	 * @param {string} data.cost_price 成本价
	 * @param {string} data.note 备注
	 * @returns {Promise<Object>} 返回修改结果
	 */
	async skuUpdate(data) {
		const body = {
			...this,
			method: "gy.erp.item.sku.update",
			item_id: null,
			id: null,
			code: null,
			name: null,
			stock_status_code: null,
			weight: null,
			sales_point: null,
			package_point: null,
			purchase_price: null,
			sales_price: null,
			agent_price: null,
			cost_price: null,
			note: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 商品规格删除
	 * @param {Object} data 规格信息
	 * @param {string} data.item_id 商品id (必填)
	 * @param {string} data.id 规格id (id和code必填一项)
	 * @param {string} data.code 规格代码 (id和code必填一项)
	 * @returns {Promise<Object>} 返回删除结果
	 */
	async skuDelete(data) {
		const body = {
			...this,
			method: "gy.erp.item.sku.delete",
			item_id: null,
			id: null,
			code: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 商品图片上传
	 * @param {Object} data 图片信息
	 * @param {string} data.code 商品代码 (必填)
	 * @param {string} data.sku_code 规格代码 (可选,有规格商品不传更改商品图片,传则更改规格图片)
	 * @param {string} data.url 图片地址 (必填,仅支持jpg格式,必须是以http/https开头的网络图片)
	 * @returns {Promise<Object>} 返回上传结果
	 */
	async pictureUpload(data) {
		const body = {
			...this,
			method: "gy.erp.item.picture.upload",
			code: null,
			sku_code: null,
			url: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 商品条码查询
	 * @param {Object} data 查询条件
	 * @param {string} data.page_no 页码，默认1
	 * @param {string} data.page_size 每页条目数
	 * @param {number} data.date_type 时间类型 0:创建时间 1:修改时间 默认0
	 * @param {string} data.start_date 开始时间
	 * @param {string} data.end_date 结束时间
	 * @param {string} data.id 商品条码ID
	 * @param {string} data.barcode 商品条码
	 * @param {string} data.item_code 商品代码
	 * @param {string} data.sku_code 规格代码
	 * @param {boolean} data.is_del 条码删除状态 true:已删除 false:未删除 默认false
	 * @returns {Promise<Object>} 返回查询结果
	 */
	async barcodeSearch(data) {
		const body = {
			...this,
			method: "gy.erp.item.barcode.get",
			page_no: 1,
			page_size: 10,
			date_type: 0,
			start_date: null,
			end_date: null,
			id: null,
			barcode: null,
			item_code: null,
			sku_code: null,
			is_del: false
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 商品条码新增
	 * @param {Object} data 条码信息
	 * @param {string} data.item_code 商品代码 (必填)
	 * @param {string} data.sku_code 规格代码 (有规格商品必填)
	 * @param {string} data.barcode 商品条码 (必填)
	 * @returns {Promise<Object>} 返回创建结果
	 */
	async barcodeAdd(data) {
		const body = {
			...this,
			method: "gy.erp.item.barcode.add",
			item_code: null,
			sku_code: null,
			barcode: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}

	/**
	 * 商品单位查询
	 * @param {Object} data 查询参数
	 * @param {number} data.page_no 页码，默认为1
	 * @param {number} data.page_size 每页大小，默认为10
	 * @param {string} data.start_date 修改时间开始段，与end_date搭配使用
	 * @param {string} data.end_date 修改时间结束段，与start_date搭配使用
	 * @param {string} data.code 商品单位代码
	 * @returns {Promise<Object>} 返回查询结果
	 */
	async unitSearch(data) {
		const body = {
			...this,
			method: "gy.erp.items.unit.get",
			page_no: 1,
			page_size: 10,
			start_date: null,
			end_date: null,
			code: null
		}
		const result = await this.curl(this.setProperty(body, data))
		return result;
	}
}
module.exports = Product;
