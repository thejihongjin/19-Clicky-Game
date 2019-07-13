import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const jumbotronStyle = {
    textAlign: "center"
}

const Header = () => {
    return (
        <Jumbotron style={jumbotronStyle}>
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </Jumbotron>
    );
}

export default Header;