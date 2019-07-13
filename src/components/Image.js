import React from "react";

const imgStyle = {
    height: "200px",
    width: "200px",
    margin: "10px"
}

const Image = props => {
    return (
        <img alt={props.name} src={props.image} data-id={props.id} onClick={() => props.handleClick(props.id)} style={imgStyle} />
    );
}

export default Image;