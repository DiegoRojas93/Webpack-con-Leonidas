# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### webpack-cli

Desde la version 4 de Webpack, se incluyo un **CLI** ó ***Command line interface*** (interfaz de linea de comando) el cual es un paquete que nos permite tener la habilidad de manipular los comandos de webpack desde la terminal de comandos del computador.

Para poder llamarla deberemos usar **npx** seguido del comando de webpack en la terminal.

`npx webpack --entry ./index.js --output ./bundle.js`

Webpack nos da la opcion de configuracion ***--mode*** el cual si no la configuramos desde el principio nos dara por defecto el modo de configuracion de **production.**

- **--mode production:** codigo de 1 sola linea
- **--mode development:** codigo entendible para el desarrollador