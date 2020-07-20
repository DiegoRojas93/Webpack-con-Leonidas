# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Hot Module Replacement (HMR)

Podemos hacer que el navegador solamente recargue las partes importante que hacemos en nuetro codigo sin recargar la pagina; esto es increible para react, vue y angular.

###### Ejemplo

**webpack_local.config.js**

```
const webpack =  require('webpack')

module.exports = {
  devServer:{
    hot: true,    //Habilita el HMR para poder trabajarlo en el codigo
    open: true,   //Abre una pestaña en el navegador
    port: 9000    //configuramos el puerto que deseamos
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use:[
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),  //Traemos el plugin que trae Webpack por defecto.
    new HtmlWebpackPlugin({
      title: `Webpack:Hot Module Repacement`
    }),
  ],
  mode: 'development'
}
```

**index.js**

```
import '../css/index.css'

import text from './text'

text()

if(module.hot){
  module.hot.accept('./text.js', () =>{
    text()
  })
}
```