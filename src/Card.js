import react, { useContext } from "react";
import { useState } from "react";
import './carousel.css'
import Context from './Context'


export default function Card(props) {

    const cart = useContext(Context)['cart'];
    const models = useContext(Context)['models'];

    return(
        <div className="card" onClick={() => {
            props.setActive(true)
            props.setItem(props.model)}}>

            <img src="https://i.ibb.co/5Tg1cBN/slon.jpg" alt="slon" border="0" className='cardImg' />
            <h1 className='cardName'> {props.model.name} </h1>
            <span>
                <h2 className='cardDesc'> {props.model.descr} </h2>
                <h2 className='cardBill'> {props.model.bill }₽ </h2>
            </span>
        </div>
    )
}