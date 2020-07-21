# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Webpack Avanzado: Code Spliting

Generalmente cuando creamos un proyecto que depende de otros chuncks (fragmentos) como por ejemplo dos paginas de react que dependan de react y react-dom o dos paginas que compatan los mismo imports, al ser construidos por webpack estos imports, componentes o dependecias seran duplicadas para cada uno de los archivos que creamos.

Webpack crea los **code spliting** (division de codigo) que permite identificar el codigo que se repite en cada uno de los entry points de nuestro prouecto, empaquetandolos en un ***commoun bundle.** Esto mejórara el performance del proyecto.

https://webpack.js.org/plugins/split-chunks-plugin/

###### Ejemplo

***webpack_nombre.config.js***

```
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    count: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  }
  optimization: [
    splitChuncks: {
      chuncks: 'all',    // Que chuncks quiere que se apliquen
      minSize: 0,      // Tamaño en Bytes que tendra el chunck
      name: 'commons'   // Nombre del archivo que almacenara los chuncks (fragmentos de codigo repetido) que prodra ser repártido a nuestos proyectos
    }
  ]
}
```