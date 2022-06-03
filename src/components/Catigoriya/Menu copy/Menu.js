import React from 'react';
import './Menu.css';
import MainButton from '../MainButton/MainButton';

const MenuNew = prop => {

    return (
        <div>
            <header className="menu">
                <nav className="menu__navigation">
                    <div className="menu__toggle-button">
                        <MainButton click={prop.clickHandler}/>
                    </div>

                    <div className="menu__title"><a href="/">My Site</a></div>
                    <div className="space"/>
                </nav>
                
            </header>    
        </div>
    )
    

}

export default MenuNew;