import request from "../request.js";
/**
 * 请求接口封装
 * 
 * noAuth  false 是需要鉴权的  true 是不用鉴权的
 * 
 * 商家助手的接口封装
 * 
*/


//登录接口
export function userLogin(data)
{
  return request.post("user/login",data,{ noAuth : true});
}

//用户退出登录
export function userLogout(data)
{
  return request.post("user/logout",data,{ noAuth : true});
}

//忘记密码和修改密码
export function userUpdatePassword(data)
{
  return request.post("user/updatePassword",data,{ noAuth : true});
}


//发送验证码 用于忘记密码
export function userSendSms(data)
{
  return request.post("user/sendSms",data,{ noAuth : true});
}



//首页资金交易数据
export function storeIndex(data)
{
  return request.post("store/index",data,{ noAuth : true});
}

//获取商家锁客列表
export function lockGuest(data)
{
  return request.post("store/lockGuest",data,{ noAuth : true});
}

//商家消息列表
export function storeAdvices(data)
{
  return request.post("store/advices",data,{ noAuth : true});
}

//佣金明细 
export function storeStoreLogs(data)
{
  return request.post("store/storeLogs",data,{ noAuth : true});
}



//提现记录
export function storeCashList(data)
{
  return request.post("store/storeCashList",data,{ noAuth : true});
}



//生成商家二维码
export function createQrcode(data)
{
  return request.post("store/createQrcode",data,{ noAuth : true});
}

//添加银行卡
export function addBank(data)
{
  return request.post("StroeCapital/addBank",data,{ noAuth : true});
}

//获取银行卡可选类型 列表
export function bankinfoList(data)
{
  return request.post("StroeCapital/bankinfoList",data,{ noAuth : true});
}

//商家银行卡列表
export function bankList(data)
{
  return request.post("StroeCapital/bankList",data,{ noAuth : true});
}

//解绑银行卡 删除银行卡
export function deleteBank(data)
{
  return request.post("StroeCapital/deleteBank",data,{ noAuth : true});
}


//商家提现接口
/**
 * 
 * type	是	int	0佣金提现，1代理提现,2商家提现
 * money	是	int	提现金额
 * totype	是	int	1提现微信，2提现银行卡
 * bank_realname	是	string	实名认证真实姓名
 * user_bank_id	否	int	绑定的银行卡id （提现银行卡必填）
 * paw_val	否	string	支付密码
code	否	string	验证码
phone	否	string	电话号码
 * **/
export function cashUserFund(data)
{
  return request.post("StroeCapital/cashUserFund",data,{ noAuth : true});
}


//修改店铺信息
export function addNewStore(data)
{
  return request.post("store/addNewStore",data,{ noAuth : true});
}


//上传店铺资质
export function storeCertificate(data)
{
  return request.post("store/storeCertificate",data,{ noAuth : true});
}


//查询店铺详情信息
export function shopDetail(data)
{
  return request.post("store/shopDetail",data,{ noAuth : true});
}


//商家语音播报
export function newsRemind(data)
{
  return request.post("store/newsRemind",data,{ noAuth : true});
}


//外卖订单状态
export function eleOrderStatus(data)
{
  return request.post("Order/eleOrderStatus",data,{ noAuth : true});
}

//商家订单列表
export function eleOrderList(data)
{
  return request.post("Order/eleOrderList",data,{ noAuth : true});
}

//商家立即接单
export function immediatelyOrder(data)
{
  return request.post("Order/immediatelyOrder",data,{ noAuth : true});
}

//商家拒绝接单
export function refuseOrder(data)
{
  return request.post("Order/refuseOrder",data,{ noAuth : true});
}


//请求订单详情
export function eleOrderDetails(data)
{
  return request.post("Order/eleOrderDetails",data,{ noAuth : true});
}


//商户资金统计图
export function storeMoney(data)
{
  return request.post("store/storeMoney",data,{ noAuth : true});
}


//获取模型分类 关联规格的 选择分类
export function specTypeList(data)
{
  return request.post("Spec/specTypeList",data,{ noAuth : true});
}


//查询商品的规格  商品规格详情 没对
export function goodsSpec(data)
{
  return request.post("spec/goodsSpec",data,{ noAuth : true});
}

//spec/ajaxGetSpecSelect
//获取商品详情的规格 查询规格项 获取类型规格详情 没对
export function ajaxGetSpecSelect(data)
{
  return request.post("spec/ajaxGetSpecSelect",data,{ noAuth : true});
}

//商品添加规格 商品关联规格
export function addEditProductSpec(data)
{
  return request.post("spec/addEditProductSpec",data,{ noAuth : true});
}

//获取规格列表 规格列表
export function specitemList(data)
{
  return request.post("Spec/specitemList",data,{ noAuth : true});
}


//添加规格 修改规格
export function addSpec(data)
{
  return request.post("spec/addSpec",data,{ noAuth : true});
}


//修改规格详情 暂时没在用 用的本地存储
export function upSpecInfo(data)
{
  return request.post("spec/upSpecInfo",data,{ noAuth : true});
}


//获取外卖分类列表
export function typeManager(data)
{
  return request.post("ele/typeManager",data,{ noAuth : true});
}


//外卖分类 添加 修改方法
export function addEditType(data)
{
  return request.post("ele/addEditType",data,{ noAuth : true});
}






//查询分类
export function findEleProduct(data)
{
  return request.post("ele/findEleProduct",data,{ noAuth : true});
}


