# Practicando el uso de Webpack en un proyecto de React

### dependecies

'npm install @babel/runtime -S -E'

### dev-Dependecies

`npm install webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader file-loader babel-loader @babel/core @babel/preset-env mini-css-extract-plugin url-loader @babel/preset-react @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties add-asset-html-webpack-plugin -D -E`

----

### Versionado, limpiando y comprimiendo archivos JS y CSS

Generalmente tendremos la necesidad de actualizar nuestro proyecto más de una sola vez, pero cuando lo hacemos, los usuarios no podran ver estas actualizaciones debido al ***cache*** de su navegador.

Para limpiar el cache debemos añadir un ***hash*** a nuestros archivos (codigo para identificar los archivos de una forma unica) y ademas de ello deberemos instalar la sigiente dependencia que borrara el cache del navegador de los archivos que contenga el hash que no se utilicen.

`npm install clean-webpack-plugin -D -E`

###### Ejemplo:

***webpack.config.js***

```
const { CleanWebpackPlugin } = require ('clean-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].[hash].js",
    publicPath: 'http://localhost:3001/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  module:{
    rules: [
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: '[hash].[ext]',
            outputPath: 'assets'
          }
        }
      },
    ]
  },
  plugins:[
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'], // borrara los archivos que le indiquemos antes de hacer el build
    })
  ]
}
```
----

Para poder comprimir nuestro css y mejorar la compresion de nuestro JS deberemos instalar las siguientes dependencias.

`npm install optimize-css-assets-webpack-plugin -D -E`
`npm install terser-webpack-plugin -D -E`

###### Ejemplo:

***webpack.config.js*** y en ***webpack.dll.config.js***

```
const OptimizeCSSAssetsPlugin = require ('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require ('terser-webpack-plugin')

module.exports = {
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
}
```