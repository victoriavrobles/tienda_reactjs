import data from "../ItemListContainer/mock-data";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

const ItemDetailContainer = ({ greeting }) => {
    // const {productId} = useParams();

    const [items, setItems] = useState([]);

    const getData = new Promise ((resolve, reject) => {
            resolve(data);
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