const path = require ('path')       // Guardamos la ruta

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname),  // Donde lo gurdaremos. __dirname: directorio donde corremos el comando de webpack
    filename: "./bundle.js"         // Nombre del archivo
  },
  mode: 'production'
}