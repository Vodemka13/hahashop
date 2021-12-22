import './App.css';
import React, { Component, createContext, useState } from "react";
import { useContext } from 'react';
import logosHeader from './pics/logos_header.svg'
import btnsHeader from './pics/btns_header.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react/cjs/react.development";
import ModelsCarousel from './ModelsCarousel';
import Item from './Item';
import Context from './Context';

const models = [
  {
    'title': 'Слоны',
    'desc': 'Слоненок в подарок :)',
    'cost': '100$',
    'img': 'https://i.ibb.co/5Tg1cBN/slon.jpg'
  }
]

function App() {
  
  const [itemActive, setItemActive] = useState(true)

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight / 2.7,
      left: 0, 
      behavior: 'smooth',
    });
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
      <button onClick={handleScroll} className='catalogBtn'/>
      <div className='catalogScroll'> <h3 className='btnText'> Перейти в каталог </h3> </div>
      <div className='leaveWill'> <h3 className='btnText'> Оставить заявку </h3> </div>
      <h2 className='modelsTitle'> 3D-модели </h2>
      <ModelsCarousel active = { itemActive } setActive = { setItemActive }/>
      <h2 className='modelsTitle'> Вырезки из фанеры </h2>
      <ModelsCarousel active = { itemActive } setActive = { setItemActive }/>
      <footer className='footer'>
        <span>
          <h3 className='tm'> Все торговые марки принадлежат их владельцам. Копирование составляющих частей сайта в какой бы то ни было форме без разрешения владельца авторских прав запрещено. </h3>
          <h3 className='phone'> +79163505356 </h3>
          <h3 className='mail'> hahaton-corp@yandex.ru </h3>
          <h3 className='adress'> Г. Москва, мкр. Северное Чертаново к. 809 </h3>
        </span>
        <img className='payment' src="https://i.ibb.co/Dt7FS4w/payment.png" alt="payment" border="0"/>
      </footer>

      <Item active = { itemActive } setActive = { setItemActive }/>
    </div>
  );
}

export default App;