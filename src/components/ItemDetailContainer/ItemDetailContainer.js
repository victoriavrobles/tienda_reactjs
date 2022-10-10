import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import {doc, getDoc} from "firebase/firestore";
import { Box } from "@mui/material";

const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [item, setItems] = useState({});

    // const getData = (id) => {
    //     return new Promise ((resolve, reject) => {
    //         const item = data.find(item => item.id === parseInt(id));
    //         resolve(item)
    //     })
    // };

    // useEffect(() => {
    //     const getProducto = async()=>{
    //         const producto = await getData(productId);
    //         console.log('producto', producto)
    //         setItems(producto);
    //     }
    //     getProducto();
    // },[productId])

        useEffect(() => {
        const getProducto = async()=>{
            const queryRef = doc(db, "items", productId);
            const response = await getDoc(queryRef);
            const nuevoItem = {
                id: response.id,
                ...response.data()
            }
        setItems(nuevoItem);
        }
        getProducto();
    },[productId])

    return (<>
    <Box>
    <ItemDetail item={item} />
    </Box>
    </>);
};

export default ItemDetailContainer;