import data from "./mock-data";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

    const {categoryId} = useParams ();
    console.log('categoryId', categoryId)

    const [items, setItems] = useState([]);

    const getData = new Promise ((resolve, reject) => {
        // setTimeout(() => {
            resolve(data);
        // }, 2000);
    });

    useEffect(() => {
        getData.then((result) => {
            if(categoryId){
                const nuevosProductos = result. filter(item => item.categoria === categoryId);
                setItems(nuevosProductos);
            } else {
                setItems(result);
            }
        })
    }, [categoryId]);

    return (<>
    <ItemList itemList={items} />
    </>);
};

export default ItemListContainer;