<template>
	<!-- 登录 -->
	<view class="login">
		<view class="head"> </view>
		<view class="tou"><image class="img" src="../../static/logo/logo.png" ></image></view> 
		<view class="con" v-show="status == 0">
			<view class="con_01" style="font-size: 8upx;">
				<view class="con_01_l"><image class="usericon" src="/static/news/usericon.png" mode=""></image></view>
				<view class="con_01_r"><input v-model="username" class="uni-input"  placeholder="请输入手机号码" style="height: 35px;background-color: #fff;"/></view>
			</view> 
			<view class="con_02" style="font-size: 8upx;">
				<view class="con_02_l"><image class="usericon" src="/static/news/pwdicon1.png" mode=""></image></view>
				<view class="con_02_r"><input v-model="password" type="password" class="uni-input" placeholder="请输入密码" @confirm="login()" style="height: 35px;background-color: #fff;"/></view> 
				<!-- <button class="con_02_t" type="default" v-if="stop" :disabled="true">{{miao}}秒</button> -->
			</view>
			
			<view class="con_03 jus-b" style="display: flex; margin-top: 10px;" >
				<view class="ali-c">
					<checkbox-group @change="changegroup">
						<checkbox class="checkbox" color="#ff6900" value="cb" :checked="ischecked" /> <text>记住密码</text>
					</checkbox-group>
				</view>
				<view @click="change_sta">忘记密码？</view>
			</view>
			<view class="con_04" style="margin-top: 0px;">
				<view style="border-radius: 50upx;width: 100%;overflow: hidden;">
					<navigator url="#">
					<view class="con_04_1 " @tap="login()">登录</view>
					</navigator>
				</view>
				
			</view> 
			
			<!-- #ifdef H5 -->
			<!-- <view class="con_04" style="margin-top: 30px;">
				<view class="con_04_1 " @tap="logindemo()">测试登录</view>
			</view> -->
			
			<!-- #endif -->
		</view>
		
		<view class="con" v-show="status == 1">
			<view class="con_01" style="font-size: 8upx;">
				<view class="con_01_l"><image class="usericon" src="/static/news/usericon.png" mode=""></image></view>
				<view class="con_01_r" style="font-size: 8upx;"><input v-model="mobile" class="uni-input"  placeholder="请输入手机号" style="height: 35px;background-color: #fff;" /></view>
			</view> 
			<view class="con_01" style="font-size: 8upx;">
				<view class="con_01_l"><image class="usericon" src="/static/news/pwdicon1.png" mode=""></image></view>
				<view class="con_01_r"><input v-model="code" class="uni-input"  placeholder="请输入验证码" style="height: 35px;background-color: #fff;" /></view>
				<button class="con_02_t" type="default" @click="send" v-if="!stop">验证码</button>
				<button class="con_02_t" type="default" v-if="stop" :disabled="true">{{miao}}秒</button>
			</view> 
			<view class="con_02" style="font-size: 8upx;">
				<view class="con_02_l"><image class="usericon" src="/static/news/pwdicon1.png" mode=""></image></view>
				<view class="con_02_r"><input type="password" v-model="newPass" class="uni-input" placeholder="请输入新密码" style="height: 35px;background-color: #fff;" /></view>
			</view>
			<view class="con_02" style="font-size: 8upx;">
				<view class="con_02_l"><image class="usericon" src="/static/news/pwdicon1.png" mode=""></image></view>
				<view class="con_02_r"><input type="password" v-model="verifyPass" class="uni-input" placeholder="请再次输新密码" style="height: 35px;background-color: #fff;" /></view>
			</view>
			
			
			
			<view class="con_04" style="margin-top: 50px;display: flex;justify-content: space-between;">
				<view class="con_04_1 con_04_3" @click="back">返回登录</view>
				<view class="con_04_1 con_04_2" @click="edit_psd">提交</view>
			</view> 
			
			
			
			
		</view>
		
		<showxieyi ref="showxieyi" @isclickty="isclickty"></showxieyi>
		<!-- 使用协议 -->
		
		
		<view class="dingyuesm">
			<view class="xieyitagbox flex ali-c flexc">
				<view class="flex ali-c">
				
				<radio class="isradio" value="r1" @tap="radioChange" :checked="isAgree" color="#ff6900" />
				登录即代表阅读并同意</view>
				<navigator class="xieyitag flex ali-c" url="/pages/Agreement/Agreementuser"><view > 用户协议 </view></navigator>和
				<navigator class="xieyitag flex ali-c" url="/pages/Agreement/Agreement"><view > 隐私政策 </view></navigator>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import uniIcon from "@/components/uni/uni-icon/uni-icon.vue"
	import {userLogin,userUpdatePassword,userSendSms} from "@/utils/api/api.js";
	import showxieyi from "@/components/showxieyi/showxieyi.vue"
	export default {
		
		components:{
			showxieyi,
			uniIcon
		},
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
				flag:true,
				
				
				//账户密码登录的
				// username:"18979561614",
				// password:"123456",
				username:"",
				password:"",
				ischecked:true,//是否记住密码 默认记住密码
				isAgree:false,//是否同意协议
			};
		},
		onShow() {
			// 获取之前记录的密码 
			let username = uni.getStorageSync("username");
			let password = uni.getStorageSync("password");
			//console.info(username,password,"password");
			if(username!="" && username!=undefined){
				console.log('哈哈')
				this.username = username;
			}
			
			if(password!="" && password!=undefined){
				this.password = password;
			}
			
			// if(password!="" && username!="" && (password!=undefined && username!=undefined)){
			// 	//自动登录
			// 	this.login();
			// }
		},
		onLoad() {
			
			
			
			// 处理 协议 按钮
			let istongyi = uni.getStorageSync('istongyi');
			if(istongyi){
				console.info('进',istongyi)
				if(istongyi==true || istongyi=="true"){
					this.isAgree = true;//获取之前同意过的状态
				}else{
			
					setTimeout(()=>{
						this.$refs.showxieyi.show();//第一次进来 提示
					},1000)
				}
			}else{
				setTimeout(()=>{
					console.info('进来')
					this.$refs.showxieyi.show();//第一次进来 提示
				},1000)
			}
		},
		
		methods: { 
			//单选框
			radioChange(e){
				console.log(e);
				this.isAgree = !this.isAgree;
			
			},
			isclickty(){//弹窗的同意被点击后
				this.isAgree = true;
				//this.appLogin();//关闭自动登陆
				
				uni.setStorageSync('istongyi', true);//存储用户同意过的状态
				
			},
			back(){
				// uni.navigateBack()
				this.status = 0;
			},
			change_sta(){
				this.status = 1
			},
			async edit_psd(){
				
				if(this.isAgree==false){
					this.$api.msg("您需要先同意用户协议和隐私策略");
					return false;
				}
				
				//忘记密码
				let res = await userUpdatePassword({
					mobile:this.mobile,//电话号码
					type:"0",//类型（0忘记密码，1修改密码）
					newPass:this.newPass,//密码
					verifyPass:this.verifyPass,//确认密码
					code:this.code,//验证码
				});
				if(res.code==0){
					this.$api.msg(res.msg);
					
					
				}else{
					this.$api.msg(res.msg);
				}
			},
			//测试登录方法 h5使用
			// logindemo(){
			// 	this.username="18979561614";
			// 	this.password="123456";
			// 	this.login();
			// },
			async login(){
				if(this.isAgree==false){
					this.$api.msg("您需要先同意用户协议和隐私策略");
					return false;
				}
				
				if(this.username==""){
					this.$api.msg("用户名不能为空");
					return false;
				}else if(this.password==""){
					this.$api.msg("密码不能为空");
					return false;
				}
				
				let res  = await userLogin({
					username:this.username,
					password:this.password,
				});
				// console.log(res.data.store[0].shop_id)
				
				this.$api.msg(res);
				
				if(res.code==0){
					//记住密码
					console.log(res);
					if(this.ischecked==true){
						uni.setStorageSync("username",this.username)
						uni.setStorageSync("password",this.password)
					}else{
						uni.setStorageSync("username","")
						uni.setStorageSync("password","")
					}
					
					if(res.data.store.length==1){
						//只有一个门店
						uni.setStorageSync('token', res.data.user_token);
						this.$store.commit('changetoken', res.data.user_token);
						this.$store.commit('changeuserInfo', res.data.store[0]);
						uni.setStorageSync('userInfo', res.data.store[0]);
						console.info(res.data.store[0].shop_id);
						if(this.flag){
							uni.redirectTo({
								url:'/pages/index/index?shop_id='+res.data.store[0].shop_id,
								success(){
									this.flag=false;
								
					
								}
							}) 
							
						}
						
						
					}else if(res.data.store.length>1){
						console.log('进来');
						//有多个门店 需要切换
						uni.setStorageSync('token', res.data.user_token);
						this.$store.commit('changetoken', res.data.user_token);
						
						uni.setStorageSync('storelsit', res.data.store);
						uni.redirectTo({
							url:"/pages/tagglestore/tagglestore?istologin=1"
						})
					}else{
						
					}

					//选择店铺
				}else{
					this.$api.msg(res.msg);
				}
			},
			//发送验证码
			async send(){
				
				if(!this.$yicode.checkPhone(this.mobile)){
					this.$api.msg('手机号错误')
					return; 
				}
				let res = await userSendSms({
					mobile:this.mobile,
					smstype:"sms_user_newpwd",//验证码类型（默认修改密码：sms_user_newpwd，提现：sms_withdraw）
				});
				if(res.code==0){
					this.$api.msg(res.msg);
					
					this.settime();
					this.stop = true;
				}else{
					this.$api.msg(res.msg);
				}
			},
			//处理倒计时
			settime() {
				let isid =  setInterval(()=>{
					this.miao--;
					if(this.miao<=0){
						this.miao = 60;
						this.stop = false;
						clearInterval(isid);
					}
				},1000)
			},
			//提交登录 用户名和密码登录
			async tosubmit(){
				if(this.username==""){
					return false;
				}else if(this.password==""){
					return false;
				}
				
				let res = userLogin({
					username:this.username,
					password:this.password,
				});
				if(res.code==0){
					this.$api.msg(res.msg);
				}else{
					this.$api.msg(res.msg);
				}
			},
			//记住密码
			changegroup(e){
				console.info(e.detail.value.length);
				if(e.detail.value.length==0){
					this.ischecked = false;
				}else{
					this.ischecked = true;
				}
			}
		}
	}
