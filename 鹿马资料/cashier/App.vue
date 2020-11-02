<script>
	// var allKeyCodeTemp ='';
	// var preKeyCode = '';
 //    var longyoungKeyEventListen;
	// var resultStrFinal='';
	// var KEY_MAP = {
	// 	"KEYCODE_GRAVE": {
	// 		"normalChar": "`",
	// 		"shiftChar": "~"
	// 	},
	// 	"KEYCODE_0": {
	// 		"normalChar": "0",
	// 		"shiftChar": ")"
	// 	},
	// 	"KEYCODE_1": {
	// 		"normalChar": "1",
	// 		"shiftChar": "!"
	// 	},
	// 	"KEYCODE_2": {
	// 		"normalChar": "2",
	// 		"shiftChar": "@"
	// 	},
	// 	"KEYCODE_3": {
	// 		"normalChar": "3",
	// 		"shiftChar": "#"
	// 	},
	// 	"KEYCODE_4": {
	// 		"normalChar": "4",
	// 		"shiftChar": "$"
	// 	},
	// 	"KEYCODE_5": {
	// 		"normalChar": "5",
	// 		"shiftChar": "%"
	// 	},
	// 	"KEYCODE_6": {
	// 		"normalChar": "6",
	// 		"shiftChar": "^"
	// 	},
	// 	"KEYCODE_7": {
	// 		"normalChar": "7",
	// 		"shiftChar": "&"
	// 	},
	// 	"KEYCODE_8": {
	// 		"normalChar": "8",
	// 		"shiftChar": "*"
	// 	},
	// 	"KEYCODE_9": {
	// 		"normalChar": "9",
	// 		"shiftChar": "("
	// 	},
	// 	"KEYCODE_MINUS": {
	// 		"normalChar": "-",
	// 		"shiftChar": "_"
	// 	},
	// 	"KEYCODE_EQUALS": {
	// 		"normalChar": "=",
	// 		"shiftChar": "+"
	// 	},
	// 	"KEYCODE_LEFT_BRACKET": {
	// 		"normalChar": "[",
	// 		"shiftChar": "{"
	// 	},
	// 	"KEYCODE_RIGHT_BRACKET": {
	// 		"normalChar": "]",
	// 		"shiftChar": "}"
	// 	},
	// 	"KEYCODE_BACKSLASH": {
	// 		"normalChar": "\\",
	// 		"shiftChar": "|"
	// 	},
	// 	"KEYCODE_SEMICOLON": {
	// 		"normalChar": ";",
	// 		"shiftChar": ":"
	// 	},
	// 	"KEYCODE_APOSTROPHE": {
	// 		"normalChar": "'",
	// 		"shiftChar": "\""
	// 	},
	// 	"KEYCODE_COMMA": {
	// 		"normalChar": ",",
	// 		"shiftChar": "<"
	// 	},
	// 	"KEYCODE_PERIOD": {
	// 		"normalChar": ".",
	// 		"shiftChar": ">"
	// 	},
	// 	"KEYCODE_SLASH": {
	// 		"normalChar": "/",
	// 		"shiftChar": "?"
	// 	},
	// 	"KEYCODE_A": {
	// 		"normalChar": "a",
	// 		"shiftChar": "A"
	// 	},
	// 	"KEYCODE_B": {
	// 		"normalChar": "b",
	// 		"shiftChar": "B"
	// 	},
	// 	"KEYCODE_C": {
	// 		"normalChar": "c",
	// 		"shiftChar": "C"
	// 	},
	// 	"KEYCODE_D": {
	// 		"normalChar": "d",
	// 		"shiftChar": "D"
	// 	},
	// 	"KEYCODE_E": {
	// 		"normalChar": "e",
	// 		"shiftChar": "E"
	// 	},
	// 	"KEYCODE_F": {
	// 		"normalChar": "f",
	// 		"shiftChar": "F"
	// 	},
	// 	"KEYCODE_G": {
	// 		"normalChar": "g",
	// 		"shiftChar": "G"
	// 	},
	// 	"KEYCODE_H": {
	// 		"normalChar": "h",
	// 		"shiftChar": "H"
	// 	},
	// 	"KEYCODE_I": {
	// 		"normalChar": "i",
	// 		"shiftChar": "I"
	// 	},
	// 	"KEYCODE_J": {
	// 		"normalChar": "j",
	// 		"shiftChar": "J"
	// 	},
	// 	"KEYCODE_K": {
	// 		"normalChar": "k",
	// 		"shiftChar": "K"
	// 	},
	// 	"KEYCODE_L": {
	// 		"normalChar": "l",
	// 		"shiftChar": "L"
	// 	},
	// 	"KEYCODE_M": {
	// 		"normalChar": "m",
	// 		"shiftChar": "M"
	// 	},
	// 	"KEYCODE_N": {
	// 		"normalChar": "n",
	// 		"shiftChar": "N"
	// 	},
	// 	"KEYCODE_O": {
	// 		"normalChar": "o",
	// 		"shiftChar": "O"
	// 	},
	// 	"KEYCODE_P": {
	// 		"normalChar": "p",
	// 		"shiftChar": "P"
	// 	},
	// 	"KEYCODE_Q": {
	// 		"normalChar": "q",
	// 		"shiftChar": "Q"
	// 	},
	// 	"KEYCODE_R": {
	// 		"normalChar": "r",
	// 		"shiftChar": "R"
	// 	},
	// 	"KEYCODE_S": {
	// 		"normalChar": "s",
	// 		"shiftChar": "S"
	// 	},
	// 	"KEYCODE_T": {
	// 		"normalChar": "t",
	// 		"shiftChar": "T"
	// 	},
	// 	"KEYCODE_U": {
	// 		"normalChar": "u",
	// 		"shiftChar": "U"
	// 	},
	// 	"KEYCODE_V": {
	// 		"normalChar": "v",
	// 		"shiftChar": "V"
	// 	},
	// 	"KEYCODE_W": {
	// 		"normalChar": "w",
	// 		"shiftChar": "W"
	// 	},
	// 	"KEYCODE_X": {
	// 		"normalChar": "x",
	// 		"shiftChar": "X"
	// 	},
	// 	"KEYCODE_Y": {
	// 		"normalChar": "y",
	// 		"shiftChar": "Y"
	// 	},
	// 	"KEYCODE_Z": {
	// 		"normalChar": "z",
	// 		"shiftChar": "Z"
	// 	}
	// };
