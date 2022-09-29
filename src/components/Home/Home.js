import React from 'react'
import Box from './Box'
import Slider from './Slider'
import Slider2 from './Slider2'
import './Home.css'
import Video from './Video'

const Home = () => {
  
  return (
    <div id="home">
      <Slider/>
      <Box/>
      <Slider2/>
      <Video/>
    </div>
  )
}

export default Home
