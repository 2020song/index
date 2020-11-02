<template>
	<!-- 提示免费专区的弹窗 -->
	<view class="showmodel">
		<!-- 免费专区说明弹窗 -->
		<uni-popup :show="showtip" type="center" :mask-click="false" @change="change">
			<view class="uni-tip sz">
				<image style="width: 200upx;height: 280upx;" src="../../static/news/receiving.png" mode=""></image>
				<view style="position: absolute;width: 200upx;height: 280upx;">
					<view style="width: 140upx;height:70upx;padding: 6upx;margin: auto;">
						<view>日期:2020年10月10日</view>
						<view class="flex jus-b" style="padding:  10upx 0;">
							<view >
								<view>共12件商品</view>
								<view>优惠:￥0</view>
								<view >合计:￥<text style="color: #f64f15;font-size: 12upx;font-weight: bold;">72</text></view>
							</view>
							<view><image style="width: 66px;height: 66px;" src="../../static/news/lu108logo.png" mode=""></image></view>
						</view>
					</view>
					
					<view>
						<view style="width: 140upx;height: 140upx;padding: 4upx 20upx 16upx 20upx; border: 2upx solid red; margin: auto;">
							<image class="qrcodes" :src="result" mode=""></image>
						</view>
						<view style="width: 70upx;height: 24upx;line-height:24upx;: 10upx 60upx;border: 2upx solid red; margin: auto;text-align: center;border-radius: 10upx;">
							<view @tap="cancel">取消支付</view>
							</view>
					</view>

				</view>
			</view>
		</uni-popup>
		
	
		
		
		
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';

export default {
	props: ['title', 'content'],
	name: 'showxieyi',
	components: {
		uniPopup
	},
	data() {
		return {
			showtip: false,
		};
	},
	
	methods: {
		
		cancel(type) {//关闭
			this.showtip = false;
		},
		// //点击了同意
		// tongyi(){
		// 	this.showtip = false;

		// 	this.$emit('isclickty',{text:"同意呀"});

		// },
		//提示弹窗
		change(e) {
			if (!e.show) {
				this.showtip = false;
			}
		},
		show() {
			this.showtip = true;
		}
	}
};
</script>

<style lang="scss">
.xieyitags {
	color: #1890ff;
	display: inline-block !important;
}

.uni-tip-content {
	text-align: left !important;
	display: inline-block !important;
}

/* 提示窗口 */
.uni-tip {
	/* #ifndef APP-NVUE */
	display: flex;
	flex-direction: column;
	/* #endif */
	// padding: 15px;
	//width:579upx;
	width: 200upx;
	height: 280upx;

	// background-color: #fff;
	border-radius: 10px;
}

.uni-tip-title {
	text-align: center;
	//font-weight: bold;
	//font-size: 16px;
	//color: #333;
	margin-bottom: 40upx;
	font-size: 12upx;
	font-family: PingFang SC;
	font-weight: bold;
	color: rgba(0, 0, 0, 1);
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

	border-top: 3upx solid rgba(229, 229, 229, 1);
	height: 60upx;
	line-height: 80upx;
}

//弹窗样式end
</style>
