import { createSelector } from 'reselect';


const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

export const getCartItems = (state) => {
    return state.cartState.items;
};

export const getCurrentPizza = (state, id) => {
    return state.cartState.items[id].items
};

export const getTotalCount = createSelector(getCartItems, (cartItems) => getTotalSum(cartItems, 'items.length'));

export const getTotalPrice = createSelector(getCartItems, (cartItems) => getTotalSum(cartItems, 'totalPrice'));


