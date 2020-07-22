const path = require ('path')

const MiniCSSExtractPlugin = require ('mini-css-extract-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const webpack =  require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].js",
    publicPath: 'dist/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use:[
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {loader: 'postcss-loader'},
        ]
      },
      {
        test: /\.scss$/,
        use:[
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ]
      },
      {
        test: /\.less$/,
        use:[
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {loader: 'css-loader'},
          {loader: 'less-loader'},
        ]
      },
      {
        test: /\.styl$/,
        use:[
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {loader: 'css-loader'},
          {loader: 'stylus-loader'},
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000,
          }
        }
      },
    ]
  },
  plugins:[
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dll-Plugin',
      template: path.resolve(__dirname, 'index.html')
    }),
    new webpack.DllReferencePlugin({
      manifest: require ('./modules-manifest.json')
    })
  ],
  mode: 'production',
}