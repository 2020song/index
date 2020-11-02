// import Vue from 'vue'
// import Vuex from 'vuex'
//  Vue.use(Vuex)
//  const store = new Vuex.Store({
//      state: {},
//      mutations: {},
//      actions: {}
//  })
//  export default store




//全局状态管理
import Vue from 'vue'
import Vuex from 'vuex'

import debug from "@/utils/debug.js";

Vue.use(Vuex)
let obj = {};
if(debug.isdebug==true){
	//测试环境
	//开发环境
	obj = {
		staticUrl:"https://luma.jxdsy.cn/attachs/",//图片静态资源地址
		staticUrl1:"https://zxluma.jxdsy.cn/attachs/",
		joinurl:"https://luma.jxdsy.cn/static/applet5/",//关于我们里面的url
		statictowUrl:"https://luma.jxdsy.cn/",//域名
		staticFile:"static/applet5/images/bank/",//图片路径 
		uploadurl:"https://zxluma.jxdsy.cn/",//上传图片的地址 用在上传图片组件
		uploadurl1:"https://zxluma.jxdsy.cn/",
	}
}else{
	//正式环境
	obj = {
		staticUrl:"https://luma.jxdsy.cn/attachs/",//图片静态资源地址
		staticUrl1:"https://luma.jxdsy.cn/attachs/",
		joinurl:"https://luma.jxdsy.cn/static/applet5/",//关于我们里面的url
		statictowUrl:"https://luma.jxdsy.cn/",//域名
		staticFile:"static/applet5/images/bank/",//图片路径 
		uploadurl:"https://luma.jxdsy.cn/",//上传图片的地址 用在上传图片组件
		uploadurl1:"https://luma.jxdsy.cn/",
	}
}


const store = new Vuex.Store({
	state: {

		...obj,
		
		
		//下面开始的内容是全局的状态
		url: "",//请求的url
		private_key: 'QAZWSXEDC123RFVA', //私钥 与后台基础设置中API安全秘钥相同，谨慎修改
		navHeight: 0,
		routineStyle: '#ffffff',
		openPages: '',
		spid: 0,
		code: 0,
		urlImages: '',
		token: uni.getStorageSync('token'),
		isLog: false,
		expiresTime: 0,
		MyMenus: [],
		userInfo: uni.getStorageSync('userInfo'),
		
		//下面的是登录相关的
		hasLogin: false,
		loginProvider: "",
		openid: null,
		testvuex:false,//
		CONFIG:uni.getStorageSync("CONFIG"),//配置信息 再首页获取的
		count: 0,
		isvoice:true,//是否播放语音提示
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setTestTrue(state){
			state.testvuex = true
		},
		setTestFalse(state){
			state.testvuex = false
		},
		
		//修改token 方法
		changetoken(state,token){
			state.token = token
		},
		//修改本地用户信息
		changeuserInfo(state,userInfo){
			state.userInfo = userInfo;
		},
		
		//修改是否登录状态
		changeisLog(state,isLog){
			state.isLog = isLog;
		},
		//修改一个登录的时间还是什么
		changeexpiresTime(state,expiresTime){
			state.expiresTime = expiresTime;
		},
		changeCONFIG(state,CONFIG){//修改配置信息
			state.CONFIG = CONFIG;
		},
		increment(state, n = 1) {//demo
		    state.count += n;
		},
		//修改状态
		changeisvoice(state,data){
			state.isvoice = data;
		}
	},
	//方法
	actions: {
		// lazy loading openid
		getUserOpenId: async function ({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		},
		asyncInrement(context) {
	      return new Promise(resolve => {
	        setTimeout(() => {
	          context.commit('increment');
	          resolve();
	        }, 1000)
	      });
	    },
		//播放语音 方法直接传入参数就可以
		openVoice(context,text){
			return new Promise(resolve=>{
				Voice(text);//播放
				resolve();//结束
			})
		},
		AudioVoice(context,text){//获取音频对象播放
			return new Promise(resolve=>{
				Voice({
					voiceSet: {
						tex:text,
					},
					returnAudio: true
				}).then(audio=>{
					audio.onPlay(()=>{
						console.log('音频开始播放了')
					})
					audio.play();
					
					resolve();//结束
				})
			})
		}
	}
})

export default store




