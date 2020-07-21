# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Hot Module Replacement (HMR)

Genralmente React tiene como sintaxis JSX, el cual el navegador no puede entender. Gracias a Babel y Webpack podemos hacer que qu el navegador pueda entender nuestro codigo de una manera más sencilla.

Para que react tenga soporte en nuestro proyecto, necesitaremos instalar la siguiente dependencia.

`npm install @babel/preset-react -D -E`
`npm install react react-dom -S -E`

- **@babel/preset-react:** webpack y babel podran leer la sintaxis de react.
- **react** y **react-dom:** util para usar JSX y crear componentes en base en react.

Luego deberemos pre-establecer react en el archivo de .babelrc para que Babel entienda la sintaxis de react.

###### Ejemplo

***.babelrc***

```
{
  "plugins": [
    "@babel/plugin-transform-runtime"
  ],
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```