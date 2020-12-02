export const actionTypes = {
    SET_SORT_BY: "SET_SORT_BY",
    SET_CATEGORY: "SET_CATEGORY"
};

export const setOrderBy = (type) => ({
    type: actionTypes.SET_SORT_BY,
    payload: type
});

export const setCategory = (categoryIndex) => ({
    type: actionTypes.SET_CATEGORY,
    payload: categoryIndex
})