export default {
	
// 	data() {
		// return {
		// 	resultStr: "",
		// 	tag: "1", //不必理会，固定 1 就好
		// 	resultStrFinal: ""
		// }
	// },
	onLaunch: function() {
		
		//引用插件
		// var longyoungKeyEventListen = uni.requireNativePlugin('longyoung-KeyEventListen');
				
		// let that = this;
		//设置监听，可设置多个，回调按 tag 区分哪个监听返回。
		// longyoungKeyEventListen.setOnKeyEventListenerLy({
		// 	tag: that.tag //不必理会，固定 1 就好
		// }, result => {
		// 	console.log('监听成功');
		// 	if (result && result.return_code == 'SUCCESS') {
		// 		if (result.return_type == 'dataBack') { //return_type=dataBack是返回数据标识，返回的数据在此获取
		// 			that.handleData(result);
		// 		}
		// 	}
		// });
		// this.getClientId()
		
		
		
		console.log('App Launch');
	},
	onShow: function() {
		
		
		// 获取设备信息
		plus.device.getInfo({
		        success:function(e){
	
		            // console.log('getDeviceInfo success: '+JSON.stringify(e),e.uuid);
					uni.setStorageSync('clientid', e.uuid);
					
		        },
		        fail:function(e){
		            console.log('getDeviceInfo failed: '+JSON.stringify(e));
		        }
		    });
		
		// console.log("IMEI: "+plus.device.imei);
		
		
		
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	
	
	methods:{
		
		
		
		
		
		//获取客户端ID
			getClientId() {
				//获取客户端ID和版本号
				var clientid = '';
				// #ifdef APP-PLUS
			
				// 安卓系统
				plus.device.getInfo()({
					success: function(e) {
						clientid = e.aaid;
						console.log(clientid);
						uni.setStorageSync('clientid', clientid);
					},
					fail: function(e) {
						console.log(e);
					}
				});
				//老版本、安卓模拟器
				if (clientid == '') {
					clientid = plus.device.uuid;
					uni.setStorageSync('clientid', clientid);
				}
				// #endif
				return clientid;
				
				console.log(clientid)
			},
		
	// 	handleData(result){
	// 		let that = this;
	// 		console.log('这里啊啊啊啊',result);
	// 		if (result.return_type == 'dataBack') {
	// 			if (result.action == 'ACTION_UP') { //只取弹起事件
	// 				let keyCode = result.keyCode;
	// 				if (keyCode == 'KEYCODE_ENTER') { //扫码结束
	// 					that.resultStrFinal = allKeyCodeTemp; //最终拼接的字符串赋值
	// 					console.log(allKeyCodeTemp,'拼接的字符串')
	// 					allKeyCodeTemp = '';
	// 					preKeyCode = '';
	// 				} 
	// 				else if (keyCode == 'KEYCODE_SHIFT_LEFT' || keyCode == 'KEYCODE_SHIFT_RIGHT') { //转换键
	// 					preKeyCode = 'KEYCODE_SHIFT_RIGHT';
	// 				} else {
	// 					if (preKeyCode == 'KEYCODE_SHIFT_RIGHT') { //转换键，拿大写
	// 						if (keyCode && KEY_MAP[keyCode]) {
	// 							allKeyCodeTemp += KEY_MAP[keyCode].shiftChar;
	// 						}
	// 					} else {
	// 						if (keyCode && KEY_MAP[keyCode]) {
	// 							allKeyCodeTemp += KEY_MAP[keyCode].normalChar;
	// 						}
	// 					}
	// 					preKeyCode = '';
						
	// 				}
		
	// 			}
	// 		}
	// 	}
	},
	
	
};
</script>

<style lang='scss'>
	@import './overall.css';
	
	
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
/* @font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
} */
/* #endif */
</style>
