<template>
	<view>
		<!-- <view class="sz" style="display: flex;height:26upx;text-align:center;line-height:26upx;">
			<view style="margin-top: 2upx;" @tap="login"><i class="uni-btn-icon" style="color: rgb(0, 0, 0);font-size: 27px;"></i></view>
			<view style="margin: auto;"><text>收银首页</text></view>
		</view> -->

		<view class="container">
			<view class="logo"><image src="../../static/logo/logos.png" mode="scaleToFill"></image></view>
			<view style="display: flex;margin: auto;">
				<view class="intro" @tap="changes(1)" :class="{ btna: btnnum == 1 }">收银系统</view>
				<view class="intro" @tap="changes(2)" :class="{ btna: btnnum == 2 }">商品管理</view>
			</view>

			<view class="vanvasboxs" style="position: absolute;">
				<!-- #ifndef MP-ALIPAY -->
				<canvas class="tki-qrcode-canvas" canvas-id="tki-qrcode-canvas" :style="{ width: cpSize + 'px', height: cpSize + 'px' }" />
				<!-- #endif -->
				<!-- #ifdef MP-ALIPAY -->
				<canvas id="tki-qrcode-canvas" :width="cpSize" :height="cpSize" class="tki-qrcode-canvas" />
				<!-- #endif -->
			</view>
		</view>
		<view class="container_1" v-show="btnnum == 1">
			<view class="container_list">
				<view class="particulars">
					<!-- 头部 -->
					<view class="particulars_1 sz">
						<!-- {{ shop_info.shop_name }} -->
						<view style="width:180upx;border-right: 1upx solid rgb(240,240,240);padding:4upx 0 4upx 4upx;font-size: 8upx;text-align: center;margin: auto;">
							<view class="pageshead pl-20 flex flex  jus-b ali-c">
								<view class="inputbox" style="padding:4upx;">
									<image class="imgs" src="/static/news/fangdajing@2x.png" mode=""></image>
									<input class="inputs" type="text" :focus="false" :value="keyworld" @input="tosearch" placeholder="搜索吃喝玩乐" />
								</view>
							</view>
						</view>
					</view>
					<!-- 商品详细信息 -->
					<view class="particulars_2">
						<view class="particulars_2_1 flex sz">
							<view class="particulars_2_1_1" style="width: 66upx;">品名</view>
							<view class="particulars_2_1_1" style="width: 66upx;">数量</view>
							<view class="particulars_2_1_1" style="width: 52upx;">单价</view>
							<view class="particulars_2_1_1">重量</view>
							<view class="particulars_2_1_1">合计</view>
							<view class="particulars_2_1_1">操作</view>
						</view>

						<view class="particulars_code">
							<view class="particulars_2_2 flex sz_8" v-for="(item, index) in cart_list" :key="index">
								<view class="particulars_2_2_1 oneline" style="width: 68upx;">{{ item.goods_name }}</view>
								<view class="particulars_2_2_1 oneline" style="width: 68upx;">
									<view class="orxuanliang jiajians ali-c">
										<image
											class="imasf"
											:class="[item.weight != ''? 'banys' : '']"
											src="/static/news/jian@2x.png"
											:data-sku_id="item.sku_id"
											:data-img="item.goods_picture"
											@tap="cartOperate"
											:data-id="item.goods_id"
											data-type="reduce"
											:data-shop_name="item.shop_name"
											:data-name="item.goods_name"
											:data-price="item.price"
											:data-cost_price="item.cost_price"
											:data-rechargeprice="item.rechargeprice"
										></image>

										<text class="sumnum" v-show="item.num != 0">{{ item.num }}</text>

										<image
											class="imasf"
											:class="[item.weight != ''? 'banys' : '']"
											src="/static/news/jia@2x.png"
											:data-img="item.goods_picture"
											:data-sku_id="item.sku_id"
											@tap="cartOperate"
											:data-id="item.goods_id"
											data-type="add"
											:data-shop_name="item.shop_name"
											:data-cost_price="item.cost_price"
											:data-name="item.goods_name"
											:data-price="item.price"
											:data-rechargeprice="item.rechargeprice"
										></image>
									</view>
								</view>
								<view class="particulars_2_2_1 oneline">{{ item.weight != ''?item.hide_price  : item.price }}</view>
								<view class="particulars_2_2_1 oneline" style="margin-left: 3upx87g;">
									{{ item.weight !=''?item.weight:'非称重' }}
									<text>{{ item.weight!= ''? 'kg' : '' }}</text>
								</view>
								<view class="particulars_2_2_1 oneline">{{ (item.price * item.num).toFixed(2) }}</view>
								<view
									class="particulars_2_2_1"
									:data-sku_id="item.sku_id"
									:data-img="item.goods_picture"
									@tap="cartOperate"
									:data-id="item.goods_id"
									data-type="del"
									:data-num="item.num"
									:data-shop_name="item.shop_name"
									:data-name="item.goods_name"
									:data-price="item.price"
									:data-cost_price="item.cost_price"
									:data-rechargeprice="item.rechargeprice"
								>
									<image style="width: 14upx;height: 14upx;margin-top: 9upx;" src="../../static/news/delete.png" mode=""></image>
								</view>
							</view>
						</view>
					</view>
					<!-- 底部支付 -->
					<view class="particulars_3 sz">
						<view class="jus-b sz" style="display: flex;width: 100%; ">
							<view style="border-right: 1upx solid rgb(240,240,240);padding:4upx 0 4upx 4upx;font-size: 8upx;text-align: center;flex:1">
								<!-- <view>优惠: 2元</view> -->
								<view style="margin-top: 5upx;">
									合计:￥
									<text style="color: #f64f15;font-size: 12upx;font-weight: bold;">{{ cart_total.total.toFixed(2) }}元</text>
								</view>
							</view>
							<view class="flex jus-b">
								<view class="particulars_3_1" @tap="showpayment" style="padding-top: 5upx;">
									<image src="../../static/news/lmlogo.png" mode="widthFix"></image>
								</view>
								<view class="particulars_3_1" @tap="showcash" style="padding-top: 5upx;"><image src="../../static/news/lmlogo_1.png" mode="widthFix"></image></view>
								<view class="particulars_3_1" @tap="cleanCartfun()" style="margin-top: 7upx;">
									<image src="../../static/news/lmlogo_4.png" mode="widthFix"></image>
								</view>

								<!-- <view class="particulars_3_1" style="padding-top: 5upx;">
									<image src="../../static/news/lmlogo_2.png" mode="widthFix"></image>
								</view> -->
							</view>
						</view>
					</view>
				</view>
				<!-- 商品分类 -->
				<view class="product_name">
					<view class="product_name_1">
						<view class="product_class flex">
							<view class="shop_r jus-b flex-wrap" v-if="goods_cate[towtabactive]">
								<view
									class="shop_card_item flex"
									v-for="(item, index) in goods_cate[towtabactive].goods_list"
									:key="index"
									style="font-size: 10upx;width:80upx;padding:5upx 5upx 0 5upx;"
								>
									<view
										class="imgs"
										style="width:76upx;height:90upx;text-align: center;"
										data-type="add"
										:data-num="item.num"
										@tap.stop="cartOperate"
										:data-id="item.id"
										:data-shop_name="item.shop_name"
										:data-name="item.title"
										:data-price="item.disprice"
										:data-cost_price="item.cost_price"
										:data-rechargeprice="item.rechargeprice"
									>
										<view style="width: 76upx;height: 65upx;">
											<image
												style="width: 76upx;height: 65upx;border-top-left-radius: 4upx;border-top-right-radius: 4upx;"
												:src="staticUrl + item.img"
												mode=""
											></image>
										</view>
										<view
											class=""
											style="background: #ffffff;box-shadow: 0upx 2upx 3upx 0upx rgba(0, 0, 0, 0.12);color: #3B4144;padding: 5upx 0;border-bottom-left-radius: 4upx;border-bottom-right-radius: 4upx;"
										>
											<view class="shop_title oneline">{{ item.title }}</view>
										</view>
									</view>
								</view>
							</view>
						</view>

						<!-- 商品列表分类 -->
						<view class="product_check">
							<view class="shopmian flex" v-show="Threetabactive == 1" style="width:80upx;font-size: 10upx;height: 216upx;">
								<scroll-view :scroll-y="true" class="shop_l">
									<view
										class="category_item"
										style="padding: 10upx 0;"
										@tap="changetowtab(index)"
										:class="{ active: index == towtabactive }"
										v-for="(item, index) in goods_cate"
										:key="index"
									>
										{{ item.cate_name }}
									</view>
								</scroll-view>
							</view>
						</view>
					</view>

					<view class="product_name_2">
						<!-- 底部支付 -->
						<view class="particulars_3 sz">
							<view class="flex jus-b" style="width: 212upx;margin: auto;">
								<!-- <view class="particulars_3_1"><image src="../../static/news/lmlogo_3.png" mode="widthFix"></image></view> -->
								<!-- <view class="particulars_3_1" @tap="cleanCartfun()"><image src="../../static/news/lmlogo_4.png" mode="widthFix"></image></view> -->
								<!-- <view class="particulars_3_1"><image src="../../static/news/lmlogo_5.png" mode="widthFix"></image></view> -->
							</view>
							<!-- 搜索 -->
							<!-- <view style="width:180upx;border-right: 1upx solid rgb(240,240,240);padding:4upx 0 4upx 4upx;font-size: 8upx;text-align: center;margin: auto;">
								<view class="pageshead pl-20 flex flex  jus-b ali-c">
									<view class="inputbox" style="padding:4upx;">
										<image class="imgs" src="/static/news/fangdajing@2x.png" mode=""></image>
										<input class="inputs" type="text" :focus="false" :value="keyworld" @input="tosearch" placeholder="搜索吃喝玩乐" />
									</view>
								</view>
							</view> -->
						</view>

						<!-- 点餐 -->
					</view>
				</view>
			</view>
		</view>

		<!-- 免费专区说明弹窗 -->
		<uni-popup :show="showtip" type="center" :mask-click="false">
			<view class="uni-tip sz" v-show="poptype == 0">
				<image style="width: 200upx;height: 280upx;" src="../../static/news/receiving.png" mode=""></image>
				<view style="position: absolute;width: 200upx;height: 280upx;">
					<view style="width: 140upx;height:70upx;padding: 6upx;margin: auto;">
						<view class="flex jus-b" style="padding:  10upx 0;">
							<view>
								<view>
									合计:￥
									<text style="color: #f64f15;font-size: 12upx;font-weight: bold;">{{ cart_total.total.toFixed(2) }}元</text>
								</view>
								<view>
									共
									<text style="color: #f64f15;">{{ cart_total.count }}</text>
									件商品
								</view>
								<!-- <view>优惠:￥0</view> -->

								<view>日期:{{ time }}</view>
							</view>
							<view><image style="width: 66px;height: 66px;" :src="staticUrl + shop_info.logo" mode=""></image></view>
						</view>
					</view>

					<view>
						<view style="width: 140upx;height: 140upx;padding: 10upx 20upx 10upx 20upx; margin: auto;">
							<image :class="[block ? 'bany' : 'none']" style="width: 140upx;height: 140upx; margin-left:5upx;" :src="result" mode=""></image>
						</view>
						<view style="width: 70upx;height: 24upx;line-height:24upx;: 10upx 60upx;background-color:#bdbdbd; margin: auto;text-align: center;border-radius: 6upx;">
							<view @tap="cancel">取消支付</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 支付成功弹窗 -->
			<view @tap="cancel" v-show="poptype == 1"><image style="width: 210upx;height: 240upx;" src="../../static/news/succeed.png" mode=""></image></view>

			<!-- 账单 -->
			<!-- 	<view class="sz uni-tips " style="background-color: #ffffff;padding:8upx">
				<view  style="height:20upx ;text-align: center;border-bottom: 1upx solid #3B4144;">
					<view class=""><text>收银挂单</text></view>
				</view>

				<view class="product_name_1">
					<view class="product_class flex">
						<view class="shop_r jus-b flex-wrap" v-if="goods_cate[towtabactive]">
							<view
								class="shop_card_item flex"
								v-for="(item, index) in goods_cate[towtabactive].goods_list"
								:key="index"
								style="font-size: 10upx;width:80upx;padding:5upx 5upx 0 5upx;"
							>
							
							<view>{{ item.title }}</view>
							
							
							</view>
						</view>
					</view>
				</view>
				
				
			</view> -->

			<!-- 现金支付 -->

			<view class="uni-tip sz" v-show="poptype == 3">
				<image style="width: 200upx;height: 280upx;" src="../../static/news/receiving.png" mode=""></image>
				<view style="position: absolute;width: 200upx;height: 280upx;">
					<view style="width: 140upx;height:70upx;padding:20upx 0 0 0 ;margin: auto;">
						<view class="flex jus-b" style="padding:  10upx 0;">
							<!-- <view> -->
							<view style="width: 100%;text-align: center;"><text style="color: #f64f15;font-size:20upx;font-weight: bold;">现金支付</text></view>
						</view>
					</view>

					<view>
						<view style="text-align: center;width: 140upx;height: 100upx;padding: 10upx 14upx 10upx 14upx; margin: auto;font-size: 16upx;">
							<view class="jus-c">
								<view class="" style="font-size: 14upx;">实收金额:</view>

								<view style="margin: auto;">
									<input
										type="number"
										@input="bindSkeywords"
										style="width:80upx;text-align: center;font-size: 13upx;color: #f64f15;"
										:value="value"
										placeholder="输入现金金额"
									/>
								</view>
							</view>

							<view class="jus-b">
								<view class="" style="font-size: 14upx;">应收金额:</view>
								<view>
									<text style="font-size: 14upx;">￥{{(cart_total.total).toFixed(2) }}</text>
								</view>
							</view>

							<view class="jus-b">
								<view class="" style="font-size: 14upx;">找零金额:</view>

								<view>
									<text style="font-size: 14upx;">￥{{ change }}</text>
								</view>
							</view>
						</view>
						<view class="jus-b" style="display: flex; width:140upx;height: 24upx;line-height:24upx;: 10upx 60upx;margin: auto;text-align: center;border-radius: 6upx;">
							<view @tap="cancel" style="width: 66upx;  background: #f64f15;border-radius: 24px;font-size: 20px;color: #ffffff;">取消支付</view>
							<view @tap="cancelmoney" style="width: 66upx;    background: #f64f15;border-radius: 24px;font-size: 20px;color: #ffffff;">确认支付</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
		
		<Welcome ref="Welcome"></Welcome>
		<!-- 欢迎回来 -->
		
		
		
	</view>
