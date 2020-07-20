# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Loaders

Los **loaders** o **cargadores** son tareas que permiten transformar archivos de diferentes lenguajes (CSS, TypeScript, etc) a JavaScript o cargar imagenes en url de datos.

Los cargadores incluso permite importar archivos de css directamente a sus archivos de JavaScript.

**Los cargadores se evaluan de abajo hacia arriba.** Y para empezarlos a utilizarlos necesitaremos descargar sus respectivas dependencias.

`npm install sass-loader css-loader style-loader -D -E`

- **sass-loader:** carga el archivo sass en el que estamos trabajando y lo transpila a css.

- **css-loader:** toma el css y lo devuelve a datos que podran ser leidos por medio de ***imports*** ó ***url()*** en nuestros archivos JavaScript cuando trabajemos en el proyecto.

- **style-loader:** Inyecta los estilos a la etiqueta head de nuestro html por medio del JavaScript.

###### Ejemplo

```
module:{
    rules:[
      {
        test: /\.css$/,
        use:[
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {modules:true}
          },
          {loader: 'sass-loader'},
        ]
      }
    ]
  }
```