export const actionTypes = {
    SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
    SET_TOTAL_COUNT: "SET_TOTAL_COUNT",
    ADD_PIZZA_TO_CART: "ADD_PIZZA_TO_CART"
};

export const addPizzaToCart = (pizza) => ({
    type: actionTypes.ADD_PIZZA_TO_CART,
    payload: pizza
});

