
const path = require('path');
const fs =require('fs');

const  lessToJs = require('less-vars-to-js');  //读取文件中的主题来达到改变的作用
const filepath = path.join(__dirname, './css/ant-default-vars.less');
const themeVariables = lessToJs(fs.readFileSync(filepath, 'utf8'));

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: {
        main:'./js/index.js'   //不采用简写:'sdsdsd'
    },
    output: {
        path:__dirname,  //解决不同系统的路径引用问题
        filename: 'bundle.js',
       // publicPath: './build/'
        //publicPath  //按需加载需要的目录

    },
    devtool : 'source-map',
    module: {
        //模块配置 使用Babel Turn ES2015 code in to es5
        rules: [ ///包含Rule的数组 Rule有三部分 condition result nested rule‘嵌套规则’
            {
                use: 'babel-loader',
                test: /\.js$/,    //筛选加载的文件名 使用正则表达式
                exclude: /node_modules/
                /*options: {
                    plugins:[
                        ['import',{libraryName:"antd",style:true}]
                    ]
                }*/
            },
            {
                test: /\.css$/,   //加载css
                use: ['style-loader','css-loader'],
                //内联打包css
                /* use: ExtractTextPlugin.extract({     //独立打包css
                     fallback:"style-loader",
                     use:"css-loader"
                 }),*/

            },
            {                  //加载jsx
                test:/\.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {                       //css和less不能使用exclude --node_module 否则加载会出错
                test:/\.less$/,
                use: [
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: themeVariables    //加载自定义主题
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: "./",
        compress: true,
        port: 9000,
        open:true
        //必须和output中的路径相同
    },
    plugins: [
        //new ExtractTextPlugin("styles.css")
    ]
};

module.exports = config;

//打包antd 文章
//https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f