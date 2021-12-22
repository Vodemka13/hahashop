import React from "react";
import './item.css'

const Item = ({active, setActive}) => {
    return(
        <div className={active ? 'item active' : 'item'} onClick={() => setActive(false)}>
            <div className="itemContent" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}

export default Item;