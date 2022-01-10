import React from "react";
import './item.css'
import likePic from './pics/like.svg' 

const Item = ({item, active, setActive}) => {

    console.log(item);

    return(
        <div className={active ? 'item active' : 'item'} onClick={() => setActive(false)}>
            <div className="itemContent" onClick={e => e.stopPropagation()}>
                <span>
                    <div className='itemLeft'>
                        <h1 className='itemName'> {item.name} </h1>
                        <h2 className='itemDesc'> {item.fulldesc} </h2>
                        <h1 className="itemBill"> {item.bill} </h1>
                        <span>
                            <button className='itemCart'> Добавить в корзину </button>
                            <img className='itemLike' src={likePic} alt="like" border="0"/>
                        </span>
                    </div>
                    <img className="itemImg" src={item.img}/>
                </span>
                
            </div>
        </div>
    )
}

export default Item;