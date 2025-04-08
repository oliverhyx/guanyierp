const Base = require("./Base")
/**
 * 会员管理
 */
class Member extends Base {
	constructor() {
		super()
	}

	/**
	 * 会员新增
	 * @param {*} data
	 * @returns
	 */
	async add(data) {
		/**
		 * 管易ERP会员新增接口
		 * method: 接口方法名
		 * code: 会员代码
		 * name: 会员名称
		 * shop_code: 所属店铺
		 * level_code: 会员级别
		 * business_man_code: 业务员
		 * sex: 性别，0:男 1:女
		 * birthday: 生日
		 * email: 邮箱
		 * qq: QQ
		 * ww: 旺旺
		 * real_name: 真实姓名
		 * id_card: 身份证号
		 * agent: 是否分销商
		 * receive_infos: 收货信息列表
		 */
		const body = {
			...this,
			method: "gy.erp.vip.add",
			code: null, // 会员代码
			name: null, // 会员名称
			shop_code: null, // 所属店铺
			level_code: null, // 会员级别
			business_man_code: null, // 业务员
			sex: null, // 性别
			birthday: null, // 生日
			email: null, // 邮箱
			qq: null, // QQ号
			ww: null, // 旺旺
			real_name: null, // 真实姓名
			id_card: null, // 身份证号
			agent: null, // 是否分销商
			receive_infos: [] // 收货信息列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
	/**
	 * 会员修改
	 * @param {*} data
	 * @returns
	 */
	async update(data) {
		/**
		 * 管易ERP会员修改接口
		 * method: 接口方法名
		 * id: 会员id，主条件
		 * code: 会员代码，当id未提供时必填
		 * shop_code: 所属店铺，当id未提供时必填
		 * new_shop_code: 新的所属店铺
		 * level_code: 会员级别
		 * business_man_code: 业务员
		 * sex: 性别，0:女 1:男
		 * birthday: 生日
		 * email: 邮箱
		 * qq: QQ
		 * ww: 旺旺
		 * real_name: 真实姓名
		 * id_card: 身份证号
		 * agent: 是否分销商
		 * receive_infos: 收货信息列表
		 */
		const body = {
			...this,
			method: "gy.erp.vip.update",
			id: null, // 会员id
			code: null, // 会员代码
			shop_code: null, // 所属店铺
			new_shop_code: null, // 新的所属店铺
			level_code: null, // 会员级别
			business_man_code: null, // 业务员
			sex: null, // 性别
			birthday: null, // 生日
			email: null, // 邮箱
			qq: null, // QQ号
			ww: null, // 旺旺
			real_name: null, // 真实姓名
			id_card: null, // 身份证号
			agent: null, // 是否分销商
			receive_infos: [] // 收货信息列表
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}

	/**
	 * 会员查询
	 * @param {*} data
	 * @returns
	 */
	async search(data) {
		/**
		 * 管易ERP会员查询接口
		 * method: 接口方法名
		 * page_no: 页码，默认为1
		 * page_size: 每页大小，默认为10
		 * start_created: 创建时间开始段
		 * end_created: 创建时间结束段
		 * source: 会员来源
		 * level_code: 会员级别代码
		 * shop_code: 店铺代码
		 * code: 代码
		 * name: 名称
		 * mobile: 手机
		 */
		const body = {
			...this,
			method: "gy.erp.vip.get",
			page_no: 1, // 页码，默认为1
			page_size: 10, // 每页大小，默认为10
			start_created: null, // 创建时间开始段
			end_created: null, // 创建时间结束段
			source: null, // 会员来源
			level_code: null, // 会员级别代码
			shop_code: null, // 店铺代码
			code: null, // 代码
			name: null, // 名称
			mobile: null // 手机
		}
		const result = await this.curl(this.setProperty(body, data))
		return result
	}
}
module.exports = Member
