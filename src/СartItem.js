import React from "react";
import './cart.css'
import deletePic from './pics/delete.svg'
import quantityPic from './pics/quantity.svg'

function CartItem({ item, quantity }) {
    console.log(item)
    console.log(quantity)
    return (
        <div className="cartItem">
            <span>
                <img className='cartImg' src={item['img']}/>
                <div className='cartRight'>
                    <h1 className="cartName">{item['name']}</h1>
                    <img className="cartItemQuantity" src={quantityPic}/>
                    <h2>{quantity}</h2>
                </div>
            </span>
        </div>
        
    )
}

export default CartItem;