import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Categories = ({
    items,
    onItemClick,
    active
}) => {

    const activeItemHandler = (index) => {
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

Categories.propTypes = {
    items: PropTypes.array,
    onItemClick: PropTypes.func,
};

Categories.defaultProps = {
    items: []
}

export default Categories;