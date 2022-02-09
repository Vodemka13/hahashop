import React, { useState, useContext } from "react";import './cart.css'
import Context from "./Context";
import deletePic from './pics/delete.svg'
import quantityPic from './pics/quantity.svg'

function CartItem({ item, quantity }) {

    const cart = useContext(Context)['cart'];
    const cookie = useContext(Context)['cookies'];

    const models = useContext(Context)['models'];
    const {setCart} = useContext(Context)
    console.log(item);

    function addQuantity(adv) {
        console.log('running')
        console.log(adv);
    }
    cookie.set('cart', cart, {path: '/'})

    return (
        <div className="cartItem">
            <span>
                <img className='cartImg' src={item['img']}/>
                <div className='cartRight'>
                    <h1 className="cartName">{item['name']}</h1>
                    <img className="cartItemQuantity" src={quantityPic}/>
                    <h2 className="cartItemQuantityText">{quantity}</h2>
                    <button onClick={setCart.bind(null, cart.map(obj => cart.indexOf(obj) == cart.findIndex(obj => obj[0] == Object.values(models).findIndex(model => model == item) + 1) ? obj[1] > 0 && obj[1] < 9 ? [obj[0], obj[1] + 1] : obj : obj))} className="cartButtonRight"/>
                    <button onClick={setCart.bind(null, cart.map(obj => cart.indexOf(obj) == cart.findIndex(obj => obj[0] == Object.values(models).findIndex(model => model == item) + 1) ? obj[1] > 1 && obj[1] < 10 ? [obj[0], obj[1] - 1] : obj : obj))} className='cartButtonLeft'/>
                    <h2 className="cartSingleCost">Цена: {item['bill']}₽</h2>
                    <h1 className="cartWholeCost">Итого: {parseInt(item['bill'] * quantity)}₽</h1>
                    <img className='cartDelete' src={deletePic} onClick={setCart.bind(null, cart.filter(obj => obj[0] != Object.values(models).findIndex(model => model == item) + 1))}/>
                </div>
            </span>
        </div>
    )
}

export default CartItem;