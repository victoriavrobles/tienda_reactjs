

export default function Item ({title, image, description, price}) {
    return (
        <div className="item">
            <h2>{title}</h2>
            <img src={image} alt= {title}></img>
            <p>{description}</p>
            <h3>${price}</h3>
        </div>
    )
}