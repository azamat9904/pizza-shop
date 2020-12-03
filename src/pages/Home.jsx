import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory } from '../redux/actions/filters';

import {
    SortPopup,
    Categories,
    PizzaBlock,
    PizzaBlockLoading
} from '../components';


const categoryItems = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];

const Home = () => {

    const { pizzas, isLoading, category, sortBy } = useSelector((state) => {
        return {
            pizzas: state.pizzasState.pizzas,
            isLoading: state.pizzasState.isLoading,
            category: state.filterState.category,
            sortBy: state.filterState.sortBy
        }
    });
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
                    isLoading ? Array(10).fill(0).map((_, index) => <PizzaBlockLoading key={index} />) :
                        pizzas && pizzas.map((item) => <PizzaBlock  {...item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default Home;