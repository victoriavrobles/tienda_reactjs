import './style.css';
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [ItemCount, setItemCount] = useState(initial);

        const sumar = () => {
            if (ItemCount < stock){
                setItemCount(ItemCount + 1);
            }
        }
        const restar = () => {
            if (ItemCount > 1){
                setItemCount(ItemCount - 1);
            } 
        }

    return (
        <div className="contador">
            <p style={{textAlign: "center"}}>Stock disponible: {stock}</p>
            <div className="counter">
                <div onClick={restar}><h4 className="itemCountButton">-</h4></div>
                <div className="itemCount">{ItemCount}</div>
                <div onClick={sumar}><h4 className="itemCountButton">+</h4></div>
            </div>
            <button onClick={() => onAdd(ItemCount)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;