# Practicando el uso de Webpack en un proyecto de React

### dependecies

'npm install @babel/runtime -S -E'

### dev-Dependecies

npm install webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader file-loader babel-loader @babel/core @babel/preset-env mini-css-extract-plugin url-loader @babel/preset-react @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D -E

----

**Nota:** recuerda que si configuramos en el localhost con el puerto ***3001*** esto nos servira para que nuestro proyecto haga un deploy en github pages ó en algun otro lado.

###### Ejemplo:

***webpack.config.js***

```
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: "js/[name].js",
  publicPath: 'http://localhost:3001/',
  chunkFilename: 'js/[id].[chunkhash].js'
}
```