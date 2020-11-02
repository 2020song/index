/**
 * 2019年8月10日 13:42:50
 * @小义 xiaoyi
 * 封装全局 公用方法 组件
 * 
 */

// 去除前面0
// let regex=/^[0]+/;
// let code='000100'.replace(regex,"")

 /**
  * 方法一
  * 处理10位时间戳 返回格式 2019-08月10日13:55:34
  * 
  */
const timestampToTime = (timestamp)=> {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
    var D = change(date.getDate()) + '日';
    var h = change(date.getHours()) + ':';
    var m = change(date.getMinutes()) + ':';
    var s = change(date.getSeconds());
    return Y + M + D + h + m + s;
    //return  M + D + h + m + s;
}

function change(t) {//修改时间
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}


/**
 * 方法二
 * 获取url上面的指定参数 传入参数名称就可以了
 * 
 *  */
const getUrlParam = (name)=> {   //name为要获取的参数名
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var rrr = decodeURIComponent(window.location.search);
    var r = rrr.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;  
}


/**
 * 方法三
 * 获取url上面的所有参数的方法 返回的是一个对象
 * 
 * 
 */

 const geeurlcodeObj = ()=>{//获取url上面的所有参数 返回一个 对象

    try{
        //将url 上的参数全部获取成一个对象
        //var urlcan = '?area_id=2 3&code=021t5Hf8218EdK0hFUe8264Af82t5Hf-&st ate=&a=1 1&b=2 2&c=3 3 3&d=44 4 ';
        var urlcan = decodeURIComponent(window.location.search);;
        urlcan = urlcan.split("?")[1];//数组
        urlcan = urlcan .replace(/\s/g,"");
        //去空格
        var arr = urlcan.split("&");//数组
        var obj = {};

        for(var i=0;i<arr.length;i++){
            var arritem = arr[i].split("=");
            if(arritem[1]){
                obj[arritem[0]] = arritem[1];
            }else{
                obj[arritem[0]] = "";
            }
        }
        
        return obj;
    }catch(e){
        //console.log(e);
        return {};//错误后返回空对象
    }
}



/**
 * 方法四
 * 字符串去除所有空格 去除首尾中间的空格
 */
const rmspace = (str)=>{
    if(str){
        return str.replace(/\s/g,"");
    }else{
        console.log("请输入字符串");
        return "";
    }
}

/**
 * 方法五
 * 处理富文本
 * 使用场景是 编辑器使用的是 /ssss
 * 富文本没有存入域名 然后要在小程序 或者分布式场景下查看 
 * 那么必须用正则去替换 大概的代码如下
 * 只需要传入 富文本和 对应的资源域名就可以了
 */

const changefwb =  (strin,baseStatic)=>{//懒加载处理 将src 换成 v-lazy=
    let newStr= strin.replace(new RegExp(/src=\"/g), `mode="widthFix" src="${baseStatic}`);//v-lazy=

    return newStr;
}



/***
 * 方法六
 * JS截取指定长度的的字符串（含中文）,中文自动按2个字符截取，多出部分用...代替
 * 
 * 参数1 字符串
 * 参数2 截取的长度
 * 
 */
 const setString = (str, len)=> {  
    var strlen = 0;  
    var s = "";  
    for (var i = 0; i < str.length; i++) {  
        if (str.charCodeAt(i) > 128) {  
            strlen += 2;  
        } else {  
            strlen++;  
        }  
        s += str.charAt(i);  
        if (strlen >= len) {  
            return s+"...";  
        }  
    }  
    return s;  
}  


/**
 * 方法七
 * 
 * js 对象合并 主要是用的es6的方法
 * 
 */
const codeobj = (obj1,obj2)=>{

    let form = obj1;
    let obj = obj2;
    
    Object.assign(form, obj);
    //console.log('after', form);

    return form;

}


/***
 * 方法八
 * 
 * js 判断当前浏览器 是不是 微信浏览器 如果是返回 true
 * 
 */


const isWeiXin = ()=>{
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

/**
 * 方法九
 * js 截取某个字符串前面的内容：
 * 
 * 往左边截取
 * 
 * https://www.cnblogs.com/shaozhu520/p/10472027.html
 */
const jiequletft = (varstr,gzj)=>{
    let tr = varstr.match('/(\S*)'+gzj+'/')[1];
    return tr;
}



/**
 * 方法十
 * 
 * 获取当前时间戳
 */
//从1970年开始的毫秒数然后截取10位变成 从1970年开始的秒数
const newdate = ()=> {
    var tmp = Date.parse( new Date() ).toString();
    tmp = tmp.substr(0,10);
    return tmp;
}




/**
 * 方法十一
 * 
 * 删除数组中指定元素 传数组和指定的值就可以了
 * @param arr
 * @param val
 */
const removeByValue =  (arr, val)=> {

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        arr.splice(i, 1)
        break
      }
    }

    return arr;

}



/**
 * 方法十二
 * 
 * 将小数字符串精确到指定位数
 * @param num string 字符串类型的小数
 * @param index int 精确到小数点第几位
 */
const roundFloat =  (num, index)=> {
    return Number(num).toFixed(index)
}



/**
 * 方法十三
 * 数组去重
 * @param {Array} arr 
 * @returns {Array}
 * 
 * 弃用 直接用set 就可以
 */

const arrayUnique = (arr)=> {
    var newArr = []
    for (var i = 0, len = arr.length; i < len; i++) {
      for (var j = i + 1; j < len; j++) {
        if (arr[i] === arr[j]) {
          //获取没重复的最右一值放入新数组
          ++i
        }
      }
      newArr.push(arr[i])
    }
    return newArr
}


/**
 * 方法十四
 * 验证身份证号
 * @param el 号码输入input
 * @returns {boolean}
 */

const checkCardNo = (el)=> {
    var txtval = el.value;
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(txtval)
  }
 


const getTimeOut = ()=> {
    console.log("1");
}


/**
 * 方法十五
 * 生成随机字符串(可指定长度)
 * @param len
 * @returns {string}
 */
const randomString = (len)=> {
    len = len || 8;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}


/**
 * 方法十六
 * 生成随机颜色
 * 
 */
const getRandomColor  = ()=> {
    const rgb = []
    for (let i = 0 ; i < 3; ++i){
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
}

/**
 * 方法十七
 * 
 * 检测密码强度
 * @param str //检测的密码
 * @returns {Number} 密码强度
 */
const checkPwd =   (str)=> {
    var nowLv = 0;    
    if (str.length < 6) {
        return nowLv
    }

    if (/[0-9]/.test(str)) {
        nowLv++
    }    

    if (/[a-z]/.test(str)) {
        nowLv++
    }

    if (/[A-Z]/.test(str)) {
        nowLv++
    }

    if (/[\.|-|_]/.test(str)) {
        nowLv++
    }    
    
    return nowLv;
}

 

const checkPhone = (phone)=>{ 
    if(!(/^1[3456789]\d{9}$/.test(phone))){ 
        //alert("手机号码有误，请重填");  
        return false; 
    }else{
		return true; 
	}
}




export { 

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
	checkPhone,//检测手机号码
 }


 /***
  * 
  * 使用方法 {} 按需引入 需要上面哪个方法引入哪个方法
  * 
  * //引入
  * import {timestampToTime,checkPwd} from "@/utils/ytool"
  * 
  * //调用
  * timestampToTime()
  * checkPwd()
  * 
  * 
  */
