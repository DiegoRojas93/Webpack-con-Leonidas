import React, { useState } from 'react'

import Loader from './loader'
import data from './data.json'

console.log(data);

function App(){
  const [loaderList, setLoaderList] = useState([])

  function handleClick (){
    setLoaderList(data.loaders)
  }

  return(
    <React.Fragment>
      <div>
        Que linda aplicación hecha en React.js
      </div>
      <ul>
        {
          loaderList.map(item => <Loader {...item} key={item.id} />)
        }
      </ul>

    <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </React.Fragment>
  )
}

export default App