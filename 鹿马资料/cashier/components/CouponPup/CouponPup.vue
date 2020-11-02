<template>
	<!-- 优惠券领取弹窗 -->
	<view class=" CouponPup">
		<!-- CouponPup -->
		<uni-popup :show="showtip" type="center" :mask-click="false" @change="change">
			<view v-if="type==2" class="CouponPupboxs" :style="{backgroundImage: 'url('+uploadurl+'static/applet5/images/dibu@2x.png'+')'}">
				<view class="titlessp">恭喜您获得</view>
				<view class="priceboxs"><text class="shuzi">{{total_money}}</text><text class="wenzi">元红包券</text></view>
				<scroll-view :scroll-y="true" class="couplists" style="height: 240px;">
					<!-- 单个优惠券 -->
					<!-- :style="{backgroundImage: 'url('+uploadurl+'static/applet5/images/quan@2x.png'+')'}" -->
					<view v-for="(item,index) in coupon" :key="index" class="coupitembox flex ali-c" >
						<view class="coupitemboxleft">
							<view class="bany"></view>
							<view class="banys"></view>
							<view class="pricessbox"><text class="fuhao">￥</text><text class="shuzi">{{item.money}}</text></view>
							<text class="isusers">满{{item.at_least}}元使用</text>
						</view>
						<view class="coupitemboxright">
							<view class="storenames oneline">{{item.coupon_name?item.coupon_name:"下单红包券"}}</view>
							<view class="usermaxdate">有效期至 {{item.end_times}}</view>
						</view>
					</view>
				</scroll-view>
				
				<!-- 点击领取 -->
				<view class="buttonbtn" @tap="tolingqu">
					点击领取
				</view>
				
				<!-- 关闭按钮 -->
				<view class="Closeboxs" @tap="quxlingqu">
					<image class="imgs" :src="uploadurl+'static/applet5/images/guanbi@2x.png'" mode=""></image>
				</view>
			</view>
			
			<!-- 外卖的 {backgroundImage: 'url('+uploadurl+'static/applet5/images/dibu@2x.png'+')'}
			style="background-image: url(../../static/bgimage.png);background-repeat:no-repeat;background-size:contain ;"
			-->
			<view class="towmodelo" v-if="type==1" style="margin-top: -180upx;">
				<!-- 优惠券外框 -->
				<view class="couplists" style="height: 292upx;">
					<image src="../../static/bgimage.png" mode="" style="display:inline ;"></image>
					<!-- <text style="font:64upx 优设标题黑;">你下单我送券</text> -->
				</view>
				<view class="" style="background-color: #f44336;padding: 20upx;	border-bottom-right-radius: 20upx;border-bottom-left-radius: 20upx;">
					<view class="couplists couplistsnwo" v-for="(item,index) in coupon" >
						<view class="" style="width: 100%;height: 140upx;margin-bottom: 10upx;" >
							<image src="../../static/itemimage.png" mode="scaleToFill" style="display: inline;"></image>
							   
							<view  style="position:absolute;height: 140upx;width:94%;margin-top:-140upx;display: flex;align-items: center;justify-content: space-around;">	
								<view class="" style="height: 120upx;width:120upx;">
									<image :src="'https://luma.jxdsy.cn/attachs/'+item.logo" mode="scaleToFill" style="display: inline;"></image>
								</view>	
								<view class="" style="width: 45%;height: 120upx;">
									<view class=" oneline" style="text-align: left;color: #FD233C;font-weight: bold;font-size: 26upx;height: 38upx;">
										{{item.coupon_name?item.coupon_name:"下单红包券"}}
									</view>
									<view class="" style="text-align: left;height: 38upx;margin-top: 0px;">
										<view style="border: 1px solid #E3AA5B;color:#E3AA5B;font-size: 20upx;width: 100upx;text-align: center;">
											{{item.range_type==0?'产品红包':'店铺红包'}}
											</view>
									</view>
									<view class="" style="text-align: left;color: #FD233C;height: 38upx;display: flex;align-items:  baseline;">
										 <view style="font-size: 25upx;"> 满 </view>
										 <view class="" style="font-size: 30upx;">
											{{item.at_least}}
										 </view>
										 <view style="font-size: 25upx;"> 减 </view>
										 <view class="" style="font-size: 30upx;">
											{{item.money}}
										 </view>
									</view>
								</view>
								<view class="" style="width:20%;color:#D21A38;font-size: 34upx;" @tap="tolingqu(item,index)">
									
									<view class="" v-if="item.hu==1">
										<view class="">
											点击
										</view>
										<view class="">
											领券
										</view>
									</view>
									<!-- 已领券 -->
									<view class="" v-if="item.hu==2">
										已领取
									</view>
								</view>
							</view>
							<!-- <view  style="position:absolute;height: 120upx;width:120upx;margin-top:-140upx ">
								<image :src="'https://luma.jxdsy.cn/attachs/'+item.logo" mode="scaleToFill" style="display: inline;"></image>		
							</view> -->
						</view>	
						
					</view>
					
					<view style="text-align: center;font-size: 30upx;margin-top: 20upx;">
						
						<text style="color: #FFFFFF;">领取的优惠券请前往卡券包进行使用</text>
					</view>
				</view>
				<!-- <view class="tcbjimgbox" >
					<view class="biaoyu">恭喜您</view>
					<view class="youhuiqtxtsf">获得{{total_money}}元优惠券</view>
				</view> -->
				<!-- <view class="tcbjbox"> -->
					<!-- 优惠券列表 -->
					<!-- view  class="couplists couplistsnwo"> -->
						
						<!-- 单个优惠券 -->
						<!-- :style="{backgroundImage: 'url('+uploadurl+'static/applet5/images/quan@2x.png'+')'}" -->
						<!-- <view v-for="(item,index) in coupon" :key="index" class="coupitembox flex ali-c" > -->
						<!-- <view v-for="(item,index) in coupon" :key="index" class="coupitembox flex ali-c" >
							<view class="" style="width: 100%;height: 140upx;" >
								<image src="../../static/itemimage.png" mode="scaleToFill" style="display: inline;"></image>
							</view> -->
							<!-- <view class="coupitemboxleft">
								<view class="bany"></view>
								<view class="banys"></view>
								<view class="pricessbox"><text class="fuhao">￥</text><text class="shuzi">{{item.money}}</text></view>
								<text class="isusers">满{{item.at_least}}元使用</text>
							</view> -->
					<!-- 		<view class="coupitemboxleft" style="position: absolute;">
								<image :src="'https://luma.jxdsy.cn/attachs/'+item.logo" mode="scaleToFill" style="display: inline;"></image>
							</view>
							<view class="coupitemboxright" style="position: absolute;left: 180upx;">
								<view class="storenames oneline" >{{item.coupon_name?item.coupon_name:"下单红包券"}}</view>
								<view class="" style="color: #FF0000;"> 满{{item.at_least}}减{{item.money}}</view>
								<view class="usermaxdate">有效期至 {{item.end_times}}</view>
							</view>
							<view class="coupitemboxleft" style="position: absolute; left: 428upx;width: 120upx;height: 120upx;padding: 18upx 0 0 0;" @tap="tolingqu(item,index)">
								<view style="color: #FF0000;" >
									{{coupons_tips[index]}}
								</view>
							</view>
						</view>
					</view>
				</view> -->
				<!-- <view class="tc_anniu" @tap="tolingqu" :style="{backgroundImage: 'url('+uploadurl+'static/applet5/images/uts/dibu_icon.png'+')'}">
					<view class="lingqubtns">点击领取</view>
					<view class="lingqups">领取后的优惠券将自动存放到我的卡券包中</view>
				</view> -->
				
				
				<!-- 关闭按钮 -->
				<!-- <view class="Closeboxs twoCloseboxs" @tap="quxlingqu">
					<image class="imgs" :src="uploadurl+'static/applet5/images/guanbi@2x.png'" mode=""></image>
				</view> -->
				
				
				<view class="Closeboxs twoCloseboxs" @tap="quxlingqu">
					<image class="imgs" src="../../static/exit.png" mode=""></image>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/appcomponents/uni-popup/uni-popup.vue'
	import {add_uCoupon,clear_cache} from "@/utils/api/order.js";//领取优惠券的方法
	// import {get_tap_and_pay} from "@/utils/api/shop.js"
	export default{
		// :log_id="log_id" :logs="logs"  :coupon="coupon" :total_money="total_money"
		
		// type 1 外卖 是  2是 商城
		props:["log_id","logs","coupon","total_money","type"],
		name:"CouponPup",
		components:{
			uniPopup,
		},
		data(){
			return{
				showtip:false,
				toapi:100,
				coupons_tips:['点击领券','点击领券','点击领券','点击领券','点击领券']
			}
		},
		watch:{
			
		},
		computed: {
			staticUrl () {//静态资源地址
				return this.$store.state.staticUrl;
			},
			//地址 路径 后面要改的哦
			uploadurl(){
				return this.$store.state.uploadurl;
			}
			
		},
		methods:{
			
			cancel(type) {//关闭
				this.showtip = false;
			},
			//提示弹窗
			change(e) {
				if (!e.show) {
					this.showtip = false
				}
			},
			show(){
				this.showtip = true;
			},
			//领取事件 点击确定领取
			tolingqu(item,index){
				 let coupon =  this.$props.coupon;
				this.$props.coupon.map((tm,dx)=>{
				  if(index==dx){
				    item.hu=2;
				  }else{
				    this.$props.coupon=coupon;
				  }
				})
				if(this.toapi != index){
					this.toapi =index
					add_uCoupon({
						shop_id:item.shop_id,
						coupons_type_id:item.id
					}).then(res=>{
					  if(res.code == 0){
						this.$api.msg(res.msg);
						// this.showtip = false	
					  }
					})
				}else{
					this.$api.msg('已领取过该优惠券');	
				}
				
			},
			
			
			
			//取消领取
			quxlingqu(){
				clear_cache({}).then(res=>{})
				this.showtip = false;
			}
		}
	}
