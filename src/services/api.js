import axios from '../core/axios';

export const appApi = {
    getPizzas: () => {
        return axios.get('/pizzas').then(response => response.data);
    }
}