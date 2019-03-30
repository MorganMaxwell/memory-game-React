import React from 'react';

function ImageBox(props) {
    return (
        <div className="imageBox">
            {props.children}
        </div>
    )
}

export default ImageBox;