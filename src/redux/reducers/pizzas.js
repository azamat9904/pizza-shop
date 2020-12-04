import { actionTypes } from '../actions/pizzas';
import produce from 'immer';

const initialState = {
    pizzas: [],
    isLoading: false,
    error: null
}

const pizzas = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SET_PIZZAS:
            draft.pizzas.push(action.payload);
            break;
        case actionTypes.FETCH_PIZZAS_START:
            draft.isLoading = true;
            draft.error = null;
            break;
        case actionTypes.FETCH_PIZZAS_SUCCESS:
            draft.isLoading = false;
            draft.error = null;
            draft.pizzas = action.payload;
            break;
        case actionTypes.FETCH_PIZZAS_FAILED:
            draft.isLoading = false;
            draft.error = action.payload;
            break;
        default:
            break;
    }
}, initialState);

export default pizzas;