# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Webpack Avanzado: Dynamic Link Library

Entre más librerias o dependencias corran en nuesto proyecto, más lento sera sera el build de production que hara Webpack.

https://webpack.js.org/plugins/dll-plugin/

https://webpack.js.org/plugins/dll-plugin/#dllreferenceplugin

###### Ejemplo

***webpack.dll.config.js***

```
const path = require ('path')
const webpack =  require('webpack')

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].js",
    library: '[name]'
  },
  plugins:[
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ],
  mode: 'production'
}
```

***webpack_local.config.js***

```
const path = require ('path')

const MiniCSSExtractPlugin = require ('mini-css-extract-plugin')
const webpack =  require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].js"
  },
  module:{
    rules:[
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
      }
    ]
  },
  plugins:[
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'       //Determina el nombre de los archivos css fracmentados sin entrada
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
```