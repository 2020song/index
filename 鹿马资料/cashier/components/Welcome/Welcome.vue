<template>
	<!-- 欢迎回来页面 -->
	<!--  -->
	<view class="prizemodel sz">
		<!--  -->
		<uni-popup :show="showtip" type="center" :mask-click="true" @change="change">
			
			<view class="tipboxs" @tap="cancel">
				<view class="heads">
					<!-- 顶部背景图 -->
					<image class="headimg" src="/static/news/helloword.png " mode="widthFix"></image>
					
					<view class="centerBox">
						<image class="isusertx" :src="staticurl+userInfo.logo" mode=""></image>
						 <view class="shopnames">{{userInfo.shop_name}}</view>
						 <view class="shopnames2">恭喜发财 财源广进</view>
						 
						 <image src="../../static/news/yanhua.png" mode="widthFix" style="width:38upx;position: absolute;bottom: 0;left: -60upx;height: 33upx;"></image>
						 <image src="../../static/news/yanhua.png" style="width: 31upx;position: absolute;right:-60upx;top:110upx;height:28upx;"></image>
					</view>
				</view>
				<image class="Closeicon" src="/static/news/Closeico21.png" mode=""></image>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default{
		//props:["title","content"],
		props:{
			//开奖人数
			shuliang:{
				type:String,
				default:"0",
			}
		},
		name:"Welcome",
		components:{
			uniPopup,
		},
		data(){
			return{
				showtip:false,
				
			}
		},
		//计算属性
		computed:{
			userInfo(){
				return this.$store.state.userInfo;
			},
			staticurl(){
				return this.$store.state.staticUrl;
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
			//确认发布点击
			confirm(){
				this.showtip = false;
				this.$emit("fromSubmitfun",{});//触发回调方法
			}
		}
	}
</script>

<style lang="scss">
	$wid:230upx;
	$hei:270upx;
	.prizemodel{
		// width: $wid;
		// height: $hei;
	}
	.tipboxs{
		width: $wid;
		height: $hei;
		background: #fff;
		border-radius: 10upx;
		position: relative;
		.Closeicon{
			width: 27upx;
			height: 27upx;
			position: absolute;
			left: 50%;
			margin-left: -13upx;
			bottom: -42upx;
		}
		.heads{
			position: relative;
			height: 100%;
			.centerBox{
				width: 160upx;height: 110upx;background: #fff;position:absolute;bottom: 0;left: 50%;margin-left: -80upx;border-radius: 10upx;
				.isusertx{
					position: absolute;
					width: 80upx;
					height: 80upx;
					top: -40upx;
					left: 25%;
					// margin-left: -400upx;
					z-index: 99;
					border-radius: 50%;
				}
				
				.shopnames{
					width: 100%;
					// font-size: 42upx;
					font-weight: bold;
					color:#FB642F;
					position: absolute;
					top: 46upx;
					text-align: center;
					z-index: 99;
				}
				.shopnames2{
					width: 100%;
					// font-size: 32upx;
					color:#FB642F;
					position: absolute;
					top: 70upx;
					text-align: center;
					z-index: 99;
				}
			}
			.headimg{
				width: $wid;
				
			}
		
		}
		.tipboxs_body{
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			border-bottom-right-radius: 7px;
			border-bottom-left-radius: 7px;
			margin-top: -20upx;
			padding: 20upx;
			padding-top: 30upx;
			background: #ffffff;
			text-align: center;
			.textmsgs{
				color:#333C4C;
				font-size: 32upx;
				.sum{
					color:#ff6900;
				}
			}
			.submitbtns{
				font-size: 10upx;
				width:120upx;
				height:27upx;
				line-height: 27upx;
				text-align: center;
				background:rgba(255,105,0,1);
				border-radius:10upx;
				color:#FFFFFF;
				margin: 0 auto;
				margin-top: 23upx;
				margin-bottom: 10upx;
			}
		}
	}
</style>
