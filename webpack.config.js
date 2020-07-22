const path = require ('path')

const MiniCSSExtractPlugin = require ('mini-css-extract-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const webpack =  require('webpack')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].js",
    publicPath: 'http://localhost:3001/',
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
          'css-loader'
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.DllReferencePlugin({
      manifest: require ('./modules-manifest.json')
    })
  ]
}