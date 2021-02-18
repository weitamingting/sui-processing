const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'sui-processing': './src/index.js',
    'sui-processing.min': './src/index.js'
  },
  output: {
    filename: "[name].js",
    libraryExport: "default",
    library: "SuiProcessing",
    libraryTarget: "umd",
    path: path.resolve(__dirname, 'dist')
  },
  mode: "none",
  optimization: {
    minimize: true,
    minimizer: [
        new UglifyJsPlugin({
          include: /\.min\.js$/,
        }),
      ],
  },
  devServer: {
    port: 7000,
    inline:true,
    contentBase: path.join(__dirname, "dist")
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module:{
		rules:[
			{
				test: /\.js$/,
				 exclude: /node_modules/, 
				 loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          }, {
              loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          }, {
              loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
		]
	},
  plugins: [

  ]
};