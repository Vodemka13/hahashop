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
            <ul> {cart.map(item => {
                return <CartItem item={models[item[0] - 1]} quantity={item[1]}/>
            }) } </ul>
        </div>
    )
}

export default Cart;