export const getPizzas = (state) => {
    return state.pizzasState.pizzas;
}

export const getPizzasLoading = (state) => {
    return state.pizzasState.isLoading
}