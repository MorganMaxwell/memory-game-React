import React from 'react';

function ImageBox(props) {
    return (
        <div className="wrapper">
            <img alt={props.title} />
            <h3>{props.character}</h3>
        </div>
    )
}

export default ImageBox;