</script>

<style lang="scss">
	.CouponPupboxs{
		width: 610upx;
		height: 764upx;
		background: #fff;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 12px;
		position: relative;
		padding: 30upx 25upx;
		.titlessp{
			color: rgba(255,255,255,1);
			font-size: 36upx;
			font-weight: bold;
			text-align: center;
		}
		.priceboxs{
			text-align: center;
			color:#FFFFFF;
			font-weight: bold;
			.shuzi{
				font-size: 36px;
			}
			.wenzi{
				font-size: 24px;
			}
		}
		
		.buttonbtn{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 610upx;
			height: 100upx;
			background: linear-gradient(180deg,rgba(253,86,96,1),rgba(246,34,122,1));
			box-shadow: 0px -2upx 6upx 0px rgba(248, 111, 63, 0.35);
			border-radius: 50%;
			font-size: 34upx;
			line-height: 100upx;
			font-weight: bold;
			color: #FFFFFF;
			text-align: center;
			
		}
		
	}
	
	.Closeboxs{
		position: absolute;
		bottom: -60px;
		left: 50%;
		margin-left: -15px;
		.imgs{
			width: 60upx;
			height: 60upx;
		}
	}
	.twoCloseboxs{
		bottom: -110upx;
	}
	//优惠券列表
	.couplists{
		margin-top: 10upx;
		text-align: center;
		
		.coupitembox{
			margin: 0 auto;
			margin-bottom: 20upx;
			width: 530upx;
			height: 140upx;
			// background-size: cover;
			// background-repeat: no-repeat;
			background: #FFFFFF;
			.coupitemboxleft{
				// border-right: 1px solid #DCDCDC;
				margin: 0 0 0 10px;
				width: 120upx;
				height: 120upx;
				// padding: 25upx 0;
				position: relative;
				.bany {
					position: absolute;
					right: -10upx;
					bottom: 0;
					width: 20upx;
					height: 10upx;
					background-color: rgba(255,39,52,1);
					border-radius: 20upx 20upx 0 0;
				}
				.banys {
				position: absolute;
				right: -10upx;
				top: 0;
				width: 20upx;
				height: 10upx;
				background-color: rgba(255,39,52,1);
				border-radius: 0 0 20upx 20upx;
				
				}

				.pricessbox{
					// display: flex;
					// justify-content: space-between;
					// align-items: center;
					.fuhao{
						font-size: 30upx;
						font-weight: 800;
						color: rgba(225,0,63,1);
					}
					.shuzi{
						font-size: 50upx;
						font-weight: 800;
						color: rgba(225,0,63,1);
					}
				}
				.isusers{
					font-size: 20upx;
					font-weight: 500;
					color: rgba(153,153,153,1);
				}
			}
			.coupitemboxright{
				width: 282upx;
				height: 160upx;
				// padding-left: 20upx;
				text-align: left;
				// padding-top: 32upx;
				padding: 20rpx;
				.storenames{
					font-size: 30upx;
					font-weight: bold;
					color: rgba(51,51,51,1);
				}
				.usermaxdate{
					font-size: 20upx;
					font-weight: 500;
					color: rgba(153,153,153,1);
					margin-top: 10upx;
	
				}
			}
		}
	}
	.couplistsnwo{
		// margin-top: 0;
	}
	
	//外卖的
	.tcbjbox{
		padding-bottom: 12upx;
	}
	.towmodelo{
		width: 600upx;
		// height: 1000upx;
		// background-image: url(../../static/bgimage.png);
		// background-color:#f44336;
		// background-repeat:no-repeat;
		background-size:100%;
		// padding: 40upx 20upx 40upx 20upx;
		border-bottom-right-radius: 20upx;
		border-bottom-left-radius: 20upx;
		// position: relative;
		.tcbjimgbox{
			// width: 340px;
			// height: 221px;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			padding-top: 20upx;
			.biaoyu,.youhuiqtxtsf{
				color:#F5C183;
				font-weight: bold;
				font-size: 50upx;
				text-align: center;
			}
			.youhuiqtxtsf{
				
			}
		}
		.tcbjbox{
			width: 580upx;
			// max-height: 320upx;
			// background: rgba(255,39,52,1);
			
			background-image: url(../../static/bgimage.png);
			background-repeat:no-repeat;
			background-size:100%;
			padding: 310upx 20upx 20upx 30upx;
			box-sizing: border-box;
			// overflow-y: auto;
			border-radius: 20upx;
			margin: 0 auto;

		}
		.tc_anniu {
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			width: 100%;
			margin: 0 auto;
			text-align: center;
			.lingqubtns{
				font-size:48upx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(245,193,131,1);
				background:linear-gradient(180deg,rgba(248,252,182,1) 0%, rgba(255,234,184,1) 100%);
				-webkit-background-clip:text;
				-webkit-text-fill-color:transparent;
			}
			.lingqups{
				margin-top: 20upx;
				font-size:30upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(245,193,131,1);
			}
		}
	}
</style>
