(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-790f3a92"],{a788:function(s,t,e){},ab28:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[1!=this.$route.query.status?e("div",[e("van-nav-bar",{attrs:{fixed:"",title:"隐私政策","left-text":"返回","left-arrow":""},on:{"click-left":s.quit}}),1!=this.$route.query.status?e("div",{staticClass:"content"},[e("span",[s._v(" 请你务必审慎阅读，充分理解“隐私政策”各条款，包括但不限于：为了向你提供拍照、OCR等个人信息。你可以在设置中查看、变更、删除个人信息并管理你的授权。 ")])]):s._e()],1):s._e(),1==this.$route.query.status?e("div",[e("van-nav-bar",{attrs:{title:"修改密码","left-arrow":""},on:{"click-left":s.quit}}),e("van-cell",{attrs:{title:s.$store.getters.userName}}),e("van-field",{attrs:{type:"password",label:"旧密码",placeholder:"请输入旧密码"},model:{value:s.oldPassword,callback:function(t){s.oldPassword=t},expression:"oldPassword"}}),e("van-field",{attrs:{type:"password",label:"新密码",placeholder:"请输入新密码"},model:{value:s.newPassword,callback:function(t){s.newPassword=t},expression:"newPassword"}}),e("van-field",{attrs:{type:"password",label:"确认新密码",placeholder:"请输入新密码"},model:{value:s.newPasswords,callback:function(t){s.newPasswords=t},expression:"newPasswords"}}),e("div",{staticClass:"login"},[e("div",{staticClass:"con"},[e("div",{staticClass:"con_04",staticStyle:{display:"flex","justify-content":"space-between"}},[e("div",{staticClass:"con_04_1 con_04_3",on:{click:s.edit_psd}},[s._v("确定修改")])])])])],1):s._e()])},o=[],i=e("7ded"),n={name:"homepage",data:function(){return{activeKey:0,userName:"",newPassword:"",newPasswords:"",oldPassword:"",code:"",status:0,psd:"",newPass:"",verifyPass:"",username:"",password:"",ischecked:!0,isAgree:!0,checked:!0}},created:function(){this.status=this.$route.query.status},methods:{quit:function(){this.$root.$emit("home",{firstPlayFlag:0}),this.$router.back()},edit_psd:function(){var s=this;""==this.oldPassword?this.$api.msg("请输入旧密码"):""==this.newPassword?this.$api.msg("请输入新密码"):""==this.newPasswords?this.$api.msg("请再次确认新密码"):Object(i["b"])({new_password:this.newPassword,old_password:this.oldPassword}).then((function(t){0==t.code?(s.$api.msg("修改成功"),s.$router.push({path:"/login"})):s.$api.msg(t.msg)}))},back:function(){this.status=0},change_sta:function(){this.status=1}}},r=n,c=(e("cfa8"),e("2877")),d=Object(c["a"])(r,a,o,!1,null,"71b0cc61",null);t["default"]=d.exports},cfa8:function(s,t,e){"use strict";var a=e("a788"),o=e.n(a);o.a}}]);
//# sourceMappingURL=chunk-790f3a92.5f452249.js.map