import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
    outline,
    children,
    className,
    onClick
}) => {
    const classes = classNames('button', className, { 'button--outline': outline });

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button;