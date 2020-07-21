import React, { useState } from 'react'

import Loader from './loader'
import data from './data.json'

import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

console.log(data);

function App(){
  const [loaderList, setLoaderList] = useState([])

  function handleClick (){
    setLoaderList(data.loaders)
  }

  return(
    <React.Fragment>
      <div>
        <h1>Que linda aplicación hecha en React.js</h1>
        <p className="sass">Esto es sass</p>
        <p className="less">Esto es less</p>
        <p className="stylus">Esto es stylus</p>
        <p className="post-css">Esto es postcss</p>
      </div>
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="logo" width={40}/>
      </p>
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