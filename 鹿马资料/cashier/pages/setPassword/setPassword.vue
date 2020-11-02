<template>
	<!-- 修改密码  -->
	<view class="login">
		<view class="head"> </view>
		<view class="tou"><image class="img" :src="staticurl+userInfo.logo" ></image></view> 

		<view class="con" >
			<view class="con_01">
				<view class="con_01_l"><image class="usericon" src="/static/news/usericon.png" mode=""></image></view>
				<view class="con_01_r"><input v-model="mobile" class="uni-input"  placeholder="请输入手机号" style="height: 35px;background-color: #fff;" /></view>
			</view> 
			
			<view class="con_02">
				<view class="con_02_l"><image class="usericon" src="/static/news/pwdicon1.png" mode=""></image></view>
				<view class="con_02_r"><input type="password" v-model="lodPass" class="uni-input" placeholder="请输入旧密码" style="height: 35px;background-color: #fff;" /></view>
			</view>
			
			
			<view class="con_02">
				<view class="con_02_l"><image class="usericon" src="/static/news/pwdicon1.png" mode=""></image></view>
				<view class="con_02_r"><input type="password" v-model="newPass" class="uni-input" placeholder="请输入新密码" style="height: 35px;background-color: #fff;" /></view>
			</view>
			<view class="con_02">
				<view class="con_02_l"><image class="usericon" src="/static/news/pwdicon2.png" mode=""></image></view>
				<view class="con_02_r"><input type="password" v-model="verifyPass" class="uni-input" placeholder="请再次输新密码" style="height: 35px;background-color: #fff;" /></view>
			</view>


			<view class="con_04" style="margin-top: 50px;display: flex;justify-content: space-between;">
				<view class="con_04_1 con_04_2" @click="edit_psd">提交</view>
			</view> 
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni/uni-icon/uni-icon.vue"
	import {userUpdatePassword} from "@/utils/api/api.js";
	export default {
		data() {
			return { 
				stop: false,
				miao: 60,
				mobile:'',
				code:'',
				status:'0',
				psd:'',
				newPass:'',
				verifyPass:"",//确认密码
				lodPass:"",
				
				
				//账户密码登录的
				username:"18979561614",
				password:"123456",
				is_pay:false,//是否支付（默认false） (false:登录密码，true:支付密码)
			};
		},
		onLoad(opdata) {
			if(opdata.is_pay==0){
				this.is_pay = false;
				uni.setNavigationBarTitle({
					title:"修改登录密码"
				})
			}else if(opdata.is_pay==1){
				this.is_pay = true;
				uni.setNavigationBarTitle({
					title:"修改支付密码"
				})
			}
		},
		computed:{
			userInfo(){
				return this.$store.state.userInfo;
			},
			staticurl(){
				return this.$store.state.staticUrl;
			}
		},
		components: {uniIcon}, 
		methods: { 
			
			async edit_psd(){
				//修改密码
				let res = await userUpdatePassword({
					mobile:this.mobile,//电话号码
					type:"1",//类型（0忘记密码，1修改密码）
					newPass:this.newPass,//密码
					verifyPass:this.verifyPass,//确认密码
					lodPass:this.lodPass,//旧密码
					// code:this.code,//验证码
					is_pay:this.is_pay,
				});
				if(res.code==0){
					this.$api.msg("修改成功~");
					if(this.is_pay){
						//修改支付
						setTimeout(()=>{
							uni.navigateBack({
							})
						},1500)
					}else{
						//修改登录
						setTimeout(()=>{
							uni.redirectTo({
								url:"/pages/login/login"
							})
						},1500)
						
					}
					
					
				}else{
					this.$api.msg(res.msg);
				}
			},
		}
	}
</script>

<style lang="scss">
.login{
	padding-top:10vh;
	.head{font-size: 44upx;padding: 40upx;}
	.tou{text-align: center;}
	.tou .img{width: 128upx;height: 128upx;}
	.con{padding: 40upx 40upx;}
	.con_01{border-bottom: 4upx solid #F7F7F7;padding-top: 40upx;display: flex;}
	.con_01_l{width: 80upx;text-align: center;}
	.con_01_r{flex-grow: 1;padding-right: 20upx;}
	input::-webkit-input-placeholder { color: #D2D2D2;     }
	.con_03{font-size: 24upx;color: #F78674;padding: 30upx 0 66upx 16upx;display: flex;justify-content: space-between;}
	.con_04{
		text-align: center;
	}
	.con_04_1{background-color: $base_color;color: #ffffff;border-radius: 50upx;height: 70upx;line-height: 70upx;font-size: 28upx;text-align: center;
	border: 1px solid #F0F0F0;width: 100%;}
	.con_04_2{background-color: $base_color;color: #ffffff;width: 40%;margin: 0 auto;}
	.con_04_3{background-color: #E9E8E5;color: #81817E;width: 40%;}
	.con_05{padding: 40upx 0 ;text-align: center;color: #F78674;}
	.con_05 span{padding-left: 20px;}
	.con_02{border-bottom: 4upx solid #F7F7F7;padding-top: 30upx;display: flex;justify-content: space-between;}
	.con_02_t{background-color: $base_color;color: #fff;height: 60upx;line-height: 60upx;border-radius: 40upx;padding: 0 40upx;margin-bottom: 10upx;font-size:28upx;}
	.con_02_r{flex-grow: 1;padding-right: 20upx;margin-top: 10upx;}
	.con_02_l{width: 80upx;text-align: center;padding: 10upx 0 10upx;}
	.usericon{
		width: 60upx;
		height: 60upx;margin-right: 20upx;
	}
}
</style>