//删除分类
export function deleteType(data)
{
  return request.post("ele/deleteType",data,{ noAuth : true});
}

//商家外卖产品列表
export function eleProductList(data)
{
  return request.post("ele/eleProductList",data,{ noAuth : true});
}

//上下架外卖产品
export function autoManageProduct(data)
{
  return request.post("ele/autoManageProduct",data,{ noAuth : true});
}

//删除外卖产品
export function deleteEleProduct(data)
{
  return request.post("ele/deleteEleProduct",data,{ noAuth : true});
}

//添加 修改外卖产品 接口
export function addEditEleProduct(data)
{
  return request.post("ele/addEditEleProduct",data,{ noAuth : true});
}

//获取单条数据 修改的时候初始化值
export function eleProductInfo(data)
{
  return request.post("ele/eleProductInfo",data,{ noAuth : true});
}


//商城订单状态
export function orderStatus(data)
{
  return request.post("order/orderStatus",data,{ noAuth : true});
}

//商城订单列表
export function orderList(data)
{
  return request.post("order/orderList",data,{ noAuth : true});
}

//商城订单详情
export function orderDetails(data)
{
  return request.post("order/orderDetails",data,{ noAuth : true});
}

//商城订单一键核销
export function oneKeyCancel(data)
{
  return request.post("order/oneKeyCancel",data,{ noAuth : true});
}

//商家一键发货
export function oneKeyShipments(data)
{
  return request.post("order/oneKeyShipments",data,{ noAuth : true});
}

//获取快递编号
export function logisticsList(data)
{
  return request.post("order/logisticsList",data,{ noAuth : true});
}


//商城订单物流跟踪
export function checkLogistics(data)
{
  return request.post("order/checkLogistics",data,{ noAuth : true});
}

//商城订单同意退款
export function consentRefund(data)
{
  return request.post("order/consentRefund",data,{ noAuth : true});
}

//商城订单拒绝退款
export function refuseRefund(data)
{
  return request.post("order/refuseRefund",data,{ noAuth : true});
}



//商城分类 用于添加产品的时候 选择分类
export function getGoodsCate(data)
{
  return request.post("goods/getGoodsCate",data,{ noAuth : true});
}


//商城商家分类 列表
export function shopCate(data)
{
  return request.post("goods/shopCate",data,{ noAuth : true});
}


//商城添加修改商品
export function addEditGoods(data)
{
  return request.post("goods/addEditGoods",data,{ noAuth : true});
}

//商城添加修改分类
export function addEditCate(data)
{
  return request.post("goods/addEditCate",data,{ noAuth : true});
}

//商城删除商家分类
export function deleteCate(data)
{
  return request.post("goods/deleteCate",data,{ noAuth : true});
}

//获取商城产品列表
export function goodsList(data)
{
  return request.post("goods/goodsList",data,{ noAuth : true});
}

//商城产品删除
export function deleteGoods(data)
{
  return request.post("goods/deleteGoods",data,{ noAuth : true});
}

//商城商品上下架
export function autoManageGoods(data)
{
  return request.post("goods/autoManageGoods",data,{ noAuth : true});
}

//商城商品详情 用于修改的时候 获取原来的信息 数据初始化
export function goodsDetails(data)
{
  return request.post("goods/goodsDetails",data,{ noAuth : true});
}

//关闭店铺的接口
export function deleteStore(data)
{
  return request.post("store/deleteStore",data,{ noAuth : true});
}


//获取外卖店铺详情 查询店铺打烊情况

export function storeEleInfo(data)
{
  return request.post("store/eleInfo",data,{ noAuth : true});
}

//店铺打烊 开关
export function storeOpenEle(data)
{
  return request.post("store/openEle",data,{ noAuth : true});
}

//获取商家手机号
export function storeShopTel(data)
{
  return request.post("user/shopTel",data,{ noAuth : true});
}

//获取验证码
export function storeSendSms(data)
{
  return request.post("user/sendSms",data,{ noAuth : true});
}

//忘记密码提交
export function storeUpdatePassword(data)
{
  return request.post("user/updatePassword",data,{ noAuth : true});
}

//绑定手机号
export function storeSaveMobile(data)
{
  return request.post("user/saveMobile",data,{ noAuth : true});
}

//添加打印机
export function addPrinter(data)
{
    return request.post("user/shopBindingPrint",data,{ noAuth : true});
}
//获取打印机列表
export function getPrinterList(data)
{
	return request.post("user/shopPrintS",data,{ noAuth : true});
}
//删除打印机
export function closePrinter(data)
{
	return request.post("user/shopDelPrint",data,{ noAuth : true});
}


//同意退款(外卖)
export function consentEleRefund(data)
{
	return request.post("order/consentEleRefund",data,{ noAuth : true});
}

//拒绝退款(外卖)
export function refuseEleRefund(data)
{
	return request.post("order/refuseEleRefund",data,{ noAuth : true});
}

//设置配送费(外卖)
export function setShopDeliveryPrice(data)
{
	return request.post("user/setShopDeliveryPrice",data,{ noAuth : true});
}

//平台消息
export function geTPublicadvices(data)
{
	return request.post("store/geTPublicadvices",data,{ noAuth : true});
}


//获取配送费(外卖)
export function getShopDeliveryPrice(data)
{
	return request.post("user/getShopDeliveryPrice",data,{ noAuth : true});
}

