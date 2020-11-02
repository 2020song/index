import { HEADER, TOKENNAME, Private_key,SiteBaseUrl,SiteBaseUrltwo} from './config.js';//配置文件

import store from './../store';//vuex

 /**
 * 发送请求
 * 
 * 参数1:url地址
 * 参数2:请求的方法
 * 参数3:请求的数据
 * 参数4: 特殊参数 判断是否需要 授权 需要鉴权 noVerify为 true 的时候 不验证 返回的code
 * noAuth 为 false 验证授权 true 不验证授权
 * 
 * 
 */
export default function request(api, method, data, {noAuth = false, noVerify = false,isurltwo=false,islutwo=false})
{
   //let Url = getApp().globalData.url, header = HEADER;

   // console.info(isurltwo,"isurltwo");
 
  if(islutwo){
	    var Url = SiteBaseUrltwo;
  }else{
	  var Url = SiteBaseUrl;
  }
	let header = HEADER;
   
   
   // if(isurltwo){
	  //  Url = SiteBaseUrltwo;
   // }
   
   // console.info(Url,"Url",noAuth,"noAuth");
   
   // console.info("token",store.state.token);
   
  if (!noAuth) {
	  //debugger;
    //登录过期自动登录
    if (store.state.token=="" || store.state.token==null) {//checkLogin 应该是验证登录的方法
		// uni.hideLoading();
      
	  //验证成功继续请求自己的接口   授权方法 授权完了之后继续请求
	  // return //授权了之后再请求原来的 数据接口
	  // #ifdef APP-PLUS
	  // #endif

		uni.showModal({
		    title: '提示',
		    content: '您还没有登录授权,是否先登录授权?',
			confirmText:"去授权",
			cancelText:"先逛逛",
			confirmColor:"#ff6900",
		    success:  (res)=> {
		        if (res.confirm) {
		            console.log('用户点击确定');
					 uni.hideLoading();
					uni.navigateTo({
					    url: '/pages/login/login?zd=1&isfanhui=1'
					});
					 uni.hideLoading();
		        } else if (res.cancel) {
					 uni.hideLoading();
		            console.log('用户点击取消');
		        }
		    }
		});
		
		return false;
		
	  
	  
	  //return false;
	  
	   // uni.hideLoading();
	  console.info("ssss");
    }
  }
  
  if (store.state.token) {//getApp().globalData.token 
	//假如有token存在 那要去把token 加到请求头里面
    //header[TOKENNAME] = 'Luma ' + getApp().globalData.token;
	//header[TOKENNAME] = 'Luma ' + store.state.token;

	// header["content-type"] = "application/x-www-form-urlencoded;charset=UTF-8";
	// header["wx-token"] = store.state.token;
	
	//全局传参
	data.user_token = store.state.token;
	// data.token = store.state.token;
	data.shop_id = store.state.userInfo.shop_id;//然后shop_id是店铺id
	
	// data.uid = store.state.userInfo.uid;//uid是登陆用户id
	// data.user_id = store.state.userInfo.user_id;//user_id是管理店铺用户id
	
  }
  //data.is_app = 1 ;
  data.login_type ='app';
  if(store.state.userInfo){//用户id 全局传
	//data.user_id = store.state.userInfo.user_id
  }
  
  if (store.state.token != undefined && store.state.token != "") {//getApp().globalData.token != undefined && getApp().globalData.token != ""
    //data.token = getApp().globalData.token;
	
	// data.token = "be09eb9024822c33f0a02632d77b5226---";
	// data.token = store.state.token;//有token 需要把token 带上
  }

  return new Promise((reslove, reject) => {
    uni.request({
      url: Url  + api,
      method: method || 'GET',
      header: header,
      data: data || {},
      success: (res) => {
		  // console.log(res)
		  // uni.hideLoading();
        if (noVerify)
          reslove(res.data, res);
        else if (res.data.code == 0)
          reslove(res.data, res);
		else if(res.data.code==-10800){
			//没登录
			// uni.navigateTo({
			//     url: '/pages/login/login?zd=1&isfanhui=2'
			// });
			
			store.commit("changetoken","");//清除
			uni.setStorageSync("token","");//清除
			
			uni.showModal({
			    title: '提示',
			    content: '您的登录信息已过期,是否去登录授权?',
				confirmText:"去授权",
				cancelText:"先逛逛",
				confirmColor:"#ff6900",
			    success:  (res)=> {
			        if (res.confirm) {
			            console.log('用户点击确定');
						 uni.hideLoading();
						uni.navigateTo({
						    url: '/pages/login/login?zd=1&isfanhui=1'
						});
						 uni.hideLoading();
			        } else if (res.cancel) {
			            console.log('用户点击取消');
						 uni.hideLoading();
			        }
			    }
			});
			
			
			reslove(res.data, res);
		}
        else if ([410000, 410001, 410002].indexOf(res.data.code) !== -1) {
          
         //??
        } else
		reslove(res.data, res);
          //reject(res.data.msg || '系统错误');
      },
      fail: (msg) => {
        reject('请求失败');
		// uni.hideLoading();
      }
    })
  });
}

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
  request[method] = (api, data, opt) => request(api, method, data, opt || {})
});


