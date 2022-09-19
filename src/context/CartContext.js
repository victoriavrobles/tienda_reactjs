import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [listaProductosCart, setListaProductosCart] = useState([]);

    const isInCart = (productId)=>{
        const productExist = listaProductosCart.some(item=>item.id === productId);
        return productExist;
    }

    const addItem = (item, quantity) => {
        console.log("item", item, "quantity", quantity)
        const productoNuevo = {
            ...item,
            quantity
        }

        if(isInCart(item.id)){
            const productPos = listaProductosCart.findIndex(product=>product.id === item.id);
            const nuevoArray = [...listaProductosCart];
            nuevoArray[productPos].quantity = nuevoArray[productPos].quantity + quantity;
            nuevoArray[productPos].quantityPrice = nuevoArray[productPos].quantity * nuevoArray[productPos].price;
            setListaProductosCart(nuevoArray);
        } else{
            const nuevoArray = [...listaProductosCart];
            productoNuevo.quantityPrice = productoNuevo.quantity * productoNuevo.price;
            nuevoArray.push(productoNuevo);
            setListaProductosCart(nuevoArray);
        }
    } 

    const removeItem = (itemId) => {
        console.log(itemId);
        const nuevoArray = listaProductosCart.filter(producto => producto.id !== itemId);
        setListaProductosCart(nuevoArray);
    }

    const clear = () => {
        setListaProductosCart([]);
    }

    return(
        <CartContext.Provider value={{listaProductosCart, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}