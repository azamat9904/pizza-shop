export const actionTypes = {
    SET_SORT_BY: "SET_SORT_BY",
    SET_CATEGORY: "SET_CATEGORY"
};

export const setOrderBy = (sortBy) => {
    localStorage.setItem('sortBy', JSON.stringify(sortBy));
    return {
        type: actionTypes.SET_SORT_BY,
        payload: sortBy
    }
}

export const setCategory = (categoryIndex) => {
    localStorage.setItem('category', JSON.stringify(categoryIndex));
    return {
        type: actionTypes.SET_CATEGORY,
        payload: categoryIndex
    }
}

export const initFilters = () => (dispatch) => {
    const category = localStorage.getItem('category') ? localStorage.getItem('category') : null;
    const sortBy = localStorage.getItem('sortBy') ? localStorage.getItem('sortBy') : null;

    if (category !== null)
        dispatch(setCategory(JSON.parse(category)));

    if (sortBy !== null)
        dispatch(setOrderBy(JSON.parse(sortBy)));
}