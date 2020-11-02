<template>
	<view class="tagglestore">
		<view class="storelist">
			<view v-for="(item,index) in storelsit" :key="index" class="store_items flex ali-c" @tap="totaggle(index)">
				<image class="usertxs" :src="staticUrl+item.logo" mode=""></image>
				<view class="s_titles flex1">
					<view class="names mb-15">{{item.shop_name}}</view>
					<view class="info towline">{{item.addr}}</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				istologin:0,
				storelsit:[],
			};
		},
		computed: {
			staticUrl () {//静态资源地址
				return this.$store.state.staticUrl;
			},
			staticUrl1(){
				return this.$store.state.staticUrl1;
			},
			uploadurl(){
				return this.$store.state.uploadurl;
			},
			joinurl(){
				return this.$store.state.joinurl;
			}
		},
		onLoad(opdata) {
			this.istologin = opdata.istologin;
			this.storelsit = uni.getStorageSync("storelsit");
			
			console.log(this.storelsit);
		},
		methods:{
			totaggle(index){
				this.$api.msg("选择成功");
				if(this.istologin==1){
					//登录的时候选的
					this.$store.commit('changeuserInfo', this.storelsit[index]);
					uni.setStorageSync('userInfo', this.storelsit[index]);
					uni.redirectTo({
						url:'/pages/index/index?shop_id='+this.storelsit[index].shop_id
					});
					
				}else{
					console.log('进来')
					this.$store.commit('changeuserInfo', this.storelsit[index]);
					uni.setStorageSync('userInfo', this.storelsit[index]);
					setTimeout(()=>{
						
						uni.redirectTo({
							url:'/pages/index/index?shop_id='+this.storelsit[index].shop_id
						});
						// uni.navigateBack({
							
						// })
					},1000)
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.mb-15{
		margin-bottom: 15rpx;
	}
	.tagglestore{
		min-height: 100vh;
		padding: 0 24upx;
		.storelist{
			.store_items{
				padding: 1upx 50upx;border-radius: 10upx;
				background-color: #fff;margin-bottom: 20upx;
				.usertxs{
					width: 100upx;
					height: 100upx;
					border-radius: 50%;
					margin-right: 20upx;
				}
				.s_titles{
					.names{
						color:000000;
						font-size: 30upx;font-weight: 600;
					}
					.info{
						color:#8F8F94;
						font-size: 26upx;
					}
				}
			}
		}
	}
</style>
