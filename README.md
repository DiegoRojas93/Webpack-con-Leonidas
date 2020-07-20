# Curso de webpack

**Webpack** es un empaquetador de modulos para aplicaciones JavaScript modernas. Es decir, aplicaciones como Sass, ES6 ó superiores , png, react, etc. Que es por lo común los navegadores no entienden, webpack hace posible que esta imposiblidad suceda transpilando estas tecnologias bundles que el navegador entienda. Mejorando asi la experiencia de dos actores principales: ***User Experience: production*** y la ***Developer Experience: Desallorro***

### Configuracion

1. Deberas tener instaladas estas tecnologias:

- git
- Nodejs
- npm

2. Crea la carpeta de tu proyecto e inicializa git y npm
3. Instala las Sigientes dependencias:

`npm install webpack --save-dev --save-exact`
`npm install webpack-cli --save-dev --save-exact`

Recuerda que en el archivo de package.json hay dos formas de instalar las dependencias:

**dependencies:** Son las dependencias core, es decir, que son aquellas dependencias que son esenciales para el funcionamiento de la dependencias que ayudan al desarrollo de nuestro proyecto.

**Devdependencies:** Son las dependencias que ayudan a mejorar el desarrollo de nuestro proyecto, como lo son Sass, PostCss, react, etc.