import React from 'react';
import "./Images.css";

function Image(props) {
    return (
        <div className="image">
            <img alt="pic" onClick={props.click} data-clicked={props.clicked} src={props.image}></img>
        </div>
    );
};

export default Image;