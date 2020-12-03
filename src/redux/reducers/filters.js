import { actionTypes } from '../actions/filters';

const initialState = {
    sortBy: {
        type: 'popular',
        name: 'популярности'
    },
    category: null
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            };
        case actionTypes.SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}

export default filters;