export const actionTypes = {
    ADD_PIZZA_TO_CART: "ADD_PIZZA_TO_CART",
    CLEAR_CART: "CLEAR_CART",
    REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
    PLUS_CART_ITEM: "PLUS_CART_ITEM",
    MINUS_CART_ITEM: "MINUS_CART_ITEM"
};

export const addPizzaToCart = (pizza) => ({
    type: actionTypes.ADD_PIZZA_TO_CART,
    payload: pizza
});

export const clearCart = () => ({
    type: actionTypes.CLEAR_CART
});

export const removeCartItem = (id) => ({
    type: actionTypes.REMOVE_CART_ITEM,
    payload: id
});

export const plusCartItem = (id) => ({
    type: actionTypes.PLUS_CART_ITEM,
    payload: id,
});

export const minusCartItem = (id) => ({
    type: actionTypes.MINUS_CART_ITEM,
    payload: id,
});
