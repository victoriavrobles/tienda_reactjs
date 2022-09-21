import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const CartContainer = () => {
    const {listaProductosCart, removeItem, clear, precioTotal} = useContext(CartContext);

    return (
    <div>
        {
        listaProductosCart.length > 0 ? 
        <div className="cartcont">
            {listaProductosCart.map(item => (
                <div>
                <p>{item.title} - {item.quantity}</p>
                <button onClick={()=>removeItem(item.id)}>Eliminar producto</button>
                </div>
                ))}
                <p>Precio total: {precioTotal()}</p>
                <button onClick={()=>clear()}>Vaciar carrito</button>
                <button>Terminar compra</button>
                </div>
                : <>
                <Stack sx={{ width: '100%' }} spacing={2}></Stack>
                <Alert severity="info" sx={{padding: "10px", margin: "10px"}}>El carrito esta vacio</Alert>
                <Link to="/">Volver a la página principal</Link>
                </>
        }
    </div>
    )
}