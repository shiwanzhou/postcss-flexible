const path=require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:{
        main:__dirname+'/src/main.js'       //入口
    },
    output:{
        filename:'bundle.js',               //输出的文件名
        path:path.resolve(__dirname,'dist') //输出文件所在的目录
    },
    module: { // 如何处理项目中不同类型的模块
        rules: [ // 用于规定在不同模块被创建时如何处理模块的规则数组
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, '/'),
            },
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/index.css') //css scss less文件打包生成单个的css文件
    ]
}