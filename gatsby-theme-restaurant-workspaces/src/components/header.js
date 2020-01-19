import React from 'react';
import "./styles/header.css";

//then in your component
const header = () => {
    return (
        <div className="header">
            <h1 className="restaurant-name">
                {'Restaurant Name'}
            </h1>
            <div className="menu-items">
                <h1 className="menu-names">
                    {'Menu'}
                </h1>
                <h1 className="menu-names">
                    {'Hours & Location'}
                </h1>
                <h1 className="menu-names">
                    {'Events'}
                </h1>
            </div>
        </div>
    );
};

export default header;