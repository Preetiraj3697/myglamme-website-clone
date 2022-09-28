import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";
import "./Slider.css"
class Slider2 extends Component {
  render() {
    let data = [
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Soft-Matte-post-1-Poppy-Pink.jpg",
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Facewash_3.jpg",
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Hi-Shine-Post-1-Mauve-Struck.jpg",
      
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/MHML-(1).jpg",
       
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Artboard-1-(1)-(1).jpg"
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Rare-(1).jpg"
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Liquid-Matte-Lipstick-post-1-Envy-Me.jpg"
      }
      ,
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/OTTP-(1).jpg"
      }
    ];
    let buttonSetting = {
      placeOn: "middle-inside",
      hoverEvent: false,
      style: {
        left: {
          height: "60px",
          width: "60px",
          color: "#929393",
          background: "white",
          borderRadius: "50%",
          fontSize:"32px",
          fontWeight:"600",
        },
        right: {
          height: "60px",
          width: "60px",
          color: "#929393",
          background: "white",
          borderRadius: "50%",
          fontSize:"32px",
          fontWeight:"600"
        }
      }
    };
    return (
      <div>
      <h3 className='h4'>BEST SELLER</h3>
      <CarouselSlider
        slideItems={data}
        accEle={{ dots: true }}
        sliderBoxStyle={{
          width: "95%",
          height: "auto",
          justifyContent:"center",
          margin:"40px",
          color:"black"
        }}
        buttonSetting={buttonSetting}
      
      />
        </div>
    );
  }
}

export default Slider2;
