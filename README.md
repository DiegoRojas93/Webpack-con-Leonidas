# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Webpack personalizado

Para personalizar Webpack deberemos ubicar el archivo de webpack desde el archivo package.json en sus scripts

Ejemplo:
```
"build:local": "webpack --config ./local/webpack_local.config.js"
```

**Nota:** podemos cambiar el nombre del archivo de webpack que hemos personalizado pero deberemos tener en cuenta de que debera terminar con la extension.js

ejemplo:

###### webpack_local.config.js