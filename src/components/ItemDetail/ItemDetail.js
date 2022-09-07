import Item from "../Item/Item";

const ItemDetail = ({itemList}) => {
    return (
        <>
        {itemList.map((producto) => {
                return <Item key="id" title={producto.title} description={producto.description} sinopsis={producto.sinopsis} image={producto.image} price={producto.price}/>;
                })}
        </>
    );
};

export default ItemDetail;