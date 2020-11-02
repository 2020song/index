import debug from "./debug.js";
module.exports = {
  // 请求域名 格式： http://您的域名
  //SiteBaseUrl:'http://api.luma.com/api/',
  //SiteBaseUrl:"https://zxluma.jxdsy.cn/api/",//测试
  // SiteBaseUrl:'https://kazuma.jxdsy.cn/api/',//正式
  
  SiteBaseUrl:debug.isdebug?"https://zxluma.jxdsy.cn/merchant.php/":"https://luma.jxdsy.cn/merchant.php/",
   SiteBaseUrltwo:debug.isdebug?"https://zxluma.jxdsy.cn/api.php/":"https://luma.jxdsy.cn/api.php/",
  
  //SiteBaseUrl:"https://zxluma.jxdsy.cn/merchant.php/",
  // SiteBaseUrl:"https://luma.jxdsy.cn/merchant.php/",
  
  // 请求头
  HEADER:{
    'content-type': 'application/json'
  },
   // 回话密钥名称 请勿修改此配置
  TOKENNAME: 'Authori-zation',
  
  Private_key: 'QAZWSXEDC123RFVA', //私钥 与后台基础设置中API安全秘钥相同，谨慎修改
	
}

/**
 * 2019-11-23 9:49 从小程序迁移到了vue 里面这个代码 
 * 通用方法无需处理
 * */