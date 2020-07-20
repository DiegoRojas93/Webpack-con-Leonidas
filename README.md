# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Servidor de desarrollo

Podemos usar dos habilidades del modo de desarrollo de Webpack para que nuestro Developer Experience sea mucho mejor de lo que es a la hora de programar.

- Que Webpack escuche los cambios de hacemos a nuestro codigo.
- Que el navegador recargue la pagina al ver los cambios hechos.

Para ello deberemos descargar la sigiente dependencia.

`npm install webpack-dev-server -D -E`

Luego deberemos configurar nuestro archivo **Package.json** en sus scripts
###### Ejemplo

```
"scripts": {
    "build": "webpack",
    "build:dev": "webpack-dev-server --config ./webpack-dev-server/webpack_local.config.js"
  },
```