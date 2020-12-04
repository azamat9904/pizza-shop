import { actionTypes } from '../actions/filters';
import produce from 'immer';

const initialState = {
    sortBy: {
        type: 'popular',
        name: 'популярности'
    },
    category: null
}

const filters = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SET_SORT_BY:
            draft.sortBy = action.payload;
            break;
        case actionTypes.SET_CATEGORY:
            draft.category = action.payload;
            break;
        default:
            break;
    }
}, initialState);

export default filters;