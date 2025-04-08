# @neuit/guanyierp

    用于管理管易 ERP 系统的 Node.js 接口库

## 目录

- [安装](#安装)
- [配置](#配置)
  - [通过配置文件](#1-通过配置文件)
  - [直接传参使用](#2-直接传参使用)
- [使用示例](#使用示例)
- [SDK 文档](#sdk-文档)
  - [Member 类](#member-类)
    - [add(data) - 会员新增](#adddata---会员新增)
    - [update(data) - 会员修改](#updatedata---会员修改)
    - [search(data) - 会员查询](#searchdata---会员查询)
  - [Finance 类](#finance-类)
    - [customerpaymentSearch(data) - 销货收款单查询](#customerpaymentSearchdata---销货收款单查询)
    - [itemstockcrmSearch(data) - 进销存数据查询](#itemstockcrmSearchdata---进销存数据查询)
    - [supplierbillSearch(data) - 供应商流水账查询](#supplierbillSearchdata---供应商流水账查询)
    - [accountOrderSearch(data) - 平台账务流水账查询](#accountOrderSearchdata---平台账务流水账查询)
    - [purchasePrepaySearch(data) - 采购预付款单查询](#purchasePrepaySearchdata---采购预付款单查询)
    - [purchasePaymentSearch(data) - 采购应收应付单查询](#purchasePaymentSearchdata---采购应收应付单查询)
    - [platformSubjectSearch(data) - 平台费用科目查询](#platformSubjectSearchdata---平台费用科目查询)
    - [vipAdd(data) - 系统费用科目新增](#vipAdddata---系统费用科目新增)
    - [syssubjectSearch(data) - 系统费用科目查询](#syssubjectSearchdata---系统费用科目查询)
  - [Product 类](#product-类)
    - [search(data) - 商品查询](#searchdata---商品查询)
    - [add(data) - 商品新增](#adddata---商品新增)
    - [update(data) - 商品修改](#updatedata---商品修改)
    - [delete(data) - 商品停用](#deletedata---商品停用)
    - [skuAdd(data) - 商品规格新增](#skuAdddata---商品规格新增)
    - [skuUpdate(data) - 商品规格修改](#skuUpdatedata---商品规格修改)
    - [skuDelete(data) - 商品规格删除](#skuDeletedata---商品规格删除)
    - [pictureUpload(data) - 商品图片上传](#pictureUploaddata---商品图片上传)
    - [barcodeSearch(data) - 商品条码查询](#barcodeSearchdata---商品条码查询)
    - [barcodeAdd(data) - 商品条码新增](#barcodeAdddata---商品条码新增)
    - [unitSearch(data) - 商品单位查询](#unitSearchdata---商品单位查询)
  - [Purchase 类](#purchase-类)
    - [search(data) - 采购订单查询](#searchdata---采购订单查询)
    - [add(data) - 采购订单新增](#adddata---采购订单新增)
    - [approve(data) - 采购订单审核](#approvedata---采购订单审核)
    - [arriveAdd(data) - 采购入库单新增并审核](#arriveAdddata---采购入库单新增并审核)
    - [arriveNewAdd(data) - 采购入库单新增](#arriveNewAdddata---采购入库单新增)
    - [arriveApprove(data) - 采购入库单审核](#arriveApprovedata---采购入库单审核)
    - [arriveSearch(data) - 采购入库单查询](#arriveSearchdata---采购入库单查询)
    - [returnAdd(data) - 采购退货单新增](#returnAdddata---采购退货单新增)
    - [returnOut(data) - 采购退货单出库](#returnOutdata---采购退货单出库)
    - [returnSearch(data) - 采购退货单查询](#returnSearchdata---采购退货单查询)
  - [Shop 类](#shop-类)
    - [search(data) - 店铺查询](#searchdata---店铺查询)
    - [warehouseSearch(data) - 仓库查询](#warehousesearchdata---仓库查询)
    - [warehouseAdd(data) - 仓库新增](#warehouseadddata---仓库新增)
    - [breandAdd(data) - 商品品牌新增](#breandadddata---商品品牌新增)
    - [brandUpdate(data) - 商品品牌修改](#brandupdatedata---商品品牌修改)
    - [supplierSearch(data) - 供应商查询](#suppliersearchdata---供应商查询)
    - [accountSearch(data) - 收付款账户查询](#accountsearchdata---收付款账户查询)
  - [Stock 类](#stock-类)
    - [search(data) - 库存查询](#searchdata---库存查询)
    - [otherInAdd(data) - 其他入库单新增](#otherInAdddata---其他入库单新增)
    - [otherOutAdd(data) - 其他出库单新增](#otherOutAdddata---其他出库单新增)
    - [transferAdd(data) - 库存调拨单新增](#transferAdddata---库存调拨单新增)
    - [transferSearch(data) - 库存调拨单查询](#transferSearchdata---库存调拨单查询)
    - [transferOut(data) - 调拨单出库](#transferOutdata---调拨单出库)
    - [transferIn(data) - 调拨单入库](#transferIndata---调拨单入库)
    - [adjustAdd(data) - 库存调整单新增](#adjustAdddata---库存调整单新增)
    - [adjustSearch(data) - 库存调整单查询](#adjustSearchdata---库存调整单查询)
    - [adjustDetailSearch(data) - 库存调整单明细查询](#adjustDetailSearchdata---库存调整单明细查询)
    - [countAdd(data) - 库存盘点单新增](#countAdddata---库存盘点单新增)
    - [countSearch(data) - 库存盘点单查询](#countSearchdata---库存盘点单查询)
    - [countBreakevenSearch(data) - 盘点单盈亏明细查询](#countBreakevenSearchdata---盘点单盈亏明细查询)
    - [uniquecodeAdd(data) - 唯一码商品对照数据新增](#uniquecodeAdddata---唯一码商品对照数据新增)
    - [itemLocationSearch(data) - 商品库位关系查询](#itemLocationSearchdata---商品库位关系查询)
    - [itemLocationAdd(data) - 商品库位关系创建](#itemLocationAdddata---商品库位关系创建)
    - [itemLocationDelete(data) - 商品库位关系删除](#itemLocationDeletedata---商品库位关系删除)
    - [defaultItemLocationSet(data) - 默认库位关系设置](#defaultItemLocationSetdata---默认库位关系设置)
  - [Trade 类](#trade-类)
    - [add(data) - 订单新增](#adddata---订单新增)
    - [memoUpdate(data) - 订单二次备注修改](#memoupdatedata---订单二次备注修改)
    - [refundUpdate(data) - 订单退款状态修改](#refundupdatedata---订单退款状态修改)
    - [tagUpdate(data) - 订单标记修改](#tagupdatedata---订单标记修改)
    - [search(data) - 订单查询](#searchdata---订单查询)
    - [historySearch(data) - 订单历史查询](#historysearchdata---订单历史查询)
    - [deliverySearch(data) - 发货单查询](#deliverysearchdata---发货单查询)
    - [deliveryHistorySearch(data) - 发货单历史查询](#deliveryhistorysearchdata---发货单历史查询)
    - [syncstatusUpdate(data) - 订单同步状态修改](#syncstatusupdatedata---订单同步状态修改)
    - [deliveryCancel(data) - 发货单取消](#deliverycanceldata---发货单取消)
    - [deliveryUpdate(data) - 发货单修改](#deliveryupdatedata---发货单修改)
    - [returnAdd(data) - 退货单新增](#returnadddata---退货单新增)
    - [returnApprove(data) - 退货单审核](#returnapprovedata---退货单审核)
    - [returnSearch(data) - 退货单查询](#returnsearchdata---退货单查询)
    - [refundSearch(data) - 退款单查询](#refundsearchdata---退款单查询)
    - [refundAdd(data) - 退款单新增](#refundadddata---退款单新增)
    - [paymentSearch(data) - 支付方式查询](#paymentsearchdata---支付方式查询)
    - [areaSearch(data) - 区域查询](#areasearchdata---区域查询)
    - [accountSearch(data) - 账单查询](#accountsearchdata---账单查询)
- [许可证](#许可证)

## 安装

```bash
npm install @neuit/guanyierp
```

## 配置

该库支持多种方式配置：

### 1. 通过配置文件

在项目根目录创建 `.neuit.config.json` 文件：

```json
{
  "guanyi_appkey": "YOUR_APPKEY",
  "guanyi_sessionkey": "YOUR_SESSIONKEY",
  "guanyi_appsecret": "YOUR_APPSECRET",
  "guanyi_baseUrl": "YOUR_BASEURL"
}
```

### 2. 直接传参使用

```javascript
const { setConfig } = require("@neuit/guanyierp");

const testConfig = {
  guanyi_appkey: "TEST_APPKEY",
  guanyi_sessionkey: "TEST_SESSIONKEY",
  guanyi_appsecret: "TEST_APPSECRET",
  guanyi_baseUrl: "http://test.api.guanyierp.com/rest/erp_open",
};

setConfig(testConfig);
```

## 使用示例

```javascript
const { Shop } = require("@neuit/guanyierp");

const shop = new Shop();
const res = await shop.search({});
console.log(res);
```

## SDK 文档

### Member 类

#### add(data) - 会员新增

调用管易 ERP 会员新增接口 `gy.erp.vip.add`，创建新会员。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 会员代码 | 是 | null |
| name | string | 会员名称 | 是 | null |
| shop_code | string | 所属店铺 | 是 | null |
| level_code | string | 会员级别 | 否 | null |
| business_man_code | string | 业务员 | 否 | null |
| sex | int | 性别，0:男 1:女 | 否 | null |
| birthday | string | 生日 | 否 | null |
| email | string | 邮箱 | 否 | null |
| qq | string | QQ | 否 | null |
| ww | string | 旺旺 | 否 | null |
| real_name | string | 真实姓名 | 否 | null |
| id_card | string | 身份证号 | 否 | null |
| agent | boolean | 是否分销商 | 否 | null |
| receive_infos | array | 收货信息列表 | 否 | [] |

#### update(data) - 会员修改

调用管易 ERP 会员修改接口 `gy.erp.vip.update`，修改会员信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| id | int | 会员ID | 否* | null |
| code | string | 会员代码 | 否* | null |
| shop_code | string | 所属店铺 | 否* | null |
| new_shop_code | string | 新的所属店铺 | 否 | null |
| level_code | string | 会员级别 | 否 | null |
| business_man_code | string | 业务员 | 否 | null |
| sex | int | 性别，0:女 1:男 | 否 | null |
| birthday | string | 生日 | 否 | null |
| email | string | 邮箱 | 否 | null |
| qq | string | QQ | 否 | null |
| ww | string | 旺旺 | 否 | null |
| real_name | string | 真实姓名 | 否 | null |
| id_card | string | 身份证号 | 否 | null |
| agent | boolean | 是否分销商 | 否 | null |
| receive_infos | array | 收货信息列表 | 否 | [] |

\* id 是主条件；当 id 未提供时，code 和 shop_code 必填

#### search(data) - 会员查询

调用管易 ERP 会员查询接口 `gy.erp.vip.get`，获取会员列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_created | datetime | 创建时间开始段 | 否 | null |
| end_created | datetime | 创建时间结束段 | 否 | null |
| source | string | 会员来源 | 否 | null |
| level_code | string | 会员级别代码 | 否 | null |
| shop_code | string | 店铺代码 | 否 | null |
| code | string | 代码 | 否 | null |
| name | string | 名称 | 否 | null |
| mobile | string | 手机 | 否 | null |

### Finance 类

#### customerpaymentSearch(data) - 销货收款单查询

调用管易 ERP 销货收款单查询接口 `gy.erp.customerpayment.get`，获取销货收款单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| approve_status | int | 审核状态，0:未审核，1:已审核 | 否 | null |
| code | string | 单据编号 | 否 | null |

#### itemstockcrmSearch(data) - 进销存数据查询

调用管易 ERP 进销存数据查询接口 `gy.erp.report.itemstockcrm.get`，获取进销存数据列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 开始日期 | 是 | null |
| end_date | datetime | 结束日期 | 是 | null |
| warehourse_code | string | 仓库代码 | 否 | null |
| item_code | string | 商品代码 | 否 | null |
| sku_code | string | 规格代码，必须与item_code搭配使用 | 否 | null |

#### supplierbillSearch(data) - 供应商流水账查询

调用管易 ERP 供应商流水账查询接口 `gy.erp.stock.supplierbill.get`，获取供应商流水账列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 记账时间开始段 | 否 | null |
| end_date | datetime | 记账时间结束段 | 否 | null |
| supplier_code | string | 供应商代码 | 否 | null |

#### accountOrderSearch(data) - 平台账务流水账查询

调用管易 ERP 平台账务流水账查询接口 `gy.erp.alipay.account.order.get`，获取平台账务流水账列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| approve_status | int | 审核状态，0:未审核，1:已审核 | 否 | null |
| finance_code | string | 账务编号 | 否 | null |

#### purchasePrepaySearch(data) - 采购预付款单查询

调用管易 ERP 采购预付款单查询接口 `gy.erp.purchase.prepay.get`，获取采购预付款单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| approve | int | 审核状态，0:未审核，1:已审核 | 否 | null |
| code | string | 单据编号 | 否 | null |

#### purchasePaymentSearch(data) - 采购应收应付单查询

调用管易 ERP 采购应收应付单查询接口 `gy.erp.purchase.payment.get`，获取采购应收应付单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| approve | int | 审核状态，0:未审核，1:已审核 | 否 | null |
| code | string | 单据编号 | 否 | null |

#### platformSubjectSearch(data) - 平台费用科目查询

调用管易 ERP 平台费用科目查询接口 `gy.erp.tenant.platform.subject.get`，获取平台费用科目列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| id | int | 平台科目ID | 否 | null |

#### vipAdd(data) - 系统费用科目新增

调用管易 ERP 系统费用科目新增接口 `gy.erp.vip.add`，创建新系统费用科目。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 费用科目代码 | 是 | null |
| name | string | 费用科目名称 | 是 | null |

#### syssubjectSearch(data) - 系统费用科目查询

调用管易 ERP 系统费用科目查询接口，获取系统费用科目列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| subject_id | int | 系统费用科目ID | 否 | null |

### Product 类

#### search(data) - 商品查询

调用管易 ERP 商品查询接口 `gy.erp.items.get`，获取商品列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| code | string | 商品代码 | 否 | null |

#### add(data) - 商品新增

调用管易 ERP 商品新增接口 `gy.erp.item.add`，创建新商品。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 商品代码 | 是 | null |
| name | string | 商品名称 | 否 | null |
| item_brand_id | string | 商品品牌id | 否 | null |
| item_brand_code | string | 商品品牌代码 | 否 | null |
| simple_name | string | 商品简称 | 否 | null |
| category_code | string | 商品类别code | 否 | null |
| supplier_code | string | 供应商code | 否 | null |
| note | string | 备注 | 否 | null |
| minusStock | boolean | 是否启用负库存 | 否 | null |
| item_add_attribute | int | 商品附加属性 | 否 | 0 |
| skus | array | 规格信息 | 否 | null |
| pic_url | string | 图片url | 否 | null |
| tax_code | string | 税收分类编码 | 否 | null |
| tax_no | string | 商品税号 | 否 | null |
| tax_rate | number | 商品税率 | 否 | null |
| unit_code | string | 商品单位code | 否 | null |
| supplier_outer_id | string | 供应商货号 | 否 | null |
| weight | string | 商品重量 | 否 | null |
| length | number | 长 | 否 | null |
| width | number | 宽 | 否 | null |
| height | number | 高 | 否 | null |
| volume | number | 商品体积 | 否 | null |
| package_point | string | 打包积分 | 否 | null |
| sales_point | string | 销售积分 | 否 | null |
| sales_price | string | 标准售价 | 否 | null |
| purchase_price | string | 标准进价 | 否 | null |
| cost_price | string | 成本价 | 否 | null |
| agent_price | string | 代理售价 | 否 | null |
| stock_status_code | string | 库存状态code | 否 | null |

#### update(data) - 商品修改

调用管易 ERP 商品修改接口 `gy.erp.item.update`，修改商品信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| id | string | 商品ID | 否* | null |
| code | string | 商品代码 | 否* | null |
| name | string | 商品名称 | 否 | null |
| item_brand_id | string | 商品品牌id | 否 | null |
| item_brand_code | string | 商品品牌代码 | 否 | null |
| simple_name | string | 商品简称 | 否 | null |
| category_code | string | 商品类别code | 否 | null |
| supplier_code | string | 供应商code | 否 | null |
| note | string | 备注 | 否 | null |
| minusStock | boolean | 是否启用负库存 | 否 | null |
| item_add_attribute | int | 商品附加属性 | 否 | 0 |
| skus | array | 规格信息 | 否 | null |
| pic_url | string | 图片url | 否 | null |
| tax_code | string | 税收分类编码 | 否 | null |
| tax_no | string | 商品税号 | 否 | null |
| tax_rate | number | 商品税率 | 否 | null |
| unit_code | string | 商品单位code | 否 | null |
| supplier_outer_id | string | 供应商货号 | 否 | null |
| weight | string | 商品重量 | 否 | null |
| length | number | 长 | 否 | null |
| width | number | 宽 | 否 | null |
| height | number | 高 | 否 | null |
| volume | number | 商品体积 | 否 | null |
| package_point | string | 打包积分 | 否 | null |
| sales_point | string | 销售积分 | 否 | null |
| sales_price | string | 标准售价 | 否 | null |
| purchase_price | string | 标准进价 | 否 | null |
| cost_price | string | 成本价 | 否 | null |
| agent_price | string | 代理售价 | 否 | null |
| stock_status_code | string | 库存状态code | 否 | null |

\* id与code必须至少提供一个

#### delete(data) - 商品停用

调用管易 ERP 商品停用接口 `gy.erp.item.delete`，停用商品。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| id | string | 商品ID | 否* | null |
| code | string | 商品代码 | 否* | null |
| operater | string | 操作人 | 否 | null |

\* id与code必须至少提供一个

#### skuAdd(data) - 商品规格新增

调用管易 ERP 商品规格新增接口 `gy.erp.item.sku.add`，创建新商品规格。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| item_id | string | 商品id | 是 | null |
| code | string | 规格代码 | 是 | null |
| name | string | 规格名称 | 是 | null |
| stock_status_code | string | 库存状态code | 否 | null |
| weight | string | 重量 | 否 | null |
| sales_point | string | 销售积分 | 否 | null |
| package_point | string | 打包积分 | 否 | null |
| purchase_price | string | 标准进价 | 否 | null |
| sales_price | string | 标准售价 | 否 | null |
| agent_price | string | 代理售价 | 否 | null |
| cost_price | string | 成本价 | 否 | null |
| note | string | 备注 | 否 | null |

#### skuUpdate(data) - 商品规格修改

调用管易 ERP 商品规格修改接口 `gy.erp.item.sku.update`，修改商品规格信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| item_id | string | 商品id | 是 | null |
| id | string | 规格id | 否* | null |
| code | string | 规格代码 | 否* | null |
| name | string | 规格名称 | 是 | null |
| stock_status_code | string | 库存状态code | 否 | null |
| weight | string | 重量 | 否 | null |
| sales_point | string | 销售积分 | 否 | null |
| package_point | string | 打包积分 | 否 | null |
| purchase_price | string | 标准进价 | 否 | null |
| sales_price | string | 标准售价 | 否 | null |
| agent_price | string | 代理售价 | 否 | null |
| cost_price | string | 成本价 | 否 | null |
| note | string | 备注 | 否 | null |

\* id与code必须至少提供一个

#### skuDelete(data) - 商品规格删除

调用管易 ERP 商品规格删除接口 `gy.erp.item.sku.delete`，删除商品规格。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| item_id | string | 商品id | 是 | null |
| id | string | 规格id | 否* | null |
| code | string | 规格代码 | 否* | null |
| operater | string | 操作人 | 否 | null |

\* id与code必须至少提供一个

#### pictureUpload(data) - 商品图片上传

调用管易 ERP 商品图片上传接口 `gy.erp.item.picture.upload`，上传商品图片。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| item_id | string | 商品id | 是 | null |
| file_content | string | 图片base64编码内容 | 是 | null |
| file_name | string | 图片文件名 | 否 | null |

#### barcodeSearch(data) - 商品条码查询

调用管易 ERP 商品条码查询接口 `gy.erp.item.barcode.get`，获取商品条码列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| item_id | string | 商品id | 否 | null |
| item_code | string | 商品代码 | 否 | null |

#### barcodeAdd(data) - 商品条码新增

调用管易 ERP 商品条码新增接口 `gy.erp.item.barcode.add`，创建新商品条码。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| item_id | string | 商品id | 是 | null |
| sku_id | string | 规格id | 否 | null |
| barcode | string | 条码 | 是 | null |

#### unitSearch(data) - 商品单位查询

调用管易 ERP 商品单位查询接口 `gy.erp.item.unit.get`，获取商品单位列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| code | string | 单位代码 | 否 | null |

### Purchase 类

#### search(data) - 采购订单查询

调用管易 ERP 采购订单查询接口 `gy.erp.purchase.get`，获取采购订单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_create_date | datetime | 创建时间开始段 | 否 | null |
| end_create_date | datetime | 创建时间结束段 | 否 | null |
| start_approve_date | datetime | 审核时间开始段 | 否 | null |
| end_approve_date | datetime | 审核时间结束段 | 否 | null |
| warehouse_code | string | 仓库代码 | 否 | null |
| supplier_code | string | 供应商代码 | 否 | null |
| code | string | 采购订单编号 | 否 | null |
| status | int | 订单状态，0:未审核，1:已审核生成 | 否 | null |

#### add(data) - 采购订单新增

调用管易 ERP 采购订单新增接口 `gy.erp.purchase.add`，创建新采购订单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| warehouse_code | string | 仓库代码 | 是 | null |
| supplier_code | string | 供应商代码 | 是 | null |
| order_type | string | 单据类型代码 | 否 | null |
| plan_date | datetime | 预计到货时间 | 否 | null |
| note | string | 备注 | 否 | null |
| detail_list | array | 采购明细列表 | 是 | [] |

#### approve(data) - 采购订单审核

调用管易 ERP 采购订单审核接口 `gy.erp.purchase.approve`，审核采购订单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 单据编号 | 是 | null |

#### arriveAdd(data) - 采购入库单新增并审核

调用管易 ERP 采购入库单新增并审核接口 `gy.erp.purchase.arrive.add`，创建并审核采购入库单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| purchase_code | string | 采购订单号 | 否 | null |
| warehouse_code | string | 仓库代码 | 是 | null |
| supplier_code | string | 供应商代码 | 是 | null |
| order_type | string | 单据类型代码 | 否 | null |
| wms_bizcode | string | 外部系统单据号 | 否 | null |
| ex_cost | decimal | 其他费用 | 否 | null |
| note | string | 备注 | 否 | null |
| operator | string | 操作人 | 否 | null |
| detail_list | array | 商品列表 | 是 | [] |

#### arriveNewAdd(data) - 采购入库单新增

调用管易 ERP 采购入库单新增接口 `gy.erp.new.purchase.arrive.add`，创建采购入库单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| purchase_code | string | 采购订单号 | 否 | null |
| warehouse_code | string | 仓库代码 | 是 | null |
| supplier_code | string | 供应商代码 | 是 | null |
| order_type | string | 单据类型代码 | 否 | null |
| wms_bizcode | string | 外部系统单号 | 否 | null |
| ex_cost | decimal | 其他费用 | 否 | null |
| note | string | 备注 | 否 | null |
| detail_list | array | 商品列表 | 是 | [] |

#### arriveApprove(data) - 采购入库单审核

调用管易 ERP 采购入库单审核接口 `gy.erp.new.purchase.arrive.approve`，审核采购入库单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 采购入库单号 | 是 | null |

#### arriveSearch(data) - 采购入库单查询

调用管易 ERP 采购入库单查询接口 `gy.erp.purchase.arrive.get`，获取采购入库单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_create | datetime | 创建时间开始段 | 否 | null |
| end_create | datetime | 创建时间结束段 | 否 | null |
| start_approve | datetime | 审核时间开始段 | 否 | null |
| end_approve | datetime | 审核时间结束段 | 否 | null |
| warehouse_code | string | 仓库代码 | 否 | null |
| supplier_code | string | 供应商代码 | 否 | null |
| code | string | 单据编号 | 否 | null |
| status | int | 审核状态，0:未审核，1:已审核 | 否 | null |
| start_modify | datetime | 修改时间开始段 | 否 | null |
| end_modify | datetime | 修改时间结束段 | 否 | null |
| has_cancel_data | boolean | 是否返回已作废的入库单数据 | 否 | false |
| has_account | int | 记账状态，0:未记账，1:已记账，-1:记录失败 | 否 | null |

#### returnAdd(data) - 采购退货单新增

调用管易 ERP 采购退货单新增接口 `gy.erp.purchase.return.add`，创建采购退货单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| warehouse_code | string | 仓库代码 | 是 | null |
| supplier_code | string | 供应商代码 | 是 | null |
| type_code | string | 单据类型代码 | 否 | null |
| ex_cost | decimal | 其他费用 | 否 | null |
| note | string | 备注 | 否 | null |
| detail_list | array | 商品列表 | 是 | [] |

#### returnOut(data) - 采购退货单出库

调用管易 ERP 采购退货单出库接口 `gy.erp.purchase.return.out`，处理采购退货单出库。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 采购退货单号 | 是 | null |
| details | array | 出库商品明细 | 否 | null |

#### returnSearch(data) - 采购退货单查询

调用管易 ERP 采购退货单查询接口 `gy.erp.purchase.return.get`，获取采购退货单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 记录时间开始段 | 否 | null |
| end_date | datetime | 记录时间结束段 | 否 | null |
| warehouse_code | string | 仓库代码 | 否 | null |
| supplier_code | string | 供应商代码 | 否 | null |
| code | string | 单据编号 | 否 | null |
| status | int | 出库状态，0:未出库，1:已出库 | 否 | null |

### Shop 类

#### search(data) - 店铺查询

调用管易 ERP 店铺查询接口 `gy.erp.shop.get`，获取店铺列表信息。

**参数：**

| 参数名            | 类型     | 描述           | 必填 | 默认值 |
| ----------------- | -------- | -------------- | ---- | ------ |
| page_no           | int      | 页码           | 否   | 1      |
| page_size         | int      | 每页大小       | 否   | 10     |
| modify_start_date | datetime | 修改时间开始段 | 否   | null   |
| modify_end_date   | datetime | 修改时间结束段 | 否   | null   |
| code              | string   | 店铺代码       | 否   | null   |

#### warehouseSearch(data) - 仓库查询

调用管易 ERP 仓库查询接口 `gy.erp.warehouse.get`，获取仓库列表信息。

**参数：**

| 参数名        | 类型     | 描述                         | 必填 | 默认值 |
| ------------- | -------- | ---------------------------- | ---- | ------ |
| page_no       | int      | 页码                         | 否   | 1      |
| page_size     | int      | 每页大小                     | 否   | 10     |
| start_date    | datetime | 开始时间                     | 否   | null   |
| end_date      | datetime | 结束时间                     | 否   | null   |
| date_type     | int      | 时间类型                     | 否   | 1      |
| has_del_data  | boolean  | 是否附带返回已删除的仓库数据 | 否   | false  |
| code          | string   | 仓库代码                     | 否   | null   |

#### warehouseAdd(data) - 仓库新增

调用管易 ERP 仓库新增接口 `gy.erp.warehouse.add`，创建新仓库。

**参数：**

| 参数名          | 类型   | 描述     | 必填 | 默认值 |
| --------------- | ------ | -------- | ---- | ------ |
| warehouse_code  | string | 仓库代码 | 是   | null   |
| warehouse_name  | string | 仓库名称 | 是   | null   |
| contact_name    | string | 联系人   | 否   | null   |
| contact_phone   | string | 联系电话 | 否   | null   |
| contact_mobile  | string | 联系手机 | 否   | null   |
| province        | string | 省信息   | 是   | null   |
| city            | string | 市信息   | 否   | null   |
| district        | string | 区信息   | 否   | null   |
| address         | string | 详细地址 | 否   | null   |
| note            | string | 备注     | 否   | null   |

#### breandAdd(data) - 商品品牌新增

调用管易 ERP 商品品牌新增接口 `gy.erp.item.brand.add`，创建新商品品牌。

**参数：**

| 参数名 | 类型   | 描述         | 必填 | 默认值 |
| ------ | ------ | ------------ | ---- | ------ |
| code   | string | 商品品牌代码 | 是   | null   |
| name   | string | 商品品牌名称 | 是   | null   |
| note   | string | 备注         | 否   | null   |

#### brandUpdate(data) - 商品品牌修改

调用管易 ERP 商品品牌修改接口 `gy.erp.item.brand.update`，修改商品品牌信息。

**参数：**

| 参数名 | 类型   | 描述         | 必填 | 默认值 |
| ------ | ------ | ------------ | ---- | ------ |
| id     | int    | 商品品牌ID   | 是   | null   |
| code   | string | 商品品牌代码 | 否   | null   |
| name   | string | 商品品牌名称 | 否   | null   |
| note   | string | 备注         | 否   | null   |

#### supplierSearch(data) - 供应商查询

调用管易 ERP 供应商查询接口 `gy.erp.supplier.get`，获取供应商列表信息。

**参数：**

| 参数名     | 类型     | 描述         | 必填 | 默认值 |
| ---------- | -------- | ------------ | ---- | ------ |
| page_no    | int      | 页码         | 否   | 1      |
| page_size  | int      | 每页大小     | 否   | 10     |
| start_date | datetime | 修改时间开始段 | 否   | null   |
| end_date   | datetime | 修改时间结束段 | 否   | null   |
| code       | string   | 供应商代码   | 否   | null   |

#### accountSearch(data) - 收付款账户查询

调用管易 ERP 收付款账户查询接口 `gy.erp.account.info.get`，获取收付款账户列表信息。

**参数：**

| 参数名     | 类型     | 描述         | 必填 | 默认值 |
| ---------- | -------- | ------------ | ---- | ------ |
| page_no    | int      | 页码         | 否   | 1      |
| page_size  | int      | 每页大小     | 否   | 10     |
| start_date | datetime | 修改时间开始段 | 否   | null   |
| end_date   | datetime | 修改时间结束段 | 否   | null   |
| code       | string   | 账户代码     | 否   | null   |

### Stock 类

#### search(data) - 库存查询

调用管易 ERP 新库存查询接口 `gy.erp.new.stock.get`，获取库存列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| barcode | string | 商品条码 | 否 | null |
| warehouse_code | string | 仓库代码 | 否 | null |
| cancel | int | 是否返回停用的库存记录 | 否 | 1 |
| item_code | string | 商品代码 | 否 | null |
| item_sku_code | string | 规格代码 | 否 | null |

#### otherInAdd(data) - 其他入库单新增

调用管易 ERP 其他入库单新增接口 `gy.erp.stock.other.in.add`，创建其他入库单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| warehouse_code | string | 仓库代码 | 是 | null |
| type | string | 入库类型代码 | 是 | null |
| note | string | 备注 | 否 | null |
| details | array | 入库明细列表 | 是 | [] |
| wms_bizcode | string | 第三方系统单号 | 否 | null |

#### otherOutAdd(data) - 其他出库单新增

调用管易 ERP 其他出库单新增接口 `gy.erp.stock.other.out.add`，创建其他出库单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| warehouse_code | string | 仓库代码 | 是 | null |
| type | string | 出库类型代码 | 是 | null |
| note | string | 备注 | 否 | null |
| details | array | 出库明细列表 | 是 | [] |
| wms_bizcode | string | 第三方系统单号 | 否 | null |

#### transferAdd(data) - 库存调拨单新增

调用管易 ERP 库存调拨单新增接口 `gy.erp.stock.transfer.add`，创建库存调拨单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| warehouse_out_code | string | 调出仓库代码 | 是 | null |
| warehouse_in_code | string | 调入仓库代码 | 是 | null |
| order_type | string | 单据类型代码 | 否 | null |
| note | string | 备注 | 否 | null |
| operator | string | 操作人 | 否 | null |
| detailList | array | 商品列表 | 是 | [] |

#### transferSearch(data) - 库存调拨单查询

调用管易 ERP 库存调拨单查询接口 `gy.erp.stock.transfer.get`，获取库存调拨单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 修改时间开始段 | 否 | null |
| end_date | datetime | 修改时间结束段 | 否 | null |
| start_create | datetime | 创建时间开始段 | 否 | null |
| end_create | datetime | 创建时间结束段 | 否 | null |
| start_operation | datetime | 入库时间开始段 | 否 | null |
| end_operation | datetime | 入库时间结束段 | 否 | null |
| warehouse_out | string | 移出仓库 | 否 | null |
| warehouse_in | string | 移入仓库 | 否 | null |
| code | string | 单据编号 | 否 | null |
| status_in | int | 入库状态，0:未入库，1:已入库 | 否 | null |
| status_out | int | 出库状态，0:未出库，1:已出库 | 否 | null |

#### transferOut(data) - 调拨单出库

调用管易 ERP 调拨单出库接口 `gy.erp.stock.transfer.out`，处理调拨单出库。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 调拨单据号 | 是 | null |
| details | array | 出库明细 | 否 | [] |

#### transferIn(data) - 调拨单入库

调用管易 ERP 调拨单入库接口 `gy.erp.stock.transfer.in`，处理调拨单入库。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 调拨单据号 | 是 | null |
| details | array | 入库明细 | 否 | [] |

#### adjustAdd(data) - 库存调整单新增

调用管易 ERP 库存调整单新增接口 `gy.erp.stock.adjust.add`，创建库存调整单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| warehouse_code | string | 仓库代码 | 是 | null |
| order_type | string | 单据类型代码 | 否 | null |
| sourceOrderCode | string | 来源单据号 | 否 | null |
| note | string | 备注 | 否 | null |
| operator | string | 操作人 | 否 | null |
| detail_list | array | 商品列表 | 是 | [] |

#### adjustSearch(data) - 库存调整单查询

调用管易 ERP 库存调整单查询接口 `gy.erp.stock.adjust.get`，获取库存调整单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 开始时间 | 否 | null |
| end_date | datetime | 结束时间 | 否 | null |
| warehouse_code | string | 仓库代码 | 否 | null |
| code | string | 单据编号 | 否 | null |
| product_code | string | 商品编号 | 否 | null |

#### adjustDetailSearch(data) - 库存调整单明细查询

调用管易 ERP 库存调整单明细查询接口 `gy.erp.stock.adjust.detail.get`，获取库存调整单明细信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 库存调整单编号 | 是 | null |

#### countAdd(data) - 库存盘点单新增

调用管易 ERP 库存盘点单新增接口 `gy.erp.stock.count.add`，创建库存盘点单。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| warehouse_code | string | 仓库代码 | 是 | null |
| name | string | 盘点名称 | 是 | null |
| note | string | 备注 | 否 | null |
| details | array | 盘点明细列表 | 是 | [] |

#### countSearch(data) - 库存盘点单查询

调用管易 ERP 库存盘点单查询接口 `gy.erp.stock.count.get`，获取库存盘点单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 开始时间 | 否 | null |
| end_date | datetime | 结束时间 | 否 | null |
| warehouse_code | string | 仓库代码 | 否 | null |
| code | string | 盘点单编号 | 否 | null |

#### countBreakevenSearch(data) - 盘点单盈亏明细查询

调用管易 ERP 盘点单盈亏明细查询接口 `gy.erp.stock.count.breakeven.get`，获取盘点单盈亏明细信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 盘点单编号 | 是 | null |

#### uniquecodeAdd(data) - 唯一码商品对照数据新增

调用管易 ERP 唯一码商品对照数据新增接口 `gy.erp.stock.uniquecode.add`，创建唯一码商品对照数据。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| unique_code | string | 唯一码 | 是 | null |
| warehouse_code | string | 仓库代码 | 是 | null |
| item_id | string | 商品ID | 是 | null |
| sku_id | string | 规格ID | 是 | null |
| batch_no | string | 批次 | 否 | null |
| source_code | string | 来源单据号 | 否 | null |
| note | string | 备注 | 否 | null |

#### itemLocationSearch(data) - 商品库位关系查询

调用管易 ERP 商品库位关系查询接口 `gy.erp.item.location.get`，获取商品库位关系列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 创建时间开始段 | 否 | null |
| end_date | datetime | 创建时间结束段 | 否 | null |
| warehouse_code | string | 仓库代码 | 否 | null |
| location_code | string | 库位代码 | 否 | null |
| is_default | int | 是否默认 | 否 | null |
| item_code | string | 商品代码 | 否 | null |
| sku_code | string | 规格代码 | 否 | null |

#### itemLocationAdd(data) - 商品库位关系创建

调用管易 ERP 商品库位关系创建接口 `gy.erp.item.location.add`，创建商品库位关系。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| warehouse_code | string | 仓库代码 | 是 | null |
| location_code | string | 库位代码 | 是 | null |
| item_code | string | 商品代码 | 是 | null |
| sku_code | string | 规格代码 | 否 | null |
| note | string | 备注 | 否 | null |

#### itemLocationDelete(data) - 商品库位关系删除

调用管易 ERP 商品库位关系删除接口 `gy.erp.item.location.delete`，删除商品库位关系。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| warehouse_code | string | 仓库代码 | 是 | null |
| location_code | string | 库位代码 | 是 | null |
| item_code | string | 商品代码 | 是 | null |
| sku_code | string | 规格代码 | 否 | null |

#### defaultItemLocationSet(data) - 默认库位关系设置

调用管易 ERP 默认库位关系设置接口 `gy.erp.default.item.location.set`，设置默认库位关系。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| warehouse_code | string | 仓库代码 | 是 | null |
| location_code | string | 库位代码 | 是 | null |
| item_code | string | 商品代码 | 是 | null |
| sku_code | string | 规格代码 | 否 | null |

### Trade 类

#### add(data) - 订单新增

调用管易 ERP 订单新增接口 `gy.erp.trade.add`，创建新订单。

**参数：**

| 参数名              | 类型     | 描述             | 必填 | 默认值 |
| ------------------- | -------- | ---------------- | ---- | ------ |
| shop_code           | string   | 店铺代码         | 是   | null   |
| vip_code            | string   | 会员代码         | 否   | null   |
| platform_code       | string   | 平台单号         | 是   | null   |
| warehouse_code      | string   | 仓库代码         | 是   | null   |
| business_man_code   | string   | 业务员           | 否   | null   |
| express_code        | string   | 物流公司         | 否   | null   |
| post_fee            | decimal  | 物流费用         | 否   | null   |
| currency_code       | string   | 币别代码         | 否   | null   |
| seller_memo         | string   | 卖家备注         | 否   | null   |
| cod                 | boolean  | 是否货到付款     | 否   | null   |
| deal_datetime       | datetime | 拍单时间         | 否   | null   |
| order_type_code     | string   | 订单类型         | 否   | null   |
| details             | array    | 商品明细         | 是   | []     |
| receiver_name       | string   | 收货人           | 是   | null   |
| receiver_mobile     | string   | 手机号码         | 是   | null   |
| receiver_province   | string   | 省名称           | 是   | null   |
| receiver_city       | string   | 市名称           | 是   | null   |
| receiver_district   | string   | 区名称           | 否   | null   |
| receiver_address    | string   | 收货地址         | 是   | null   |

#### memoUpdate(data) - 订单二次备注修改

调用管易 ERP 订单二次备注修改接口 `gy.erp.trade.memo.update`，修改订单二次备注。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| tid | string | 平台单号 | 是 | null |
| memo | string | 备注 | 是 | null |

#### refundUpdate(data) - 订单退款状态修改

调用管易 ERP 订单退款状态修改接口 `gy.erp.trade.refund.update`，修改订单退款状态。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| tid | string | 平台单号 | 是 | null |
| oid | string | 子订单号 | 否 | null |
| refund_state | int | 退款状态，0:未退款，1:退款完成，2:退款中 | 是 | null |

#### tagUpdate(data) - 订单标记修改

调用管易 ERP 订单标记修改接口 `gy.erp.trade.tag.update`，修改订单标记。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 单据编号 | 是 | null |
| tag_code | string | 标记代码 | 否* | null |
| tag_name | string | 标记名称 | 否* | null |
| operater | string | 操作人 | 否 | null |

\* tag_code与tag_name必须至少提供一个，两者都提供时以tag_code为准

#### search(data) - 订单查询

调用管易 ERP 订单查询接口 `gy.erp.trade.get`，获取订单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 开始时间 | 否 | null |
| end_date | datetime | 结束时间 | 否 | null |
| date_type | int | 时间类型，0:创建时间，1:拍单时间，2:付款时间，3:修改时间 | 否 | 0 |
| order_state | int | 订单类型，0:全部，1:未审核，2:已审核 | 否 | 0 |
| warehouse_code | string | 仓库代码 | 否 | null |
| shop_code | string | 店铺代码 | 否 | null |
| vip_name | string | 会员名称 | 否 | null |
| platform_code | string | 平台单号 | 否 | null |
| receiver_mobile | string | 收件手机 | 否 | null |
| code | string | 单据编号 | 否 | null |
| has_cancel_data | boolean | 是否附带返回已取消与已删除的订单数据 | 否 | false |

#### historySearch(data) - 订单历史查询

调用管易 ERP 订单历史查询接口 `gy.erp.trade.history.get`，获取历史订单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 开始时间 | 否 | null |
| end_date | datetime | 结束时间 | 否 | null |
| date_type | int | 时间类型，0:创建时间，1:拍单时间，2:付款时间，3:修改时间 | 否 | 0 |
| order_state | int | 订单类型，0:全部，1:未审核，2:已审核 | 否 | 0 |
| warehouse_code | string | 仓库代码 | 否 | null |
| shop_code | string | 店铺代码 | 否 | null |
| vip_name | string | 会员名称 | 否 | null |
| platform_code | string | 平台单号 | 否 | null |
| receiver_mobile | string | 收件手机 | 否 | null |
| code | string | 单据编号 | 否 | null |
| retrun_total | int | 是否返回总量，0:不返回，1:返回 | 否 | 1 |

#### deliverySearch(data) - 发货单查询

调用管易 ERP 发货单查询接口 `gy.erp.trade.delivery.get`，获取发货单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 开始时间 | 否 | null |
| end_date | datetime | 结束时间 | 否 | null |
| date_type | int | 时间类型，0:创建时间，1:发货时间，2:归档时间，默认1 | 否 | 1 |
| express_code | string | 物流公司代码 | 否 | null |
| express_no | string | 物流单号 | 否 | null |
| platform_code | string | 平台单号 | 否 | null |
| code | string | 发货单号 | 否 | null |
| has_print | int | 是否打印，0:未打印，1:已打印，-1:全部 | 否 | -1 |

#### deliveryUpdate(data) - 发货单修改

调用管易 ERP 发货单修改接口 `gy.erp.trade.delivery.update`，修改发货单信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | string | 发货单号 | 是 | null |
| express_code | string | 物流公司代码 | 否 | null |
| express_name | string | 物流公司名称 | 否 | null |
| express_no | string | 物流单号 | 否 | null |
| invoice_sn | string | 发票号 | 否 | null |
| receiver_name | string | 收货人 | 否 | null |
| receiver_phone | string | 固定电话 | 否 | null |
| receiver_mobile | string | 手机号码 | 否 | null |
| receiver_province | string | 省名称 | 否 | null |
| receiver_city | string | 市名称 | 否 | null |
| receiver_district | string | 区名称 | 否 | null |
| receiver_address | string | 收货地址 | 否 | null |

#### returnSearch(data) - 退货单查询

调用管易 ERP 退货单查询接口 `gy.erp.trade.return.get`，获取退货单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 开始时间 | 否 | null |
| end_date | datetime | 结束时间 | 否 | null |
| date_type | int | 时间类型，0:创建时间，1:修改时间，默认0 | 否 | 0 |
| warehouse_code | string | 仓库代码 | 否 | null |
| shop_code | string | 店铺代码 | 否 | null |
| return_order_code | string | 退货单号 | 否 | null |
| trade_code | string | 销售单号 | 否 | null |
| platform_code | string | 平台单号 | 否 | null |
| status | int | 审核状态，0:未审核，1:已审核 | 否 | null |

#### refundSearch(data) - 退款单查询

调用管易 ERP 退款单查询接口 `gy.erp.trade.refund.get`，获取退款单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 开始时间 | 否 | null |
| end_date | datetime | 结束时间 | 否 | null |
| date_type | int | 时间类型，0:创建时间，1:修改时间，默认0 | 否 | 0 |
| shop_code | string | 店铺代码 | 否 | null |
| platform_order_code | string | 平台单号 | 否 | null |
| status | int | 审核状态，0:未审核，1:已审核 | 否 | null |

#### paymentSearch(data) - 支付方式查询

调用管易 ERP 支付方式查询接口 `gy.erp.shop.payment.get`，获取支付方式列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| shop_code | string | 店铺代码 | 是 | null |

#### areaSearch(data) - 区域查询

调用管易 ERP 区域查询接口 `gy.erp.trade.area.get`，获取区域列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| province | string | 省名称 | 否 | null |
| city | string | 市名称 | 否 | null |

#### accountSearch(data) - 账单查询

调用管易 ERP 账单查询接口 `gy.erp.account.get`，获取账单列表信息。

**参数：**

| 参数名 | 类型 | 描述 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| page_no | int | 页码 | 否 | 1 |
| page_size | int | 每页大小 | 否 | 10 |
| start_date | datetime | 账单时间开始段 | 否 | null |
| end_date | datetime | 账单时间结束段 | 否 | null |
| shop_code | string | 店铺代码 | 否 | null |

## 许可证

MIT
