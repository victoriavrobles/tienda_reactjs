import data from "../ItemListContainer/mock-data";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [item, setItems] = useState({});

    const getData = (id) => {
        return new Promise ((resolve, reject) => {
            const item = data.find(item => item.id === parseInt(id));
            resolve(item)
        })
    };

    useEffect(() => {
        const getProducto = async()=>{
            const producto = await getData(productId);
            console.log('producto', producto)
            setItems(producto);
        }
        getProducto();
    },[productId])

    return (<>
    <ItemDetail item={item} />
    </>);
};

export default ItemDetailContainer;