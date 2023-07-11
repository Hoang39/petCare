import React from "react";

const CartContext = React.createContext({
    cart: [],
    setcart : () => {},
    dltItem: (item) => {},
    handleAdd: (product, id, type, quantity) => {}
})

export default CartContext