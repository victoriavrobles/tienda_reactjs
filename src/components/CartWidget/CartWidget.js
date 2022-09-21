import cart from "./cart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './style.css'

const CartWidget = () => {
    const {cantidadTotalProductos} = useContext(CartContext);

    return (
        <Link to="/cart">
        <div style={{ width: "50px", height: "50px", display:{xs:'none', md:'flex'} }}>
        <div className="cart">
            <img style={{ width: 30, height: 30 }} src={cart}></img> {cantidadTotalProductos()}
    </div>
    </div>
    </Link>
    )
};

export default CartWidget;