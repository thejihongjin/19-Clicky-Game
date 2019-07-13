import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Nav from './components/Nav';
// import Header from './components/Header';
import ClickItem from './components/ClickItem';
import data from './data.json';


class App extends Component {
    state = {
        // data,
        score: 0,
        topScore: 0
    }

    // checkClicked = id => {
    //     //
    // }

    imgContainer = {
        width: "900px",
        margin: "0 auto"
    }

    render() {
        return (
            <div>
                {/* <Nav></Nav>
                <Header></Header> */}
                <div style={this.imgContainer}>
                    {data.map(dataItem => (
                        <ClickItem
                            key={dataItem.id}
                            id={dataItem.id}
                            name={dataItem.name}
                            image={dataItem.image}
                        // someFunction
                        // someClass
                        />
                    ))}
                </div>
            </div>
        )
    }
}


export default App;