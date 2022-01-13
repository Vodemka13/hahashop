import React, { useContext } from "react";
import logosHeader from './pics/logos_header.svg'
import btnsHeader from './pics/btns_header.svg'
import './cart.css'
import Context from "./Context";
import CartItem from "./СartItem";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Cart = () => {

    const cart = useContext(Context)['cart'];
    const models = useContext(Context)['models'];

    return(
        <div>
            <header className='header'>
                <Link to='/'><img className='logos_header' src={logosHeader}/></Link>
                <div className='cartBtn'/>
                <div className='likeBtn'/>
                <img className='btns_header' src={btnsHeader}/>
            </header>
            <h1 className={cart.length != 0 ? "cartTitle" : 'cartTitleEmpty'}> {cart.length != 0 ? 'Корзина' : 'Корзина пуста 😥'}</h1>
            <ul> {cart.map(item => {
                return <CartItem item={models[item[0] - 1]} quantity={item[1]}/>
            }) } </ul>
            <h1 className='cartTotal'> {cart.length != 0 ? 'К оплате' : ''}<br/> {cart.length != 0 ? cart.map(obj => models[obj[0]]['bill'] * obj[1]).reduce((prev, curr) => prev + curr) + '₽' : ''}</h1>
            <footer className={getWindowDimensions()['width'] <= 600 && cart.length < 3 ? 'cartFooterSmall' : 'cartFooter'}>
                <span>
                    <h3 className='tm'> Все торговые марки принадлежат их владельцам. Копирование составляющих частей сайта в какой бы то ни было форме без разрешения владельца авторских прав запрещено. </h3>
                    <h3 className='phone'> +79163505356 </h3>
                    <h3 className='mail'> hahaton-corp@yandex.ru </h3>
                    <h3 className='adress'> Г. Москва, мкр. Северное Чертаново к. 809 </h3>
                </span>
                <img className='payment' src="https://i.ibb.co/Dt7FS4w/payment.png" alt="payment" border="0"/>
            </footer>
        </div>
    )
}

export default Cart;