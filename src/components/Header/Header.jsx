import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.app_header}>
            <img src="https://dynamic.brandcrowd.com/asset/logo/4c8f8b36-51b9-4ebf-b20c-00e5c25719c3/logo?v=4&text=Logo+Text+Here" alt="" />
        </header>

    )
};

export default Header;