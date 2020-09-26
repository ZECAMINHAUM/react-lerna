'use strict';
import React from 'react';
import clsx from 'clsx';

import styles from './styles.css';

export function Button ({ children, variant, className, ...props }) {

    const classes = clsx(
        styles.Button,
        { [styles.ButtonSecondary]: variant === 'secondary' },
        className
    );
    
    return <button className={classes} {...props}>{children}</button>
}

