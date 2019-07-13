import React from 'react';
// import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import ClickItem from './components/Image';
import data from './data.json';

class App extends React.Component {
    state = {
        data,
        score: 0,
        topScore: 0,
        randomizeImg: () => {
            this.setState(({ data }) => ({
                data: data.sort(function () {
                    return 0.5 - Math.random();
                })
            }))
        },
        updateScore: () => {
            this.setState({ score: this.state.score + 1 }, () => {
                this.state.updateTopScore();
                if (this.state.score === 12) {
                    alert("You win!");
                    this.state.resetGame();
                }
            })
        },
        updateTopScore: () => {
            if (this.state.score > this.state.topScore) {
                this.setState({ topScore: this.state.score });
            };
        },
        resetGame: () => {
            this.message = "";
            this.state.data.forEach(dataItem => { dataItem.clicked = false });
            this.setState({ score: 0 });
        }
    }

    message = "";

    imgContainer = {
        width: "900px",
        margin: "0 auto"
    }

    checkClicked = id => {
        let clickedImg = this.state.data.filter(dataItem => dataItem.id === id);

        if (clickedImg[0].clicked === false) {
            clickedImg[0].clicked = true;
            this.message = "You guessed correctly!"
            this.state.updateScore();
            this.state.randomizeImg();
        } else {
            alert("You guessed incorrectly!");
            this.state.resetGame();
        }
    }

    componentDidMount() {
        this.state.randomizeImg();
    }

    render() {
        return (
            <div>
                <Nav score={this.state.score} topScore={this.state.topScore} message={this.message} />
                <Header />
                <div style={this.imgContainer}>
                    {data.map(dataItem => (
                        <ClickItem
                            key={dataItem.id}
                            id={dataItem.id}
                            name={dataItem.name}
                            image={dataItem.image}
                            handleClick={this.checkClicked}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default App;