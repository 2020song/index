<template>
	<!-- 修改密码  -->
	<!-- <view class="login">
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
	</view> -->
	<view class="">
		
	
	<view class="ForgetPassword">
		<view class="inputboxitem flex">
			<view class="names">手机号</view>
			<view class="inputsview flex1">
				<!-- <input type="text" value="" v-model="mobile" class="inputs" placeholder="请输入手机号" /> -->
				<view class="">
					{{mobile}}
				</view>
			</view>
		</view>
		<view class="inputboxitem flex">
			<view class="names">验证码</view>
			<view class="inputsview flex1">
				<input type="number" value="" v-model="code" class="inputs" placeholder="请输入验证码" />
				<view v-if="!isdjs" class="sendcode" @tap="sendSmsfun">获取验证码</view>
				<view v-if="isdjs"  class="sendcode djs"  >{{times}}</view>
			</view>
		</view>
		<view class="inputboxitem flex">
			<view class="names">新密码</view>
			<view class="inputsview flex1">
				<input type="number" value="" v-model="newpwd" maxlength="6" class="inputs" placeholder="请输入6位数新密码" />
				<!-- password -->
			</view>
		</view>
		<view class="inputboxitem flex">
			<view class="names">确认密码</view>
			<view class="inputsview flex1">
				<input type="number" value="" v-model="newtwopwd" maxlength="6" class="inputs" placeholder="请再次输入6位数新密码" />
				<!-- password -->
			</view>
		</view>
		
		
	</view>
	
	<view class="submitbtn 111"  :class="{active:issubm}" @tap="forgetPass">确认修改</view>
	
	</view>
</template>

<script>
	// import uniIcon from "@/components/uni/uni-icon/uni-icon.vue"
	import {storeShopTel,storeSendSms,storeUpdatePassword} from "@/utils/api/api.js";
	export default {
		data() {
			return { 
				// stop: false,
				// miao: 60,
				// mobile:'',
				// code:'',
				// status:'0',
				// psd:'',
				// newPass:'',
				// verifyPass:"",//确认密码
				// lodPass:"",
				
				
				// //账户密码登录的
				// username:"18979561614",
				// password:"123456",
				// is_pay:false,//是否支付（默认false） (false:登录密码，true:支付密码)
				
				//表单值
				mobile:"",//手机号
				code:"",//验证码
				newpwd:"",//新密码
				newtwopwd:"",//确认密码
				
				issubm:false,//忘记密码的表单提交状态 是否允许提交
				tabactive:1,
				isdjs:false,
				times:60,
				smstype:'sms_withdraw',//验证码类型
				is_pay : true,//判端支付还是登陆
				type:0,//判断忘记还是修改密码
				
			};
		},
		onLoad() {
			
			this.isStoreShopTel();
			// if(opdata.is_pay==0){
			// 	this.is_pay = false;
			// 	uni.setNavigationBarTitle({
			// 		title:"修改登录密码"
			// 	})
			// }else if(opdata.is_pay==1){
			// 	this.is_pay = true;
			// 	uni.setNavigationBarTitle({
			// 		title:"修改支付密码"
			// 	})
			// }
			
		},
		computed:{
			// userInfo(){
			// 	return this.$store.state.userInfo;
			// },
			// staticurl(){
			// 	return this.$store.state.staticUrl;
			// }
			
			
			
		},
		// components: {uniIcon}, 
		methods: { 
			
			// async edit_psd(){
			// 	//修改密码
			// 	let res = await userUpdatePassword({
			// 		mobile:this.mobile,//电话号码
			// 		type:"1",//类型（0忘记密码，1修改密码）
			// 		newPass:this.newPass,//密码
			// 		verifyPass:this.verifyPass,//确认密码
			// 		lodPass:this.lodPass,//旧密码
			// 		// code:this.code,//验证码
			// 		is_pay:this.is_pay,
			// 	});
			// 	if(res.code==0){
			// 		this.$api.msg("修改成功~");
			// 		if(this.is_pay){
			// 			//修改支付
			// 			setTimeout(()=>{
			// 				uni.navigateBack({
			// 				})
			// 			},1500)
			// 		}else{
			// 			//修改登录
			// 			setTimeout(()=>{
			// 				uni.redirectTo({
			// 					url:"/pages/login/login"
			// 				})
			// 			},1500)
						
			// 		}
					
					
			// 	}else{
			// 		this.$api.msg(res.msg);
			// 	}
			// },
			
			//发送验证码 忘记支付密码
			
			async sendSmsfun(){
				
				// if(!/(^1[1-9][0-9]{9}$)/.test(this.tel)){
				// 	this.$api.msg('请输入正确的手机号码');
				// 	return;
				// }
				let res =  await storeSendSms({
					mobile:this.mobile,
					smstype: this.smstype,
				});
				
				if(res.code==0 || true){
					this.$api.msg(res.msg);
					//发送成功
					this.isdjs = true;
					
					let iv  = setInterval(()=>{
						this.times--;
						if(this.times<=0){
							this.isdjs = false;
							clearInterval(iv);//结束
						}
					},1000)
					
				}else{
					this.$api.msg(res.msg);
				}
			},
			
			//忘记支付密码而修改
			forgetPass(e){
				console.log(e)
				
				if(!this.issubm){
					return false
				}
				
				var data = {
				  smstype: this.smstype,
				  mobile : this.mobile,
				  newPass: this.newpwd,
				  code: this.code,
				  verifyPass: this.newtwopwd,
				  is_pay : this.is_pay,
				  type:this.type
				}
				storeUpdatePassword(data).then(res=>{
				  if (res.code == 0) {
					uni.showModal({ 
					  title: '提示',
					  content: '修改密码成功',
					  showCancel: false,
					  confirmText: '确认',
					  success: function (res) {
						if (res.confirm) {
							 uni.navigateBack({
								 
							 });
						}
					  }
					})
				
				  } else {
					uni.showModal({
					  title: '提示',
					  content: res.msg,
					  showCancel: false,
					  confirmText: '确认',
			
					})
				  }
				 })
			},
			//提交按钮控制
			VerificationFun(){
				if( this.code!="" && this.newpwd!="" && this.newtwopwd!=""){
					this.issubm = true;
				}else{
					this.issubm = false;
				}
			},
			
			/**
			* 初始化数据
			*/
			 async isStoreShopTel () {
				  console.info(1111)
			 let res = await storeShopTel({});
			 // console.log(res);
			 if(res.data.mobile){
			 	 this.mobile = res.data.mobile;
				 console.log(this.mobile);
			 }else{
				this.$api.msg('手机号获取失败请刷新页面');
			 }
			
			 
			},
			
			
		},
		// 按钮显示控制
		watch:{
			code(){
				this.VerificationFun()
			},
			newpwd(){
				this.VerificationFun()
			},
			newtwopwd(){
				this.VerificationFun()
			}
		}
	}
