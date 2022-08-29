import cart from "./cart.svg";
import './style.css'

const CartWidget = () => {
    return (
        <div style={{ width: "50px", height: "50px", display:{xs:'none', md:'flex'} }}>
        <div className="cart">
            <img style={{ width: 30, height: 30 }} src={cart}></img> 4
    </div>
    </div>
    )
};

export default CartWidget;