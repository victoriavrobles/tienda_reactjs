import { useState, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css';
import { CartContext } from "../../context/CartContext.js";
import {Link} from "react-router-dom";

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
            <p>Autor/a: {item.autorx}</p>
            <p>{item.sinopsis}</p>
            <h4>$ {item.price}</h4>
            <h5 style={{textAlign: "center"}}>Cantidad: {contador}</h5>
            <div className="carrito"><ItemCount stock={10} initial={1} onAdd={onAdd}/>
            {
            contador > 0 &&
            <Link to="/cart">
                    <button>Finalizar compra</button>
                </Link>
        }
        </div>
        </div>
    )
}

export default ItemDetail;