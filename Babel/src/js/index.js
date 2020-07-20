import '../css/index.css'

import search from './search'
import render from './render'

const id = prompt('¿Cual es ese Pokemon?')

search(id)
  .then((data) =>{
    render(data)
  })
  .catch(() =>{
    console.log(`No hubo Pokemon`);
  })