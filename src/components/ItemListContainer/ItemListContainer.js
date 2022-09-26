import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import {collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

    const {categoryId} = useParams ();
    const [items, setItems] = useState([]);

        useEffect(() => {
        const queryRef = !categoryId ? collection(db, "items") : query(collection(db, "items"), where("category", "==", categoryId));
        getDocs (queryRef).then(response=>{
        const resultados = response.docs.map(doc=>{
            const nuevoItem = {
                id: doc.id,
                ...doc.data(),
            }
            return nuevoItem
        });
        setItems(resultados);
    })
    }, [categoryId]);

    return (<>
    <ItemList itemList={items} />
    </>);
};

export default ItemListContainer;