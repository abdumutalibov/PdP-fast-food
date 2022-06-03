import React from 'react';
import "./MainButton.css";

const MainButton = prop => (
    <button className="burger-button" onClick={prop.click}>
        <div className="burger-button__line" />
        <div className="burger-button__line" />
        <div className="burger-button__line" />
    </button>
)

export default MainButton;