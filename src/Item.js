import {React, useContext} from "react";
import './item.css'
import likePic from './pics/like.svg'
import Context from "./Context";

const Item = ({item, active, setActive}) => {
    
    const cart = useContext(Context)['cart'];
    const cookie = useContext(Context)['cookies']
    const models = useContext(Context)['models'];
    const {setCart} = useContext(Context);
    const {setCookie} = useContext(Context);

    console.log()
    if (cart != []) cookie.set('cart', cart, {path: '/'})
    return(
        <div className={active ? 'item active' : 'item'} onClick={() => setActive(false)}>
            <div className="itemContent" onClick={e => e.stopPropagation()}>
                <span>
                    <div className='itemLeft'>
                        <h1 className='itemName'> {item.name} </h1>
                        <h2 className='itemDesc'> {item.fulldesc} </h2>
                        <h1 className="itemBill"> {item.bill}₽ </h1>
                        <span>
                            <button onClick={setCart.bind(null, Array.from(cart.concat([[Object.values(models).findIndex(model => model === item) + 1, 1]])))} disabled={cart.filter(obj => obj[0] === Object.values(models).findIndex(model => model === item) + 1).length === 1} className={cart.filter(obj => obj[0] == Object.values(models).findIndex(model => model == item) + 1).length === 1 ? 'itemCartAdded' : 'itemCart'}> {cart.filter(obj => obj[0] == Object.values(models).findIndex(model => model == item) + 1).length === 1 ? 'Товар в корзине' : 'Добавить в корзину'} </button>
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