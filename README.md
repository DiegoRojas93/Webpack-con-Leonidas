# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Multiples puntos de entrada

A veces necesitaremos hacer multiples ***entry points.** webpack lo soluciona esta necesidad llamandolo asi **object syntax.**

sintaxis del entry:

`entry: {<nombre_del_chunk>: "string" | ["string_1" , "string_2"]}`

Si la confuguracion del entry tiene más de un chuck "fracmento" debera usar sustituciuones para asegurarse que cada archivo tenga un nombre unico.

sintaxis del entry:

`output:{ filename: '[name].js'}`

###### Ejemplo

```
const path = require ('path')

module.export = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    precios: path.resolve(__dirname, 'src/js/precios.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js')
  }
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
}
```