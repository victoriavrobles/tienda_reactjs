import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './style.css'
import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    const {cantidadTotalProductos} = useContext(CartContext);

    return (
        <Link to="/cart">
    <Badge badgeContent={cantidadTotalProductos()} color="secondary">
  <ShoppingCartIcon color="action" />
</Badge>
    </Link>
    )
};

export default CartWidget;