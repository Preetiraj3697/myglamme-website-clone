import React from 'react'
import './Slider.css'
const Video = () => {
  return (
   <div id="video">
    <h1 className='h4'>Video MYGLAMM</h1>
      <iframe
            src="https://www.myglamm.com/images/TellMyGlammWhatYouWant.webm"
            width="100%"
            height="450px"
            frameborder="0"
            allow="muted"
            allowFullScreen
          />
   </div>
  )
}

export default Video
