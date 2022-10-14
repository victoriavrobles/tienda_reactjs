import React from 'react';
import { useState, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount.js';
import { CartContext } from "../../context/CartContext.js";
import {Link} from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const ItemDetail = ({item})=>{
    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const onAdd = (dato)=>{
        setContador(dato)
        addItem(item, dato);
    }


    return(
        <Container>
    <Box sx={{p:"60px"}}>
        <Typography variant="h3" align="center" sx={{mb: "45px"}}>{item.title}</Typography>
        <Grid container rowSpacing={1}>
            <Grid md={4} item={true}>
            <img height="500"
          width="325" src={item.image} alt={item.title}/>
            </Grid>
            <Grid md={8} sx={{pb:"40px"}} item={true}>
            <Typography variant="h6" sx={{my: "20px"}}>Autor/a: {item.autorx}</Typography>
            <Typography variant="body1">{item.sinopsis}</Typography>
            <Typography variant="h6" align="center" sx={{my: "20px"}}>Precio: ${item.price}</Typography>
            <Typography style={{textAlign: "center"}}>Cantidad: {contador}</Typography>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            {
            contador > 0 &&
            <Box sx={{ justifyContent: 'center' }}>
            <Link to="/cart">
                    <Button color="secondary">Finalizar compra</Button>
                </Link>
                </Box>
        }
        </Grid>
        </Grid>
    </Box>
    </Container>
    )
}

export default ItemDetail;