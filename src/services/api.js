import axios from '../core/axios';

export const appApi = {
    getPizzas: (sortBy, category) => {
        let str = category !== null ? `category=${category}&` : "";
        str += `_sort=${sortBy.type}&_order=desc`;
        return axios.get(`/pizzas?${str}`).then(response => response.data);
    },
}