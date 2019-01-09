
const path = require('path')

//启用热更新的第二步
const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')
//只要是插件都需要放在plugin里面去

module.exports = {
	entry:path.join(__dirname,'./src/main.js'),
	//入口 出口 文件名
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},

	
	devServer:{
	open:true,//自动打开浏览器
	port:3000,//设置启动时候的端口
	contentBase:'src',//指定托管的根目录
	hot:true //启用热更新
	},//配置dev-server的第二种方式
	
plugins:[
	new webpack.HotModuleReplacementPlugin(),//new 一个对象启用热更新的第三步
    new htmlWebpackPlugin({
		//创建一个在内存中生成html页面的插件
	 template:path.join(__dirname,'./src/index.html'),
	 //根据指定模板页面将来会指定的页面路径，去生成内存中的页面
	 filename:'index.html'//指定生成的页面的名称
	})
],
module:{
	rules:[
	{test:/\.css$/,use:['style-loader','css-loader']},
	{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
    {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
    {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=72591'}, 
    {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
	{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
	{test:/\.vue$/,use:'vue-loader'}
]
},
 resolve:{
		alias:{//这是设置vue导入时候包的路径
			"vue$":"vue/dist/vue.js"
		}
	}


	}
	
	//es6中的写法 构造函数
// 	class Person{
// 		//使用static关键字可以定义静态属性
// 		//所谓的静态属性就是可以直接通过类名访问的属性
// 		//实例属性就是只能通过类的实例来访问的属性
// 		static info = {name:'zs',age:20}
// 	}
// 	console.log(Person.info)
	//webpack只能默认一些语法 所以需要babel来打包给bundle.js
	//1.npm i babel-core babel-loader babel-plugin-transform-runtime -D
	
	//2.npm i babel-preset-env babel-preset-stage-0 -D
	//2.1{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
	//要排除node_modules
	//3.是json文件 只能用字符串双引号
	// var pl = new Person()
		
	