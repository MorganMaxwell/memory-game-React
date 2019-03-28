import React from 'react';
import "./Images.css";

function Image(props) {
    return (
        <div className="image">
            <div>{props.name}</div>
            <img alt="pic" onClick={props.click} data-clicked={props.clicked} src={props.image}></img>
        </div>
    );
};

export default Image;