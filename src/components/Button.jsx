import React from 'react';
import classNames from 'classnames';

const Button = ({ outline, children, className }) => {
    const classes = classNames('button', className, { 'button--outline': outline });

    return (
        <button className={classes}>
            {children}
        </button>
    )
}

export default Button;