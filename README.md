# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### soportes preprocesadores

Genralmente necesitaremos usar preprocesadores para aplicar estilos a nuestros proyectos.

Para ello necesitaremos instalar los respectivos loaders de nuestro preporcesador que usaremos en nuestro proyecto.

`npm install sass-loader -D -E`
`npm install less-loader -D -E`
`npm install stylus-loader -D -E`
`npm install postcss-loader -D -E`

Para los preprocesadores de sass, less y stylus necesitaran sus respectivos ***peerdependecies*** (dependencias core importantes para funcionar)

`npm install node-sass -D -E`
`npm install less -D -E`
`npm install stylus -D -E`

Generalmente Postcss necesitara plugins para funcionar por ello tambien se necesitara instalarlos via npm.

`npm install postcss-nested -D -E`

**Nota:** recuerda que si usas Postcss deberas hacer la respectiva configuración en el archivo postcss.config.js

###### Ejemplo

***postcss.config.js***

```
module.export = {
  plugins: {
    'postcss-nested':{}
  }
}
```

***webpack_nombre.config.js***

```
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
        {loader: 'style-loader'},
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1 // Dara la batuta a postcss-loader antes de empezar a trabajar el css.
          }
        },
        {loader: 'postcss-loader'},
      ]
    },
    {
      test: /\.scss$/,
      use:[
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'sass-loader'},
      ]
    },
    {
      test: /\.less$/,
      use:[
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'less-loader'},
      ]
    },
    {
      test: /\.styl$/,
      use:[
        {loader: 'style-loader'},
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
}
```