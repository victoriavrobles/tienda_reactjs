import Item from "../Item/Item";

const ItemList = ({itemList}) => {
    return (
        <>
        {itemList.map((producto) => {
                return <Item key="id" title={producto.title} description={producto.description} image={producto.image} price={producto.price}/>;
                })}
        </>
    );
};

export default ItemList;