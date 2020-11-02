import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store'

Vue.config.productionTip = false
//把vuex定义成全局组件
Vue.prototype.$store = store
//统一提示方便全局修改
const msg = (title,  icon='none',duration=2000, mask=false)=>{
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
} 


// 2.在main.js中引入然后挂载待vue原型上这样就可以全局使用了
// import { dianji } from './common/common'
// Vue.prototype.$dianji = dianji;
import { 
    getTimeOut,
    timestampToTime,//10位时间戳 转年月日时分秒
    getUrlParam,//获取url上的指定参数
    geeurlcodeObj,//获取url上面的参数 返回对象
    rmspace,//字符串去除所有空格 去除首尾中间的空格
    changefwb,//处理富文本
    setString,//字符串截取指定长度 然后...
    codeobj,//对象合并
    isWeiXin,//判断当前浏览器是不是微信浏览器 返回布尔值
    jiequletft,//截取字符串 往左边截取
    newdate,//获取当前时间戳
    removeByValue,//删除数组中指定的值 指定的元素
    roundFloat,//将小数精确到指定位数
    arrayUnique,//数组去重
    checkCardNo,//验证身份证方法 返回布尔值
    randomString,//生成随机字符串 可以指定长度
    getRandomColor,//生成随机颜色
    checkPwd,//检测密码强度
	checkPhone,

 } from "@/utils/yicode";
Vue.prototype.$api = {msg, json:{}}//原型配置方法
Vue.prototype.$yicode ={checkPhone,rmspace,timestampToTime};


App.mpType = 'app'

const app = new Vue({
	...App,
	//挂载全局
	store
})
app.$mount()
