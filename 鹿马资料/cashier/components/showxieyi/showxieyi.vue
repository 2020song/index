<template>
	<!-- 提示免费专区的弹窗 -->
	<view class="showmodel">
		<!-- 免费专区说明弹窗 -->
		<uni-popup :show="showtip" type="center" :mask-click="false" @change="change">
			<view class="uni-tip">
				<text class="uni-tip-title">用户协议和隐私政策</text>
				<view class="uni-tip-content flex ali-c">请您务必审慎阅读、充分理解"用户协议"和"隐私政策"各条款,包括但不限于为您提供软件内容的服务,我们需要收集您的设备信息、操作日志等个人信息您可以在设置中查看个人信息并修改你的信息您可阅读<navigator class="xieyitags" url="/pages/Agreement/Agreementuser">《用户协议》</navigator>和<navigator class="xieyitags" url="/pages/Agreement/Agreement"> 《隐私政策》</navigator>了解详细信息。如您同意，请点击"同意"开始接受我们的服务</view>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" @click="cancel('tip')">暂不使用</text>
					<text class="uni-tip-button" @click="tongyi('tip')">同意</text>
				</view>
			</view>

		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default{
		props:["title","content"],
		name:"showxieyi",
		components:{
			uniPopup,
		},
		data(){
			return{
				showtip:false,
			}
		},
		methods:{
			cancel(type) {//关闭
				this.showtip = false;
			},
			//点击了同意
			tongyi(){
				this.showtip = false;
				
				this.$emit('isclickty',{text:"同意呀"});
				
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
		}
	}
</script>

<style lang="scss">
	.xieyitags{
		color:#1890FF;
		display: inline-block !important;
	}
	
	.uni-tip-content{
		text-align: left !important;
		display: inline-block !important;
	}
	
	
	/* 提示窗口 */
	.uni-tip {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		//width:579upx;
		width: 580upx;
		
		background-color: #fff;
		border-radius: 10px;
	}
	
	.uni-tip-title {
		text-align: center;
		//font-weight: bold;
		//font-size: 16px;
		//color: #333;
		margin-bottom: 40upx;
		font-size:32upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(0,0,0,1);
	}
	
	.uni-tip-content {
		// padding: 15px;
		font-size: 14px;
		color: #666;
	}
	
	.uni-tip-group-button {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		margin-top: 20px;
	}
	
	.uni-tip-button {
		flex: 1;
		text-align: center;
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: bold;
		color: #3b4144;
		
		border-top:3upx solid rgba(229,229,229,1);
		height: 60upx;
		line-height: 80upx;
	}
		
	//弹窗样式end
</style>