</template>

<script>
import { eleProductList, autoManageProduct, deleteEleProduct, storeIndex, findEleProduct } from '@/utils/api/api.js';
import { getIndexData, cartOperate, getCartGoods, cleanCart, addEleOrder, getEleOrder, cashierpayEle, orderfind, orderselte } from '@/utils/api/shop.js';

import uniPopup from '@/appcomponents/uni-popup/uni-popup';
import Welcome from "@/components/Welcome/Welcome.vue"; //欢迎回来
import QRCode from '@/components/tki-qrcode/qrcode.js';
let qrcode;
var iscode;
var allKeyCodeTemp = '';
var preKeyCode = '';
var longyoungKeyEventListen;
var resultStrFinal = '';
var KEY_MAP = {
	KEYCODE_GRAVE: {
		normalChar: '`',
		shiftChar: '~'
	},
	KEYCODE_0: {
		normalChar: '0',
		shiftChar: ')'
	},
	KEYCODE_1: {
		normalChar: '1',
		shiftChar: '!'
	},
	KEYCODE_2: {
		normalChar: '2',
		shiftChar: '@'
	},
	KEYCODE_3: {
		normalChar: '3',
		shiftChar: '#'
	},
	KEYCODE_4: {
		normalChar: '4',
		shiftChar: '$'
	},
	KEYCODE_5: {
		normalChar: '5',
		shiftChar: '%'
	},
	KEYCODE_6: {
		normalChar: '6',
		shiftChar: '^'
	},
	KEYCODE_7: {
		normalChar: '7',
		shiftChar: '&'
	},
	KEYCODE_8: {
		normalChar: '8',
		shiftChar: '*'
	},
	KEYCODE_9: {
		normalChar: '9',
		shiftChar: '('
	},
	KEYCODE_MINUS: {
		normalChar: '-',
		shiftChar: '_'
	},
	KEYCODE_EQUALS: {
		normalChar: '=',
		shiftChar: '+'
	},
	KEYCODE_LEFT_BRACKET: {
		normalChar: '[',
		shiftChar: '{'
	},
	KEYCODE_RIGHT_BRACKET: {
		normalChar: ']',
		shiftChar: '}'
	},
	KEYCODE_BACKSLASH: {
		normalChar: '\\',
		shiftChar: '|'
	},
	KEYCODE_SEMICOLON: {
		normalChar: ';',
		shiftChar: ':'
	},
	KEYCODE_APOSTROPHE: {
		normalChar: "'",
		shiftChar: '"'
	},
	KEYCODE_COMMA: {
		normalChar: ',',
		shiftChar: '<'
	},
	KEYCODE_PERIOD: {
		normalChar: '.',
		shiftChar: '>'
	},
	KEYCODE_SLASH: {
		normalChar: '/',
		shiftChar: '?'
	},
	KEYCODE_A: {
		normalChar: 'a',
		shiftChar: 'A'
	},
	KEYCODE_B: {
		normalChar: 'b',
		shiftChar: 'B'
	},
	KEYCODE_C: {
		normalChar: 'c',
		shiftChar: 'C'
	},
	KEYCODE_D: {
		normalChar: 'd',
		shiftChar: 'D'
	},
	KEYCODE_E: {
		normalChar: 'e',
		shiftChar: 'E'
	},
	KEYCODE_F: {
		normalChar: 'f',
		shiftChar: 'F'
	},
	KEYCODE_G: {
		normalChar: 'g',
		shiftChar: 'G'
	},
	KEYCODE_H: {
		normalChar: 'h',
		shiftChar: 'H'
	},
	KEYCODE_I: {
		normalChar: 'i',
		shiftChar: 'I'
	},
	KEYCODE_J: {
		normalChar: 'j',
		shiftChar: 'J'
	},
	KEYCODE_K: {
		normalChar: 'k',
		shiftChar: 'K'
	},
	KEYCODE_L: {
		normalChar: 'l',
		shiftChar: 'L'
	},
	KEYCODE_M: {
		normalChar: 'm',
		shiftChar: 'M'
	},
	KEYCODE_N: {
		normalChar: 'n',
		shiftChar: 'N'
	},
	KEYCODE_O: {
		normalChar: 'o',
		shiftChar: 'O'
	},
	KEYCODE_P: {
		normalChar: 'p',
		shiftChar: 'P'
	},
	KEYCODE_Q: {
		normalChar: 'q',
		shiftChar: 'Q'
	},
	KEYCODE_R: {
		normalChar: 'r',
		shiftChar: 'R'
	},
	KEYCODE_S: {
		normalChar: 's',
		shiftChar: 'S'
	},
	KEYCODE_T: {
		normalChar: 't',
		shiftChar: 'T'
	},
	KEYCODE_U: {
		normalChar: 'u',
		shiftChar: 'U'
	},
	KEYCODE_V: {
		normalChar: 'v',
		shiftChar: 'V'
	},
	KEYCODE_W: {
		normalChar: 'w',
		shiftChar: 'W'
	},
	KEYCODE_X: {
		normalChar: 'x',
		shiftChar: 'X'
	},
	KEYCODE_Y: {
		normalChar: 'y',
		shiftChar: 'Y'
	},
	KEYCODE_Z: {
		normalChar: 'z',
		shiftChar: 'Z'
	}
};

