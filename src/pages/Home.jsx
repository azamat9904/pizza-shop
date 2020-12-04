import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory } from '../redux/actions/filters';
import { getPizzas, getPizzasLoading } from '../redux/selectors/pizzas';
import { getCategory, getSortBy } from '../redux/selectors/filters';
import { getCartItems } from '../redux/selectors/cart';
import { SortPopup, Categories, PizzaBlock, PizzaBlockLoading } from '../components';


const categoryItems = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];

const Home = () => {

    const { pizzas, isLoading, category, sortBy, cartItems } = useSelector((state) => ({
        pizzas: getPizzas(state),
        isLoading: getPizzasLoading(state),
        category: getCategory(state),
        sortBy: getSortBy(state),
        cartItems: getCartItems(state)
    }));

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [dispatch, sortBy, category]);

    const onItemClick = (index) => {
        dispatch(setCategory(index));
    };

    return (
        <div className="container">
            <div className="content__top">
                <div className="categories">
                    <Categories
                        items={categoryItems}
                        onItemClick={onItemClick}
                        active={category}
                    />
                </div>
                <SortPopup sortBy={sortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? Array(5).fill(0).map((_, index) => <PizzaBlockLoading key={index} />) :
                        pizzas && pizzas.map((item) => <PizzaBlock
                            {...item}
                            key={item.id}
                            cartItems={cartItems}
                        />)
                }
            </div>
        </div>
    )
}

export default Home;