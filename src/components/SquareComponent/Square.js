import React from 'react';
import './Square.css';

function Square(props){
    return (
        <button class="square" onClick={props.onClick}>{props.value}</button>
    )
};

export default Square;