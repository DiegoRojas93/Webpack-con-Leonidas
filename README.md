# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### soportes de imagenes, fuentes y videos

Genralmente en nuestros proyectos necesitaremos usar imagenes, videos y fuentes (@imports a css) que son importados a JavaScript ó a react.

para ello necesitaremos usar 2 loaders para que transforme estos archivos a base64 que entendera JavaScript ó react.

`npm install url-loader -D -E`
`npm install file-loader -D -E`

- **url-loader:** convierte los archivos en URL base64.
- **file-loader:** Emite el archivo que no puede procesar el url-loader al directorio de salida.

###### Ejemplo

***webpack_nombre.config.js***

```
module:{
  rules:[
    {
      test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 90000,
        }
      }
    }
  ]
}
```