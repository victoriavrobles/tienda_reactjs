import './style.css';
import { useState } from "react";
import { Button, Card, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

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
    <Card sx={{ display: 'flex', p: '20px', my: '20px', justifyContent: 'center' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <Typography variant='body1' style={{textAlign: "center"}}>Stock disponible: {stock}</Typography>
            <div className="counter">
                <IconButton onClick={restar}><RemoveCircleOutlineIcon/></IconButton>
                <Typography sx={{ display: 'flex', alignContent: 'center', p: "15px" }}>{ItemCount}</Typography>
                <IconButton onClick={sumar}><AddCircleOutlineIcon/></IconButton>
            </div>
            <div><Button color="secondary" onClick={() => onAdd(ItemCount)}>Agregar al carrito</Button></div>
    </Box>
    </Card>
    );
}

export default ItemCount;