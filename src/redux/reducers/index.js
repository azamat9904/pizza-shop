import { combineReducers } from 'redux';
import filterReducer from './filters';
import pizzasReducer from './pizzas';

export const reducer = combineReducers({
    filterState: filterReducer,
    pizzasState: pizzasReducer
});
