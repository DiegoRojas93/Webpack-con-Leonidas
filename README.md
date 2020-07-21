# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Webpack Avanzado: Dynamic Link Library

Webpack trae una caracteristica muy especial dentro del code spliting, llamada **Dynamic imports** (importaciones dinamicas) la cual implica traer un import o un chunck cada vez que el usuario interactue en la pagina de tu proyecto, por ejemplo: dar un click a un boton y te triga por medio de una peticion un loader o un componente a tu pagina principal, esto ayudara en el performance de tu proyecto en la web.

https://webpack.js.org/guides/code-splitting/#dynamic-imports

Para soportar los Dinamics imports debemos instalar la siguiente dependencia.

`npm install @babel/plugin/syntax-dynamic-import -D -E`

###### Ejemplo

***.babelrc***

```
{
  "plugins": [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime"
  ],
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

***webpack_local.config.js***

```
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: "js/[name].js",
  publicPath: 'dist/',
  chunkFilename: 'js/[id].[chunkhash].js'
},
```

***alert.js***

```
function alerta (message){
  alert (message)
}

export {
  alerta
}
```

***App.js***

```
import React, { useState } from 'react'

function App(){
  const [loaderList, setLoaderList] = useState([])

  async function handleClick (){
    setLoaderList(data.loaders)

    const { alerta } = await import ('./alert')

    alerta(`Este modulo ha cargado dinamicamente`)
  }

  return(
    <React.Fragment>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </React.Fragment>
  )
}

export default App
```