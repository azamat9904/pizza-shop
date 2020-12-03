import { combineReducers } from 'redux';
import filterReducer from './filters';
import pizzasReducer from './pizzas';
import cartReducer from './cart';

export const reducer = combineReducers({
    filterState: filterReducer,
    pizzasState: pizzasReducer,
    cartState: cartReducer
});
