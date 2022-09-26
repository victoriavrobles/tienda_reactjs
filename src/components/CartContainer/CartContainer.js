import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import "./style.css"

export const CartContainer = () => {
    const {listaProductosCart, removeItem, clear, precioTotal} = useContext(CartContext);

    return (
    <div>
        {
        listaProductosCart.length > 0 ? 
        <div className="cartcont">
            {listaProductosCart.map(item => (
                <div key={item.id}>
                <Stack direction="row" spacing={2} justifyContent="center">
                <p>Producto: "{item.title}" | Cantidad: {item.quantity}</p>
                <Button variant="outlined" color="error" onClick={()=>removeItem(item.id)}>Eliminar producto</Button>
                </Stack>
                </div>
                ))}
                <p>Precio total: {precioTotal()}</p>
                <Button variant="outlined" color="error" sx={{padding: "10px", margin: "10px"}} onClick={()=>clear()}>Vaciar carrito</Button>
                <Button variant="contained" color="success" sx={{padding: "10px", margin: "10px"}}>Terminar compra</Button>
                </div>
                : <>
                <Alert severity="info" sx={{padding: "10px", margin: "10px"}}>El carrito esta vacio</Alert>
                <Link to="/">Volver a la página principal</Link>
                </>
        }
    </div>
    )
}