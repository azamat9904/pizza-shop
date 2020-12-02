import { actionTypes } from '../actions/pizzas';

const initialState = {
    pizzas: [],
    isLoading: false,
    error: null
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PIZZAS:
            return {
                ...state,
                pizzas: action.payload
            };
        case actionTypes.FETCH_PIZZAS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case actionTypes.FETCH_PIZZAS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                pizzas: action.payload
            };
        case actionTypes.FETCH_PIZZAS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default pizzas;