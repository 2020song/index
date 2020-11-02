import request from "../request.js";
/**
 * 获取主页数据 无需授权
 * 
*/



//订单
// export function addEleOrder(data)
// {
//   return request.post("ele_order/addEleOrder",data,{ noAuth : true,islutwo:true});
// }





//支付宝
export function aliPay(data)
{
  return request.post("Alipay/aliPay",data,{ noAuth : true});
}
//餐品详情
export function eleProductDetail(data)
{
  return request.post("EleProduct/eleProductDetail",data,{ noAuth : true});
}

//切换店铺
export function getShopList(data)
{
  return request.post("Store/getShopList",data,{ noAuth : true});
}

export function getShopAndgoods(data)
{
  return request.post("shop/getShopAndgoods",data,{ noAuth : true});
}

// 特色美食  
export function ranKings(data)
{
  return request.post("shop/ranKings",data,{ noAuth : true});
}

//tabs项
export function childCateb(data)
{
  return request.post("shop/childCateb",data,{ noAuth : true});
}
//分类详情页面
export function shopNears(data)
{
  return request.post("shop/shopNears",data,{ noAuth : true});
}

export function getIndexData(data) {//商家主页数据接口
console.log(222229999)
  return request.get("shop/index", data, { noAuth: true,islutwo:true});
}

export function getShopComment(data) {//获取商家评论接口
  return request.post("shop/getShopComment", data, { noAuth: true });
}


export function shopReply(data) {//商家回复评论接口
  return request.get("shop/reply", data, { noAuth: false });
}

//商品二级分类
export function shopNear(data) {
  return request.get("shop/shopNear", data, { noAuth: true });
}
//获取商城商品分类
export function getShopCate(){
  return request.get("shop/getShopCate", {}, { noAuth: true });
}

/**
 * 关注店铺操作
 * */
export function focusShop(data) {
  return request.get("shop/focusShop", data, { noAuth: false });
}

/**
 * 切换类型获取商品数据
 * 
 * ***/
export function getShopGoods(data) {
  return request.get("shop/getShopGoods", data, { noAuth: true });
}

//获取店铺信息
export function checkShop(data) {
  return request.get('index/checkShop', data, { noAuth: false });
}


//修改购物车
export function cartOperate(data) {
  return request.post("cart/cartOperate", data, { noAuth: false,islutwo:true });
}

//获取购物车的商品
export function getCartGoods(data) {
  return request.post("cart/getCartGoods", data, { noAuth: false,islutwo:true });
}

//清空购物车
export function cleanCart(data) {
  return request.post("cart/cleanCart", data, { noAuth: false,islutwo:true });
}

//添加外卖订单 
// cart_ids	是	string	选中商品id集合 用 , 分割
// shop_id	是	int	商家ID
// is_ld	是	int	是否是联动商品
export function addEleOrder(data) {
  return request.post("ele_order/addEleOrder", data, { noAuth: false,islutwo:true });
}

//获取订单内容 提交订单页面
export function getEleOrder(data) {
  return request.get("ele_order/getEleOrder", data, { noAuth: false,islutwo:true  });
}


//调支付
export function cashierpayEle(data) {
  return request.get("ele_order/payEle", data, { noAuth: false,islutwo:true  });
}

//查询订单状态
export function orderfind(data) {
  return request.get("ele_order/orderfind", data, { noAuth: false,islutwo:true  });
}


//查询订单状态
export function orderselte(data) {
  return request.get("shop/index", data, { noAuth: false,islutwo:true  });
}





//修改订单备注
export function addRemark(data) {
  return request.get("ele_order/addRemark", data, { noAuth: false });
}

//下面三个方法不知道是做什么的

//这个是验证店铺身份 !!!! ??
export function checkMyShop(data) {
  return request.get("shop/checkMyShop", data, { noAuth: false });

}

//外卖支付?
export function payEle(data) {
  return request.post("ele_order/payEle", data, { noAuth: false });
}


//?? 商家入驻 还没处理好 要改
export function addNewStore(data) {
  return request.post("store/addNewStore", data, { noAuth: false });
}

//修改店铺信息 没处理
export function editShopAudit(data) {
  return request.post("store/editShopAudit", data, { noAuth: false });
} 

//获取商品分类 商家入驻要 还没对接
export function shopCate() {
  return request.get("store/shopCate", {}, {noAuth: true});

}


//获取我的收获地址 下单填写地址
export function getUserAddrList(data) {
  return request.get("ele_order/getUserAddrList", data, { noAuth: false });
}

////外卖订单支付成功 获取订单信息
export function paySuccess(data) {
  return request.get("ele_order/paySuccess", data, { noAuth: false });
}

//订单详情? 用户看到的
export function orderDetail(data) {
  return request.get("ele_order/orderDetail", data, { noAuth: false });
}

//商家看到的
export function eleorderDetail(data) {
  return request.get("ele_order/orderDetail", data, { noAuth: false });
}

//订单列表
export function orderList(data) {
  return request.get("ele_order/orderList", data, { noAuth: false });
}

//删除订单
export function deleteOrder(data) {
  return request.get("ele_order/deleteOrder", data, { noAuth: false });
}


//我的粉丝
export function myFans(data) {
  return request.post("Store/myFans", data, { noAuth: false, noVerify: true });
}

//发布评论
export function submitComment(data) {
  return request.post("ele_order/submitComment", data, { noAuth: false });
}

//我的店铺
export function myStore(data) {
  return request.post("Store/myStore", data, { noAuth: false, noVerify: true });
}



