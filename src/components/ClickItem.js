import React from "react";

const imgStyle = {
    height: "200px",
    width: "200px",
    margin: "10px"
}
function ClickItem(props) {
    return (
        // <div className="card">
            // <div className="img-container">
                <img alt={props.name} src={props.image} data-id={props.id}
                    // data-clicked={props.clicked} onClick={() => props.checkClicked(props.id)} className="someClass"
                    style={imgStyle} />
            // </div>
        // </div>
    );
}

export default ClickItem;
