import react from "react";

export default function Card({model}) {
    return(
        <div className='card'>
            <img src="https://i.ibb.co/5Tg1cBN/slon.jpg" alt="slon" border="0" className='cardImg' />
            <h1 className='cardName'> Слоны </h1>
            <span>
                <h2 className='cardDesc'> Слоненок в подарок :) </h2>
                <h2 className='cardBill'> 100$ </h2>
            </span>
        </div>
    )
}