//店铺锁客 这个有问题
export function lockGuest(data) {
  return request.post("Store/lockGuestLoaddata", data, { noAuth: false, noVerify: true });
}


//下面两个是微店里面的 也就是商城专区的
export function weidianIndex(data) {
  return request.get("shop/weidianIndex", data, { noAuth: true });
}
//微店商品
export function getWeidianGoods(data) {
  return request.get("shop/getWeidianGoodsList", data, { noAuth: true });
}


//APP支付接口
export function weixinPayApp(data) {
  return request.post("Weixin_payment/weixinPay", data, { noAuth: false });
}


//上传评论的图片
export function uploadCommentPic(data) {
  return request.post("ele_order/uploadCommentPic", data, { noAuth: true });
}

export function deleteCart(data) {
  return request.post("cart/deleteCart", data, { noAuth: false });
}
export function updateWeidianCart(data) {
  return request.post("cart/updateWeidianCart", data, { noAuth: false });
}
export function getHotelDetail(data) {
  return request.get("hotel/hotelDetail", data, { noAuth: false });
}

//快捷支付
export function fastPaymentOrder(data) {
  return request.post("ele_order/fastPaymentOrder", data, { noAuth: false });
}

//二级分类 附近的
export function childCate(data) {
  return request.post("shop/childCate", data, { noAuth: true });
}


/**
 * 外卖添加商品分类
 * ouYang
*/
export function goodsType(cate_name,cate_id) {
  return request.post("Store/goodsType", { cate_name,cate_id}, { noAuth: false, noVerify: true });
}
/**
 * 商城添加商品分类
 * ouYang
*/
export function goodssType(cate_name) {
  return request.post("Store/goodssType", { cate_name }, { noAuth: false, noVerify: true });
}

//获取购物车规格
export function getGoodsSpec(data) {
  return request.get("goods/getGoodsSpec", data, { noAuth: false });
}

//修改购物车规格
export function updateSpec(data) {
  return request.get("cart/updateSpec", data, { noAuth: false });
}


/**
 * 订单状态处理 
 */
export function requestOrder(data) {
  return request.post("Store/" + data.action, data, { noAuth: false });
}

//证件资质
export function getCertificate(data) {
  return request.get("shop/getCertificate", data, { noAuth: true });
}

//商家回复回复评论
export function replyComment(data) {
    return request.post("store/replyComment", data, { noAuth: false });
}


/**
 * 区分商店
 * ouYang
*/
export function shopType(shopId) {
  return request.post("Store/shopType", { shopId }, { noAuth: true, noVerify: true });
}


/**
 * 获取酒店id
 * ouYang
 * 
 * 通过shopid 获取 酒店id
*/
export function hotelId(shopId) {
  return request.post("Hotel/hotelId", { shopId }, { noAuth: true, noVerify: true });
}


//新加的
/**
 * 外卖和商城商品分类列表
 * ouYang
*/
export function typeList() {
  return request.post("Store/typeList", {}, { noAuth: true, noVerify: true });
}

/**
 * 外卖和商城商品类型详情
 * ouYang
*/
export function cate(cate_id) {
  return request.post("Store/cate", { cate_id}, { noAuth: true, noVerify: true });
}

/**
 * 商城添加商品分类
 * ouYang
*/
export function delTyep(cate_id) {
  return request.post("Store/delTyep", { cate_id }, { noAuth: false, noVerify: true });
}


/**
 *酒店商户类型
 * ouYang
*/
export function roomType() {
  return request.post("Hotel/roomType", { }, { noAuth: false, noVerify: true });
}

/**
 *酒店房间添加
 * ouYang
*/
export function setRoom(data) {
  return request.post("Hotel/setRoom", {data}, { noAuth: false, noVerify: true });
}
/**
 *商城优惠券 这个没有写完了
 * ouYang
*/
// export function shopCoupons(shop_id) {
//   return request.post("Coupons/shop_coupons", {shop_id}, { noAuth: true, noVerify: true });
// }


/**
 *酒店商户订单
 * ouYang
*/
export function shopHotel(status,page) {
  return request.post("Hotel/shop_hotel", {status,page}, { noAuth: false, noVerify: true });
}

/**
 *确认酒店客户入住
 * ouYang
*/
export function complete(orderid) {
  return request.post("Hotel/complete", {orderid}, { noAuth: false, noVerify: true });
}


//商户下架
export function closeshop(data) {
  return request.get("store/closeshop", data, { noAuth: false });
}

//商家店铺优惠券列表
export function shop_coupons(data) {
  return request.get("coupons/shop_coupons", data, { noAuth: false });
}

//商家店铺优惠券领取
export function get_tap_and_pay(data) {
  return request.get("coupons/get_tap_and_pay", data, { noAuth: false });
}

//云闪付
export function bankPayH(data) {
  return request.get("WeixinPayment/bankPayH", data, { noAuth: false });
}
//外卖商品是否有规格
export function eleHasSpec(data){
	return request.get("Shop/eleHasSpec", data, { noAuth: false });
}

//点和点商城
export function dianhedianIndex(data){
	return request.get("goods/dianhedianIndex", data, { noAuth: false });
}

//点和点商城列表
export function bestGoodsList(data){
	return request.get("goods/bestGoodsList", data, { noAuth: false });
}

//中秋
export function getMidautumnFestival(data) {
  return request.post('goods/getMidautumnFestival', data, { noAuth: true });
}