</script>

<style lang="scss">
// .login{
// 	padding-top:10vh;
// 	.head{font-size: 44upx;padding: 40upx;}
// 	.tou{text-align: center;}
// 	.tou .img{width: 128upx;height: 128upx;}
// 	.con{padding: 40upx 40upx;}
// 	.con_01{border-bottom: 4upx solid #F7F7F7;padding-top: 40upx;display: flex;}
// 	.con_01_l{width: 80upx;text-align: center;}
// 	.con_01_r{flex-grow: 1;padding-right: 20upx;}
// 	input::-webkit-input-placeholder { color: #D2D2D2;     }
// 	.con_03{font-size: 24upx;color: #F78674;padding: 30upx 0 66upx 16upx;display: flex;justify-content: space-between;}
// 	.con_04{
// 		text-align: center;
// 	}
// 	.con_04_1{background-color: $base_color;color: #ffffff;border-radius: 50upx;height: 70upx;line-height: 70upx;font-size: 28upx;text-align: center;
// 	border: 1px solid #F0F0F0;width: 100%;}
// 	.con_04_2{background-color: $base_color;color: #ffffff;width: 40%;margin: 0 auto;}
// 	.con_04_3{background-color: #E9E8E5;color: #81817E;width: 40%;}
// 	.con_05{padding: 40upx 0 ;text-align: center;color: #F78674;}
// 	.con_05 span{padding-left: 20px;}
// 	.con_02{border-bottom: 4upx solid #F7F7F7;padding-top: 30upx;display: flex;justify-content: space-between;}
// 	.con_02_t{background-color: $base_color;color: #fff;height: 60upx;line-height: 60upx;border-radius: 40upx;padding: 0 40upx;margin-bottom: 10upx;font-size:28upx;}
// 	.con_02_r{flex-grow: 1;padding-right: 20upx;margin-top: 10upx;}
// 	.con_02_l{width: 80upx;text-align: center;padding: 10upx 0 10upx;}
// 	.usericon{
// 		width: 60upx;
// 		height: 60upx;margin-right: 20upx;
// 	}
// }

//忘记支付密码
.ForgetPassword{
	margin: 20upx 24upx;
	padding: 0 20upx;
	background:rgba(255,255,255,1);
	border-radius:14upx;
	.inputboxitem{
		height: 92upx;
		line-height: 92upx;
		border-bottom: 1px solid #E4E4E4;
		.names{
			width: 183upx;
			font-size:30upx;
			color:rgba(0,0,0,1);
		}
		.inputs{
			height: 92upx;
			line-height: 92upx;
			font-size:30upx;
			color:rgba(0,0,0,1);
		}
		
		.inputsview{
			position: relative;
			//width: 183upx;
			.sendcode{
				width:184upx;
				height:68upx;
				line-height: 68upx;
				text-align: center;
				background:rgba(255,105,0,1);
				border-radius:4upx;
				color:#FFFFFF;
				
				font-size:30upx;
				position: absolute;
				z-index: 3;
				top:5px;
				right: 0;
			}
			.sendcode.djs{
				background: #b3b1af;
			}
		}
	}
	
	.inputboxitem:nth-last-child(1){
		border:0;
	}
}
.submitbtn{
	margin: 60upx 24upx;
	height:88upx;
	line-height: 88upx;
	text-align: center;
	background:rgba(254,197,156,1);
	border-radius:6upx;
	font-size:32upx;
	color:rgba(255,255,255,1);
}

.submitbtn.active{
	background: #FF6900;
}



</style>
