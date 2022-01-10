import './App.css';
import React, { useState, useContext } from "react";
import logosHeader from './pics/logos_header.svg'
import btnsHeader from './pics/btns_header.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ModelsCarousel from './ModelsCarousel';
import Item from './Item';
import Cart from './Cart';
import Context from './Context';
import { Cookies } from 'react-cookie';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [models, setModels] = useState([
    {
      'id': 1, 'name': 'Слоны', 'desc': 'Слоненок в подарок :)', 'fulldesc': 'Вот такие вот прикольные слоны) Еще и слоненок в подарок) Я ни на что не намекаю, но мне кажется, что надо брать)', 'bill': '100₽', 'img': 'https://i.ibb.co/5Tg1cBN/slon.jpg'
    },
    {
      'id': 2, 'name': 'Коты', 'desc': 'Поверьте это коты :)', 'fulldesc': 'Вот такие вот прикольные слоны) Еще и слоненок в подарок) Я ни на что не намекаю, но мне кажется, что надо брать)', 'bill': '100₽', 'img': 'https://i.ibb.co/5Tg1cBN/slon.jpg'
    },
    {
      'id': 3, 'name': 'Собаки', 'desc': 'Поверьте это собаки :)', 'fulldesc': 'Вот такие вот прикольные слоны) Еще и слоненок в подарок) Я ни на что не намекаю, но мне кажется, что надо брать)', 'bill': '100₽', 'img': 'https://i.ibb.co/5Tg1cBN/slon.jpg'
    },
    {
      'id': 4, 'name': 'Попугаи', 'desc': 'Поверьте это попугаи :)', 'fulldesc': 'Вот такие вот прикольные слоны) Еще и слоненок в подарок) Я ни на что не намекаю, но мне кажется, что надо брать)', 'bill': '100₽', 'img': 'https://i.ibb.co/5Tg1cBN/slon.jpg'
    },
    {
      'id': 5, 'name': 'Слоны', 'desc': 'Слоненок в подарок :)', 'fulldesc': 'Вот такие вот прикольные слоны) Еще и слоненок в подарок) Я ни на что не намекаю, но мне кажется, что надо брать)', 'bill': '100₽', 'img': 'https://i.ibb.co/5Tg1cBN/slon.jpg'
    },
    {
      'id': 6, 'name': 'Слоны', 'desc': 'Слоненок в подарок :)', 'fulldesc': 'Вот такие вот прикольные слоны) Еще и слоненок в подарок) Я ни на что не намекаю, но мне кажется, что надо брать)', 'bill': '100₽', 'img': 'https://i.ibb.co/5Tg1cBN/slon.jpg'
    },
    {
      'id': 7, 'name': 'Слоны', 'desc': 'Слоненок в подарок :)', 'fulldesc': 'Вот такие вот прикольные слоны) Еще и слоненок в подарок) Я ни на что не намекаю, но мне кажется, что надо брать)', 'bill': '100₽', 'img': 'https://i.ibb.co/5Tg1cBN/slon.jpg'
    }
  ])
  const [cart, setCart] = useState([
    [1, 1], [2, 2], [4, 228]
  ])

  return(
    <div>
      <Context.Provider value={{models, cart}}>
        <Router>
          <RoutesFunc/>
        </Router>
      </Context.Provider>
      
    </div>
  )
}

const Shop = () => {
  const models = useContext(Context);
  
  const [itemActive, setItemActive] = useState(false)
  const [currentItem, setCurrentItem] = useState({})

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight / 2.7,
      left: 0,
      behavior: 'smooth',
    });
  }
    return (
    <div className="wrapper">
      <header className='header'>
        <img className='logos_header' src={logosHeader}/>
        <Link to='/cart'><div className='cartBtn'/></Link>
        <div className='likeBtn'/>
        <img className='btns_header' src={btnsHeader}/>
      </header>
      <h1 className='title'> Магазин авторской 3D-продукции. </h1>
      <h2 className='desc'> Мы изготавливаем 3D-модели и вырезки уникального дизайна и по вашему заказу. </h2>
      <button onClick={handleScroll} className='catalogBtn'/>
      <div className='catalogScroll'> <h3 className='btnText'> Перейти в каталог </h3> </div>
      <div className='leaveWill'> <h3 className='btnText'> Оставить заявку </h3> </div>
      <h2 className='modelsTitle'> 3D-модели </h2>
      <ModelsCarousel models = {models} setItem = { setCurrentItem } setActive = { setItemActive }/>
      <h2 className='modelsTitle'> Вырезки из фанеры </h2>
      <ModelsCarousel models = {models} setItem = { setCurrentItem } setActive = { setItemActive }/>
      <footer className='footer'>
        <span>
          <h3 className='tm'> Все торговые марки принадлежат их владельцам. Копирование составляющих частей сайта в какой бы то ни было форме без разрешения владельца авторских прав запрещено. </h3>
          <h3 className='phone'> +79163505356 </h3>
          <h3 className='mail'> hahaton-corp@yandex.ru </h3>
          <h3 className='adress'> Г. Москва, мкр. Северное Чертаново к. 809 </h3>
        </span>
        <img className='payment' src="https://i.ibb.co/Dt7FS4w/payment.png" alt="payment" border="0"/>
      </footer>
      <Item item = { currentItem } active = { itemActive } setActive = { setItemActive }/>
    </div>
  );
}


const RoutesFunc = () => {
  return(
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default App;