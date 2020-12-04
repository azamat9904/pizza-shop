import { actionTypes } from '../actions/cart';
import produce from 'immer';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

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

const cart = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.ADD_PIZZA_TO_CART:

            if (!draft.items[action.payload.id])
                draft.items[action.payload.id] = { items: [action.payload] }
            else draft.items[action.payload.id].items.push(action.payload);

            draft.items[action.payload.id].totalPrice = getTotalPrice(draft.items[action.payload.id].items);
            draft.totalCount = getTotalSum(draft.items, 'items.length');
            draft.totalPrice = getTotalSum(draft.items, 'totalPrice');
            break;
        case actionTypes.REMOVE_CART_ITEM:
            const currentTotalPrice = draft.items[action.payload].totalPrice;
            const currentTotalCount = draft.items[action.payload].items.length;
            draft.totalPrice = draft.totalPrice - currentTotalPrice;
            draft.totalCount = draft.totalCount - currentTotalCount;
            delete draft.items[action.payload];
            break;
        case actionTypes.PLUS_CART_ITEM: {
            const newPizza = draft.items[action.payload].items[0];
            const chosenPizza = draft.items[action.payload];
            chosenPizza.items.push(newPizza);
            chosenPizza.totalPrice = getTotalPrice(chosenPizza.items);
            draft.totalPrice = getTotalSum(draft.items, 'totalPrice');
            draft.totalCount = getTotalSum(draft.items, 'items.length');
            break;
        }

        case actionTypes.MINUS_CART_ITEM: {
            const chosenPizza = draft.items[action.payload];
            chosenPizza.items = chosenPizza.items.length > 1 ? chosenPizza.items.slice(1) : chosenPizza.items;
            chosenPizza.totalPrice = getTotalPrice(chosenPizza.items);
            draft.totalCount = getTotalSum(draft.items, 'items.length');
            draft.totalPrice = getTotalSum(draft.items, 'totalPrice');
            break;
        }
        case actionTypes.CLEAR_CART:
            draft.items = {};
            draft.totalPrice = 0;
            draft.totalCount = 0;
            break;
        default:
            break;
    }
}, initialState);

export default cart;