</script>

<style lang="scss">
.login{
	padding-top:10upx;
	// .head{font-size: 44upx;padding: 13upx;}
	.tou{text-align: center;}
	.tou .img{width: 42upx;height: 42upx;}
	.con{padding: 20upx 200upx;}
	.con_01{border-bottom: 1upx solid #F7F7F7;padding-top: 8upx;display: flex;}
	.con_01_l{width: 26upx;text-align: center;padding: 0px 0 10upx;}
	.con_01_r{flex-grow: 1;padding-right: 6upx;font-size: 8upx;}
	input::-webkit-input-placeholder { color: #D2D2D2;     }
	.con_03{font-size: 8upx;color: #F78674;padding: 10upx 0 33upx 5upx;display: flex;justify-content: space-between;}
	.con_03 .checkbox{
		margin-right: 10upx;
	}
	.con_04_1{background-color: $base_color;color: #ffffff;border-radius: 16upx;height:23upx;line-height: 23upx;font-size:8upx;text-align: center;
	border: 1px solid #F0F0F0;width: 100%;}
	.con_04_2{background-color: $base_color;color: #ffffff;width: 40%;}
	.con_04_3{background-color: #E9E8E5;color: #81817E;width: 40%;}
	.con_05{padding: 13upx 0 ;text-align: center;color: #F78674;}
	.con_05 span{padding-left: 6px;}
	.con_02{border-bottom: 4upx solid #F7F7F7;padding-top: 10upx;display: flex;justify-content: space-between;}
	.con_02_t{background-color: $base_color;color: #fff;height: 20upx;line-height: 20upx;border-radius: 14upx;padding: 0 40upx;margin-bottom: 10upx;font-size:14upx;}
	.con_02_r{flex-grow: 1;padding-right: 20upx;margin-top: 10upx;}
	.con_02_l{width: 28upx;text-align: center;padding: 10upx 0 10upx;}
	.usericon{
		width: 20upx;
		height: 20upx;margin-right: 20upx;
	}
	
	
	.dingyuesm{
		text-align: center;
	}
	.xieyitagbox{
		font-size:10upx;
		position: fixed;
		bottom:10upx;
		// right: 50%;
		// margin-right: -138px;
		width: 100%;
		
		.isradio{
			margin-right:10upx ;
		}
		
	}
	.xieyitag{
		
		font-size:10upx;
		//color:#f0f0f0;
		color:#ccc;
	}
}
</style>
