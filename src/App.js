import './App.css';
import React, { Component } from "react";
import Card from './Card';
import logosHeader from './pics/logos_header.svg'
import btnsHeader from './pics/btns_header.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useEffect } from "react/cjs/react.development";



const models = [
  {
    'title': 'Слоны',
    'desc': 'Слоненок в подарок :)',
    'cost': '100$',
    'img': 'https://i.ibb.co/5Tg1cBN/slon.jpg'
  }
]




function App() {

  useEffect(() => {
    window.scrollTo(0, 0 )
  }, [])

  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    autoPlay: true,
    autoPlaySpeed: 2000,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 4,
    className: "modelsSlider"
  }

  const settingsPrev = {
    dots: false,
    fade: false,
    infinite: true,
    slidesToShow: 1,
    autoPlay: true,
    autoPlaySpeed: 100,
    speed: 400,
    arrows: true,
    slidesToScroll: 1,
    className: "sliderPrev",
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
  }

  return (
    <div className="wrapper">
      <header className='header'>
        <img className='logos_header' src={logosHeader}/>
        <img className='btns_header' src={btnsHeader}/>
      </header>
      <h1 className='title'> Магазин авторской 3D-продукции. </h1>
      <h2 className='desc'> Мы изготавливаем 3D-модели и вырезки уникального дизайна и по вашему заказу. </h2>
      <div className='catalogScroll'> <h3 className='btnText'> Перейти в каталог </h3> </div>
      <div className='leaveWill'> <h3 className='btnText'> Оставить заявку </h3> </div>

      <Slider {...settingsPrev}>
        <div>
          <img className='prevImg' src="https://i.ibb.co/23RmnNB/prev1.jpg" alt="prev1" border="0"/>
        </div>
        <div>
          <img className='prevImg' src="https://i.ibb.co/NSKyFBp/prev2.jpg" alt="prev2" border="0"/>
        </div>
      </Slider>

      <h2 className='modelsTitle'> 3D-модели </h2>
      <Slider {...settings}>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
      </Slider>
    </div>
  );
}

export default App;