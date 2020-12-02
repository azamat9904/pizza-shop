import { appApi } from '../../services/api';

export const actionTypes = {
    SET_PIZZAS: "SET_PIZZAS",
    FETCH_PIZZAS_START: "FETCH_PIZZAS_START",
    FETCH_PIZZAS_SUCCESS: "FETCH_PIZZAS_SUCCESS",
    FETCH_PIZZAS_FAILED: "FETCH_PIZZAS_FAILED"
};

export const setPizzas = (pizzas) => ({
    type: actionTypes.SET_PIZZAS,
    paylaod: pizzas
});

const fetchPizzasStart = () => ({
    type: actionTypes.FETCH_PIZZAS_START
});

const fetchPizzasSuccess = (pizzas) => ({
    type: actionTypes.FETCH_PIZZAS_SUCCESS,
    payload: pizzas
});

const fetchPizzasFailed = (error) => ({
    type: actionTypes.FETCH_PIZZAS_FAILED,
    payload: error
});

export const fetchPizzas = () => (dispatch) => {
    dispatch(fetchPizzasStart());
    appApi.getPizzas().then(pizzas => {
        dispatch(fetchPizzasSuccess(pizzas));
    }).catch((e) => {
        dispatch(fetchPizzasFailed(e.response));
    });
}