export default {
	components: {
		uniPopup,
		Welcome
	
	},
	data() {
		return {
			time: '',
			keyworld: '', //关键字
			btnnum: 1,
			shop_id: '',
			cart_list: [], //购物列表数据
			Threetabactive: 1, //1点餐 2评论 3商家 分类
			page: 0, //分页
			shop_info: '',
			latitude: 28.688256,
			longitude: 115.922896,
			towtabactive: 0, //长分类选择的索引
			goodsListdata: [],
			listheight: 0, //列表的高度
			phoneHeight: 0, //手机高度
			goods_cate: [{ goods_list: [] }], //商品分类信息
			cart_total: { count: 0 }, ///购物篮统计数据
			shop_list: [],
			isAgree: false,

			showtip: false,

			cpSize: 150,
			result: '',
			canvasId: 'default_PosterCanvasId',
			order_id: '',

			poptype: 0,
			details_list: [],
			former: '', //储存原来$
			block: true,

			return_type: '',

			resultStr: '', //扫码
			tag: '1', //不必理会，固定 1 就好
			resultStrFinal: '',
			weights: '',
			quantity: '', //商品数量
			value: '',
			change: '', //找零
			i: false,
			clientid: ''

			// isshowloading: true,
		};
	},
	onLoad(opdata) {
		// this.demoimgs()
		// this.i=false;
		// 获取当前时间
		// var timestamp = Date.parse(new Date());
		// this.$yicode.timestampToTime(timestamp)
		// console.log(timestamp,this.$yicode.timestampToTime(timestamp));
		
		// 显示欢迎回来~
		setTimeout(() => {
			this.$refs.Welcome.show();
		}, 2000)
		
		this.clientid=uni.getStorageSync('clientid');
		console.log(opdata);
		
		
		this.shop_id = opdata.shop_id;
		this.getIndexData();
		this.cleanCartfun(); //清空购物车
		this.changeCart();
	},

	onShow() {
		console.log(this.cart_list);
		//引用插件
		var longyoungKeyEventListen = uni.requireNativePlugin('longyoung-KeyEventListen');

		let that = this;
		//设置监听，可设置多个，回调按 tag 区分哪个监听返回。
		longyoungKeyEventListen.setOnKeyEventListenerLy(
			{
				tag: that.tag //不必理会，固定 1 就好
			},
			result => {
				console.log('监听成功');

				if (result && result.return_code == 'SUCCESS') {
					if (result.return_type == 'dataBack') {
						//return_type=dataBack是返回数据标识，返回的数据在此获取
						that.handleData(result);
					}
				}
			}
		);

		this.getEleOrderFun();

		// this.addEleOrder();

		// setTimeout(() => {
		// 	console.info('进来');
		// 	this.showtip = true; //第一次进来 提示
		// 	// this.poptype = 1;
		// }, 1000);

		// this.goods_product_list();
		// this.storeIndexfun();

		// uni.getSystemInfo({
		// 	success: res => {
		// 		this.phoneHeight = res.windowHeight; //手机高度
		// 		this.listheight = this.phoneHeight - 75;
		// 	}
		// });

		// this.getIndexData();
		// this.findEleProduct();
		// this.orderselte();

		this.changeCart();

		// this.changeCart();
		// this.addEleOrder();
	},

	computed: {
		//静态资源地址
		staticUrl() {
			return this.$store.state.staticUrl;
		},
		userInfo() {
			//个人信息
			return this.$store.state.userInfo;
		}
	},

	onHide() {},
	onReady() {
		this.getIndexData();
		// this.$api.msg('登入成功，欢迎使用');
	},
	// 2222222
	methods: {
		//输入金额
		bindSkeywords(e) {
			this.value = e.detail.value;
			this.change = parseFloat(this.value - this.cart_total.total).toFixed(2);
		},

		//搜索商品
		async orderselte() {
			let res = await orderselte({
				search: this.keyworld
			});
			console.log(res);

			if (res.code == 0) {
				console.log(this.goods_cate[0]);
				this.goods_cate[0].goods_list = res.data.goods_list;
				console.log(this.goods_cate.goods_list);
			}
		},

		tosearch(e) {
			console.log(e);
			this.keyworld = e.detail.value.replace(/\s*/g, '');

			console.log(e.detail.value);
			if (e.detail.value != '') {
				this.orderselte();
			} else {
				console.log('获取内容');
				// this.goods_cate="";
				this.getIndexData();
			}
		},
		//查询
		async findEleProduct() {
			// uni.showLoading({
			// 	title: '加载中...'
			// });
			console.log('查询订单', this.resultStrFinal);

			if (this.resultStrFinal != '') {
				let res = await findEleProduct({
					code: this.resultStrFinal,
					type: 'cashier'
				});


				console.log(res);
				if (res.code == 0) {
					let data = res.data;
					console.log(data, this.shop_id, this.weights, '查询订单', this.resultStrFinal);

					let params = {
						shop_id: data.shop_id,
						goods_id: data.product_id,
						cart_type: 'ele',
						is_ld: 0,
						num: 1,
						// shop_name: data.product_name,
						goods_name: data.product_name,
						price: data.price / 100,
						cost_price: data.cost_price,
						goods_picture: data.photo,
						weight: this.weights,
						code: this.resultStrFinal,
						type: 'cashier',
						clientid:this.clientid
						

						// key: e.target.dataset.sku_id
					};

					cartOperate(params).then(res => {
						uni.hideLoading(); //结束加载
						console.log(res, res.code);
						if (res.code == 0) {
							console.log(res, '进改变了');
							this.weights = '';
							this.$api.msg(res.msg);
							let prices = parseFloat(data.price / 100);
							// let _price = this.noetabactive == 1 ? data.rechargeprice : data.price;
							// this.changeCart(_price, data.id, data.type);
							console.log(prices, data.product_id);
							this.changeCart(prices, data.product_id, 'add');
							uni.removeStorageSync('local_storge_key');
						} else {
							uni.removeStorageSync('local_storge_key');
							this.weights = '';
							this.$api.msg(res.msg);
						}
					});
				} else {
					console.log('不足')
					this.$api.msg(res.msg);
				}
			} else {
				return false;
			}

			// this.changeCart(5,71444,"add");
			// uni.removeStorageSync('local_storge_key');
			// } else {
			// 	uni.removeStorageSync('local_storge_key');
			// }
		},
		handleData(result) {
			let that = this;
			if (result.return_type == 'dataBack') {
				if (result.action == 'ACTION_UP') {
					//只取弹起事件
					let keyCode = result.keyCode;

					if (keyCode == 'KEYCODE_ENTER') {
						//扫码结束

						// that.resultStrFinal = allKeyCodeTemp; //最终拼接的字符串赋值
						// console.log(that.resultStrFinal,allKeyCodeTemp);

						// that.resultStrFinal = allKeyCodeTemp;
						// let regex = /^[0]+/;
						// let weight = (allKeyCodeTemp.substr(12, 5).replace(regex, '') / 1000).toFixed(3);
						// that.weights=weight;
						// console.info(weight);

						// that.findEleProduct();
						// console.log(that.resultStrFinal, '拼接的字符串', that.h);
						// allKeyCodeTemp = '';
						// preKeyCode = '';

						if (allKeyCodeTemp.length == 13) {
							that.weights = ''; //清空18码记录

							// that.resultStrFinal =right(allKeyCodeTemp,18);
							that.resultStrFinal = allKeyCodeTemp;

							console.info('1111111111111111111', that.resultStrFinal);

							that.findEleProduct();
							console.log(that.resultStrFinal, '拼接的字符串', allKeyCodeTemp);
						} else if (allKeyCodeTemp.length != 13) {
							// allKeyCodeTemp.substr((allKeyCodeTemp.length)-18)!=that.resultStrFinal &&
							console.info('2222222222222222222222');

							that.resultStrFinal = allKeyCodeTemp.substr(allKeyCodeTemp.length - 18);

							// that.resultStrFinal =right(allKeyCodeTemp,18);
							let regex = /^[0]+/;
							let weight = (that.resultStrFinal.substr(12, 5).replace(regex, '') / 1000).toFixed(3);
							that.weights = weight;

							that.findEleProduct();
							console.log(that.resultStrFinal, '拼接的字符重量', that.weights, 'zeze', allKeyCodeTemp);
						} else if (allKeyCodeTemp == that.resultStrFinal) {
							console.info('33333333333333333');
							return false;
							console.info('444444444444444444');
						} else {
						}

						allKeyCodeTemp = '';
						preKeyCode = '';
					} else if (keyCode == 'KEYCODE_SHIFT_LEFT' || keyCode == 'KEYCODE_SHIFT_RIGHT') {
						//转换键
						preKeyCode = 'KEYCODE_SHIFT_RIGHT';
					} else {
						if (preKeyCode == 'KEYCODE_SHIFT_RIGHT') {
							//转换键，拿大写
							if (keyCode && KEY_MAP[keyCode]) {
								allKeyCodeTemp += KEY_MAP[keyCode].shiftChar;
							}
						} else {
							if (keyCode && KEY_MAP[keyCode]) {
								allKeyCodeTemp += KEY_MAP[keyCode].normalChar;
							}
						}
						preKeyCode = '';
					}
				}
			}
		},

		//获取订单内容
		async getEleOrderFun() {
			// uni.showLoading({
			// 	title: '加载中...'
			// });

			let res = await getEleOrder({
				order_id: this.order_id,
				delivery_type: 0,
				type: 'cashier'
			});
			if (res.code == 0) {
				this.details_list = res.projects;
			}
		},

		demoimgs() {
			console.log('二维码呀', this.userInfo, '啊', this.userInfo.face);
			let that = this;
			qrcode = new QRCode({
				context: that, // 上下文环境
				canvasId: 'tki-qrcode-canvas', // canvas-id
				usingComponents: true, //that.usingComponents, // 是否是自定义组件
				showLoading: false, //that.showLoading, // 是否显示loading
				loadingText: '', //that.loadingText, // loading文字
				text: `https://luma.jxdsy.cn/qrcode?type=7&timestamp=1579072961&shareid=${this.userInfo.user_id}&order_id=${this.order_id}`, // 生成内容
				size: 140, // 二维码大小
				background: '#ffffff', // 背景色
				foreground: '#000000', // 前景色
				pdground: '#000000', // 定位角点颜色
				correctLevel: 3, // 容错级别
				image: this.userInfo.face, //that.icon, // 二维码图标
				imageSize: 30, //that.iconSize,// 二维码图标大小
				cbResult: res => {
					// 生成二维码的回调
					// that._result(res)
					// this.$set(this.result, 'eat', res)

					this.i = true;
					clearInterval(iscode);
					iscode = setInterval(() => {
						console.info('订单进来', this.i);
						//获取订单是否支付成功

						if (this.i == false) {
							// this.orderfind();
							clearInterval(iscode);
						} else {
							console.info('订单订单订单订单订单订单订单订单订单订单订单订单订单订单', this.i);
							this.orderfind();
						}
					}, 3000);

					that.result = res;

					console.log(res, '生成出来的二维码呀');
				}
			});
		},

		cancel(type) {
			//关闭
			this.value = '';
			this.change = 0;
			this.showtip = false;
		},

		isclickty() {
			//弹窗的同意被点击后
			this.isAgree = true;
		},
		//支付
		showpayment() {
			//获取当前时间
			var date = new Date();
			var seperator1 = '-';
			var seperator2 = ':';
			var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
			var strDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
			var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
			// + " "  + date.getHours()
			//  + seperator2  + date.getMinutes()
			// + seperator2 + date.getSeconds();//时分秒

			this.time = currentdate;

			// var shop_list=[];
			// let code = this.cart_list.map(({}) => {(goods_id)
			// 	// shop_list.push({product_id:item.goods_id,num:item.num})
			// })
			// console.log(code,shop_list)
			// this.addEleOrder();
			if (this.block == false) {
				this.$api.msg('没有订单生成');
			} else {
				this.showtip = true;
				this.poptype = 0;
			}
		},
		//现金支付
		showcash() {
			if (this.block == false) {
				this.$api.msg('没有订单生成');
			} else {
				this.showtip = true;
				this.poptype = 3;
			}
		},

		// 订单

		// 888888888
		async addEleOrder() {
			
			console.info(this.shop_id,this.clientid, this.cart_list, '进进进进进进进进进进进进进进进进');
			
			
			if (this.cart_list.length != 0) {
				let res = await addEleOrder({
					type: 'cashier',
					data: this.cart_list,
					is_ld: 0, //普通是0 免费是1
					shop_id: this.shop_id,
					clientid:this.clientid
				});
				console.log(res, res.code, '加入成功加入成功加入成功加入成功加入成功加入成功加入成功');
				if (res.code == 0) {
					this.order_id = res.data.order_id;
					console.info(this.cart_list.length);

					// this.cashierpayEle()
					if (this.cart_list.length > 0) {
						console.log('成功成功成功成功成功成功成功成功成功成功成功成功');
						this.demoimgs();
					}
				} else {
					// 商品不足弹出
					this.$api.msg(res.msg);
					this.cleanCartfun();
				}
			} else {
			}
			console.info('res', '哈哈哈', this.order_id);
		},
		//获取订单是否支付成功
		async orderfind() {
			// uni.showLoading({
			// 	title: '加载中...'
			// });
			console.info(this.order_id);
			let res = await orderfind({
				order_id: this.order_id,
				type: 'cashier'
			});

			console.log('查询');
			if (res.code == 0) {
				// this.$api.msg('支付成功');

				this.i = false;
				this.showtip = true;
				this.poptype = 1;
				this.cleanCartfun();
			} else {
				console.log('停止');
				// clearInterval(iscode);
				// this.$api.msg(res.msg);
			}
		},

		/**
		 * 现金支付
		 * */
		async cashierpayEle() {
			if (this.value == '' || this.value == undefined) {
				this.$api.msg('请输入实收金额');
			} else {
				let res = await cleanCart({
					order_id: this.order_id,
					cash: this.value,
					type: 'cashier'
				});

				if (res.code == 0) {
					console.log('进来');
					this.showtip = false;
					this.getIndexData();
					this.$api.msg('现金支付成功');
				} else {
					this.$api.msg(res.msg);
				}
			}
		},

		cancelmoney() {
			this.cashierpayEle();
		},

		/**
		 * 清空购物车
		 * */
		async cleanCartfun() {
			console.log(this.shop_id);
			let res = await cleanCart({
				cart_type: 'ele',
				is_ld: 0, //普通是0 免费是1
				shop_id: this.shop_id,
				type: 'cashier'
			});
			console.log(res);
			if (res.code == 0) {
				this.getIndexData();
				this.block = false;
				this.i = false;
				this.$api.msg('清空成功');
				// this.i = false;//停止定时器
			} else {
				this.$api.msg(res.code);
			}
		},
		//操作购物篮 加入购物车
		cartOperate(e) {
			console.info(e);
			uni.showLoading({
				title: '加载中...'
			});

			var that = this;
			var id = e.currentTarget.dataset.id;
			var num = e.currentTarget.dataset.num;
			var goods_name = e.currentTarget.dataset.name;
			var price = e.currentTarget.dataset.price;
			var cost_price = e.currentTarget.dataset.cost_price;
			var type = e.currentTarget.dataset.type;
			var img = e.currentTarget.dataset.img;
			var shop_name = e.currentTarget.dataset.shop_name;
			var rechargeprice = e.currentTarget.dataset.rechargeprice;
			var n = e.currentTarget.dataset.num;

			let local_storge_key = uni.getStorageSync('token') + this.shop_id + id + 'ele:' + 0;
			let local_storge = wx.getStorageSync(local_storge_key);
			console.log(local_storge, local_storge_key);

			var data = {
				id: e.currentTarget.dataset.id,
				goods_name: e.currentTarget.dataset.name,
				price: e.currentTarget.dataset.price,
				cost_price: e.currentTarget.dataset.cost_price,
				type: e.currentTarget.dataset.type,
				img: e.currentTarget.dataset.img,
				shop_name: e.currentTarget.dataset.shop_name,
				rechargeprice: e.currentTarget.dataset.rechargeprice,
				local_storge_key: local_storge_key,
				local_storge: local_storge
			};
			console.log(num, data.type, that.isnum);
			let params = {
				shop_id: this.shop_id,
				goods_id: data.id,
				cart_type: 'ele',
				is_ld: this.noetabactive,
				num: data.type == 'add' ? 1 : data.type == 'reduce' ? -1 : -num,
				shop_name: data.shop_name,
				goods_name: data.goods_name,
				price: parseFloat(data.price),
				cost_price: data.cost_price,
				goods_picture: data.img,
				key: e.target.dataset.sku_id,
				type: 'cashier',
				clientid:this.clientid
			};
			cartOperate(params).then(res => {
				console.log('改变了');
				uni.hideLoading(); //结束加载

	             this.$api.msg(res);

				if (res.code == 0) {
					console.log('改变了改变了改变了改变了');
					let _price = this.noetabactive == 1 ? data.rechargeprice : data.price;
					this.changeCart(_price, data.id, data.type);
					uni.removeStorageSync(data.local_storge_key);
				} else {
					uni.removeStorageSync(data.local_storge_key);
					
						console.log('不足啊');
					this.$api.msg(res.msg);
				}
			});
		},

		//修改购物车
		changeCart(price, id, type) {
			console.log(price, id, type);
			var that = this;
			let count = type == 'add' ? parseFloat(that.cart_total.count) + 1 : parseFloat(that.cart_total.count) - 1;

			console.log(that.cart_total.total, '结算', price);
			let total = type == 'add' ? parseFloat(parseFloat(that.cart_total.total) + parseFloat(price)) : parseFloat(parseFloat(that.cart_total.total) - parseFloat(price));
			//total = that.toFixed2(total);
			this.cart_total = { count: count, total: total };
			this.quantity = count;
			console.log(this.cart_total);
			var goods_cate = this.goods_cate;

			goods_cate.length > 0 &&
				goods_cate.forEach((item1, index1) => {
					item1.goods_list.length > 0 &&
						item1.goods_list.forEach((item2, index2) => {
							if (item2.id == id) {
								if (type == 'add') {
									goods_cate[index1].goods_list[index2].num++;
								} else {
									goods_cate[index1].goods_list[index2].num--;
								}
							}
						});
				});

			getCartGoods({ shop_id: that.shop_id, cart_type: 'ele', is_ld: that.noetabactive, type: 'cashier',clientid:that.clientid }).then(res => {
				console.log(res);
				if (res.code == 0) {
					var count = 0;
					var total_price = 0;
					for (var i = 0; i < res.data.list.length; i++) {
						var price = parseFloat(parseFloat(res.data.list[i].price) * parseFloat(res.data.list[i].num).toFixed(2));

						total_price = price + parseFloat(total_price.toFixed(2));

						count += Number(res.data.list[i].num);
					}
					console.log(res.data.list);
					this.cart_total = { count: count, total: parseFloat(total_price) };

					this.cart_list = res.data.list; //购物车列表

					console.log(this.cart_list);
					// this.$set(this.cart_list,[],res.data.list);

					this.addEleOrder();

					if (res.data.list.length == 0) {
						this.block = false;
					} else {
						this.block = true;
					}
				}
			});
		},

		changetowtab(ind) {
			console.log(ind);
			//分类
			this.towtabactive = ind;
		},

		// 产品信息
		async getIndexData() {
			let res = await getIndexData({
				shop_id: this.shop_id, //商家id
				keyword: this.keyword, //搜索关键字
				is_ld: this.noetabactive, //1：联动 免费  0：非联动 普通购买
				distance: '',
				type: 'cashier',
				lat: this.latitude,
				lng: this.longitude //传经纬度
			});
			console.log(res);
			this.isshowloading = false; //显示页面 展示页面 关闭loading
			this.shop_info = res.data.shop_info; ///商家信息
			this.goods_cate = res.data.goods_cate; //商品分类信息
			this.cart_list = res.data.cart_list; //购物篮数据
			this.cart_total = res.data.cart_total; ///购物篮统计数据
			// this.csacive = res.data.shop_info.is_focus;
			this.run_status = res.data.run_status; //是否开通鹿马配送
			this.ysf_number = res.data.ysf_number; //是否开通云闪付
		},

		//获取产品列表
		// async goods_product_list() {
		// 	// uni.showLoading({
		// 	// 	title: '加载中...'
		// 	// });
		// 	// this.page++;
		// 	let res = await eleProductList({
		// 		closed: 0, //上下架状态（0上架，1下架）
		// 		page: this.page,
		// 		type: 'cashier'
		// 	});

		// 	console.log(res);
		// 	// uni.hideLoading();  // ...this.goods_list,//结束加载
		// 	if (res.code == 0) {
		// 		if (res.data != null && res.data.length != 0) {
		// 			let data = res.data;
		// 			data = data.map((item, index) => {
		// 				item.checked = false;
		// 				return item;
		// 			});
		// 			this.goods_list = [...data];
		// 		} else {
		// 			this.$api.msg('没有更多了~');
		// 			this.isallshow = true;
		// 		}
		// 	} else {
		// 		this.$api.msg(res.msg);
		// 	}
		// },
		// login(){
		// 	uni.redirectTo({
		// 	  url:'/pages/login/login'
		// 	})
		// },
		changes(e) {
			console.log(e);
			this.btnnum = e;
			if (e == 1) {
				// this.addTurntableActivity();
			} else {
				this.$api.msg('开发中~');
				// this.getShopLuckDrawList();
			}
		}
	}
};
</script>

<style lang="scss">
@import './index.scss';
.category_item.active {
	color: #666;
	box-sizing: border-box;
	font-size: 10upx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #ffffff;
	background: rgb(246, 78, 54);
}
</style>
