import React, { useState } from 'react';
import classNames from 'classnames';

const Categories = ({ items, onItemClick }) => {
    const [active, setActive] = useState(null);

    const activeItemHandler = (index) => {
        setActive(index);
        onItemClick(index);
    };

    return (
        <ul>
            <li
                className={classNames({ 'active': active === null })}
                onClick={() => activeItemHandler(null)}
            >Все</li>
            {
                items.map((item, index) => <li
                    key={index}
                    onClick={() => activeItemHandler(index)}
                    className={classNames({ 'active': active === index })}
                >{item}</li>)
            }
        </ul >
    )
}

export default Categories;