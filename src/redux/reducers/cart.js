import { actionTypes } from '../actions/cart';
import produce from 'immer';

const initialState = {
    items: {},
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.ADD_PIZZA_TO_CART:
            const currentPizza = draft.items[action.payload.id];
            const newItems = !currentPizza ? [action.payload] : [...currentPizza.items, action.payload];
            draft.items[action.payload.id] = {
                items: newItems,
                totalPrice: getTotalPrice(newItems)
            }
            break;
        case actionTypes.REMOVE_CART_ITEM:
            delete draft.items[action.payload];
            break;
        case actionTypes.PLUS_CART_ITEM: {
            const newPizza = draft.items[action.payload].items[0];
            const chosenPizza = draft.items[action.payload];
            chosenPizza.items.push(newPizza);
            chosenPizza.totalPrice = getTotalPrice(chosenPizza.items);
            break;
        }
        case actionTypes.MINUS_CART_ITEM: {
            const chosenPizza = draft.items[action.payload];
            chosenPizza.items = chosenPizza.items.length > 1 ? chosenPizza.items.slice(1) : chosenPizza.items;
            chosenPizza.totalPrice = getTotalPrice(chosenPizza.items);
            break;
        }
        case actionTypes.CLEAR_CART:
            draft.items = {};
            break;
        default:
            break;
    }
}, initialState);

export default cart;