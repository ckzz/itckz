//1
import Vue from 'vue'
//2
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//3

//导入全部ui组件
import MintUI from 'mint-ui'
import'mint-ui/lib/style.css'
//按需导入组件
import {Header} from 'mint-ui'
import "./lib/mui/css/mui.min.css"
Vue.component(Header.name,Header)
Vue.use(MintUI)
import app from './App.vue'
var vm = new Vue({
	el:'#app',
	data:{},
	render:c=>c(app)
})
