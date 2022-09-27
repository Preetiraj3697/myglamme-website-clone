import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";
import "./Slider.css";

class Slider extends Component {
  render() {
    let data = [
      {
        imgSrc:
          "https://files.myglamm.com/site-images/original/TGLF-sept-main-KV-1920x527_1.jpg",
      },
      {
        imgSrc:
          "https://files.myglamm.com/site-images/original/Carousel-(Desktop)---1920-527_4.jpg",
      },
      {
        imgSrc:
          "https://files.myglamm.com/site-images/original/1920x527MM.jpg",
      },
      {
        imgSrc:
          "https://files.myglamm.com/site-images/original/1920x527lit_1.jpg",
      },
      {
        imgSrc:
          "https://files.myglamm.com/site-images/original/1920x527MM.jpg",
      },
    ];
    // let data1 = [
    //   {
    //     imgSrc:
    //       "https://rukminim1.flixcart.com/flap/750/334/image/98b694e75a6b77f3.jpg?q=90",
    //   },
    //   {
    //     imgSrc:
    //       "https://rukminim1.flixcart.com/flap/750/334/image/e349a2c12ce65f88.jpg?q=90",
    //   },
    //   {
    //     imgSrc:
    //       "https://rukminim1.flixcart.com/flap/750/334/image/e988007225ebe5e9.jpg?q=90",
    //   },
    //   {
    //     imgSrc:
    //       "https://rukminim1.flixcart.com/flap/750/334/image/86c2fc7a6e6025be.jpg?q=90",
    //   },
    //   {
    //     imgSrc:
    //       "https://rukminim1.flixcart.com/flap/750/334/image/6686d18a2d7f9543.jpg?q=90",
    //   },
    // ];
    let manner = {
      autoSliding: { interval: "3s" },
      circular: true,
    };

    let accEleSetting = { dots: false };

    let buttonSetting = {
      placeOn: "middle-inside",
      style: {
        left: {
          height: "100px",
          width: "60px",
          color: "black",
          margin: "0",
          fontSize: "30px",
          background: "white",
          opacity: "1",
          borderRadius:"50%",
          fontWeight:"1000"
        },
        right: {
          height: "100px",
          width: "60px",
          color: "balck",
          margin: "0",
          fontSize: "40px",
          background: "white",
          opacity: "1",
          borderRadius:"50%",
          fontWeight:"1000"
        },
      },
    };
    // let buttonSetting1 = {
    //   placeOn: "middle-inside",
    //   style: {
    //     left: {
    //       height: "60px",
    //       width: "30px",
    //       color: "black",
    //       fontSize: "30px",
    //       background: "white",
    //       opacity: "1",
    //     },
    //     right: {
    //       height: "60px",
    //       width: "30px",
    //       color: "balck",
    //       fontSize: "30px",
    //       background: "white",
    //       opacity: "1",
    //     },
    //    },
    // };

    return (
      <div className="offers_container">
        <div className="offer_slider">
          <CarouselSlider
            slideItems={data}
            manner={manner}
            accEle={accEleSetting}
            buttonSetting={buttonSetting}
            sliderBoxStyle={{
              width: "98.6%",
              height: "620px",
              background: "transparent",
              margin: "0 0 0 10px",
            }}
            itemsStyle={{ padding: "0px", margin: "40px 0px 0px 0px" }}
          />
        </div>
        {/* <div className="offer_box">
          <CarouselSlider
            slideItems={data1}
            manner={manner}
            accEle={accEleSetting}
            buttonSetting={buttonSetting1}
            sliderBoxStyle={{
              width: "98%",
              height: "320px",
              background: "transparent",
            }}
            itemsStyle={{ padding: "0px", margin: "0px 0px" }}
          /> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Slider;

