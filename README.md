# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### webpack.config

Si tenermos muchas configuraciones que debemos ejecutar en la terminal de comandos por medio de Webpack-CLI, no seria la mejor forma de hacerlo en terminos de tiempo y rendimiento.

webpack.config es un archivo de JS que compila nuestras configuraciones de webpack que permite ejecutarlo en una sola linea de codgo en nuestra terminal.

```
const path = require ('path')

module.exports = {
  entry: // Indica que modulos deberia tomar para comenzar a trabajar.
  output: // Indica donde emitir los paquetes que construye y como deberia construirlos.
  loaders: // Permite que webpack pueda procesar otros tipos de archivos como: Sass, CSS, react, Tailwindcss, etc. Convirtiendolos a archivos JavaScript y Json que solo pueda comprender.
  plugins: //Ayudan a dar tareas mas especificas que los loaders no pueden hacer.
  mode: // Podemos configurar el modo en el que los archivos del output saltran despues de que Webpack termine su trabajo: development ó production.
}
```