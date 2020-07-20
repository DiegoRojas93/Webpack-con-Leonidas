# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Plugins

Los **plugins** ó **complementos** son la columna vertebral de Webpack, y son un objeto de JavaScript que tiene un metodo ***apply.**

**Los plugins sirven para hacer tareas que un loader no hace.**

para poder usarlos debemos mostrar un ejemplo claro de como inicializarlos en webpack, y lo primero que debemos hacer es instalarlos en la terminal via npm.

`npm install mini-css-extract-plugin -D -E`

`npm install html-webpack-plugin -D -E`

- **html-webpack-plugin:** Simplifica la creacion de archivos HTML.
- **mini-css-extract-plugin:** Extrae el css de desarrollo y los envia a la carpeta de produccion.

Luego de ello debemos configurar el archivo de configuracion de Webpack.

###### Ejemplo

```
const path = require ('path')

const MiniCSSExtractPlugin = require ('mini-css-extract-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
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
          {loader: MiniCSSExtractPlugin.loader},
          {loader: 'css-loader'},
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: `Plugins`
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  mode: 'development'
}
```