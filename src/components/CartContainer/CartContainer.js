import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

export const CartContainer = () => {
    const {listaProductosCart, removeItem, clear} = useContext(CartContext);

    return (
        <div className="cartcont">
            <button onClick={()=>clear()}>Vaciar carrito</button>
            {listaProductosCart.map(item => (
                <>
                <p>{item.title} - {item.quantity}</p>
                <button onClick={()=>removeItem(item.id)}>Eliminar producto</button>
                </>
            ))}
        </div>
    )
}