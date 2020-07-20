# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Hot Module Replacement (HMR)

Genralmente como desarrolladores menejaremos caracteristicas de JavaScript en nuestros proyectos superior a ES6 de lso cuales el navegador no padria interpretar.

Por ello de Webpack puede usar a **Babel** como un ayudante que permite transpilar nuestro codigo moderno de JavaScript a codigo que el navegador entiende.

Para ello deberemos instalar las siguientes dependencias para poder usar Babel en Webpack.

`npm install babel-loader -D -E`
`npm install @babel-core -D -E`
`npm install @babel-preset-env -D -E`

- **babel-loader:** Interceptara nuestros archivos JS de nuestro de proyecto.

- **@babel-core:** Babel empezara a trabajar con los archivos JS interceptados por medio del archivo en el navegador.

- **@babel-preset-env:** Que caracteristicas de JS queremos que preajuste para que sea soportado en el navegador.

###### Ejemplo

***webpack_local.config.js***

```
  module:{
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
```

***.babelrc***

```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```