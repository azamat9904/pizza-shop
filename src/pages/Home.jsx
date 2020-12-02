import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/actions/filters';

import {
    SortPopup,
    Categories,
    PizzaBlock
} from '../components';


const categoryItems = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];

const Home = () => {

    const dispatch = useDispatch();
    const { pizzas } = useSelector((state) => state.pizzasState);

    const onItemClick = (index) => {
        dispatch(setCategory(index));
    };

    return (
        <div className="container">
            <div className="content__top">
                <div className="categories">
                    <Categories items={categoryItems} onItemClick={onItemClick} />
                </div>
                <SortPopup />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas && pizzas.map((item) => <PizzaBlock  {...item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default Home;