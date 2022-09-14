import './style.css'
import { Link } from 'react-router-dom'

export default function Item ({item}) {
    return (
        <div className="items">
        <div className="item">
            <h2>{item.title}</h2>
            <img style={{height: "200px", width: "auto"}} src={item.image} alt= {item.title}></img>
            <p style={{fontStyle: "italic"}}>{item.description}</p>
            <h3>Precio: ${item.price}</h3>
            <Link to={`/item/${item.id}`}><button>Ver más</button></Link>
        </div>
        </div>
    )
}