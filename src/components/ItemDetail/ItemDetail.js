import { useState, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css';
import { CartContext } from "../../context/CartContext.js";

const ItemDetail = ({item})=>{
    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const onAdd = (dato)=>{
        setContador(dato)
        addItem(item, dato);
    }

    return(
        <div className="item-detail">
            <h2>{item.title}</h2>
            <img style={{height: "200px", width: "auto"}} src={item.image} alt={item.title}/>
            <p>{item.description}</p>
            <p>{item.sinopsis}</p>
            <h4>$ {item.price}</h4>
            <h5 style={{textAlign: "center"}}>Cantidad: {contador}</h5>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail;