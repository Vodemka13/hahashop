import react, { useContext } from "react";
import { useState } from "react";
import './carousel.css'
import Context from './Context'
import { Component, createContext } from "react";



const models = [
    {
        'name': 'Слоны', 'desc': 'Слоненок в подарок :)', 'bill': '100₽', 'img': 'https://i.ibb.co/5Tg1cBN/slon.jpg'
    }
]


export default function Card({active, setActive}) {


    return(
        <div className='card' onClick={() => setActive(true)}>
            <img src="https://i.ibb.co/5Tg1cBN/slon.jpg" alt="slon" border="0" className='cardImg' />
            <h1 className='cardName'> Слоны </h1>
            <span>
                <h2 className='cardDesc'> Слоненок в подарок :) </h2>
                <h2 className='cardBill'> 100₽ </h2>
            </span>
        </div>
    )
}