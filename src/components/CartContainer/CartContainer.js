import React, {useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material';
import { db } from "../../utils/firebase"
import {collection, addDoc} from "firebase/firestore";
import "./style.css"

export const CartContainer = () => {
    const {listaProductosCart, removeItem, clear, precioTotal} = useContext(CartContext);
    const [idOrden, setIdOrden] = useState();

    const enviarOrden = (event) => {
        event.preventDefault();
        const orden = {
            comprador: {name: event.target[0].value,
                        phone: event.target[1].value, 
                        email: event.target[2].value}, 
                        items: listaProductosCart, 
                        total: precioTotal()
        }
        console.log("orden", orden)

        const queryRef = collection(db, "orders");
        addDoc(queryRef, orden).then(response=>{console.log("response", response);
        setIdOrden(response.id)
        clear();
        });
    }

    return (
    <div>
        <Typography variant="h4" sx={{textAlign:'center', margin: '20px'}}>Tu pedido</Typography>
        {idOrden ? 
        <>
        <Alert severity="success" sx={{padding: "10px", margin: "10px"}}>Su compra fue realizada! Número de orden: {idOrden}</Alert>
        </>
        :
        <div>
        {
        listaProductosCart.length > 0 ? 
        <div className="cartcont">
            {listaProductosCart.map(item => (
                <div key={item.id}>
                <Stack direction="row" spacing={2} justifyContent="center" sx={{mb: 2}}>
                <Typography> Producto: "{item.title}" | Cantidad: {item.quantity}</Typography>
                <Button variant="outlined" color="error" onClick={()=>removeItem(item.id)}>Eliminar producto</Button>
                </Stack>
                </div>
                ))}
                <Stack direction="row" spacing={2} justifyContent="center" sx={{mb: 2}}>
                <Typography variant="h6">Precio total: {precioTotal()}</Typography>
                <Button variant="outlined" color="error" sx={{padding: "10px", margin: "10px"}} onClick={()=>clear()}>Vaciar carrito</Button>
                </Stack>

                <form onSubmit={enviarOrden}>
                    <label>Nombre: </label>
                    <input type="text"></input>
                    <label>Telefono: </label>
                    <input type="number"></input>
                    <label>Email: </label>
                    <input type="email"></input>
                    <Button type="submit">Enviar orden</Button>
                </form>
                </div>
                : <>
                <Alert severity="info" sx={{padding: "10px", margin: "10px"}}>El carrito esta vacio</Alert>
                <Link to="/">Volver a la página principal</Link>
                </>
        }
    </div>
}
</div>
    )
}