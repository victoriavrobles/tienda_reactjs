import React from 'react';
import Item from "../Item/Item";

const ItemList = ({itemList}) => {
    return (
        <>
        {itemList.map((producto) => {
                return <Item key={producto.id} item={producto}/>;
                })}
        </>
    );
};

export default ItemList;