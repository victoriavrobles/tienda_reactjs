import './style.css'

export default function Item ({title, image, description, sinopsis, price}) {
    return (
        <div className="items">
        <div className="item">
            <h2>{title}</h2>
            <img style={{height: "200px", width: "auto"}} src={image} alt= {title}></img>
            <p style={{fontStyle: "italic"}}>{description}</p>
            <p>{sinopsis}</p>
            <h3>Precio: ${price}</h3>
            <button>Agregar al carrito</button>
        </div>
        </div>
    )
}