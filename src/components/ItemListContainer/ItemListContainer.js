import ItemCount from '../ItemCount.js/ItemCount';
import './style.css'

function ItemListContainer({greeting}) {
    return(
        <div>
            <h2>{greeting}</h2>
            <ItemCount stock="10"/>
        </div>
    );
}

export default ItemListContainer;