import React from 'react';
import './Button.css';

function Button(props) {

    // const green = "#899A82";
    // const purple = "#B6899E";

    const buttonParameters = {
        backgroundColor: props.backgroundColor,
        margin: '0.2rem',
    };
    
    return (
        <div className="btn" style={buttonParameters}>{props.children}</div>
    );
}


export default Button;
