import './style.css';
import { useState } from "react";

const ItemCount = ({stock, initial}) => {
    
    const [ItemCount, setItemCount] = useState(initial);

        const sumar = () => {
            if (ItemCount < stock){
                setItemCount(ItemCount + 1);
            } else {
                setItemCount(0)
            }
        }
        const restar = () => {
            if (ItemCount > 1){
                setItemCount(ItemCount - 1);
            } else {
                setItemCount(stock)
            }
        }

    return (
        <div className="contador">
            <h4>"Violeta" - Isabel Allende:</h4>
            <div className="counter">
                <div onClick={restar}><h4 className="itemCountButton">-</h4></div>
                <div className="itemCount">{ItemCount}</div>
                <div onClick={sumar}><h4 className="itemCountButton">+</h4></div>
            </div>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;