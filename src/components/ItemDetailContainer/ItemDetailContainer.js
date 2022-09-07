import data from "../ItemListContainer/mock-data";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);

    const getData = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        getData.then((result) => {
            setItems(result);
        })
    }, []);

    return (<>
    <ItemDetail itemList={items} />
    </>);
};

export default ItemDetailContainer;