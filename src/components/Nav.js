import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Nav = props => {
    return (
        <Navbar sticky="top" className="justify-content-between" bg="dark" variant="dark">
                <Navbar.Brand href="/">Clicky Game</Navbar.Brand>
                <Navbar.Text id="guess">{props.message ? props.message : "Click an image to begin!"}</Navbar.Text>
            <Navbar.Text>Score: {props.score} | Top Score: {props.topScore}</Navbar.Text>
        </Navbar>
    );
}

export default Nav;