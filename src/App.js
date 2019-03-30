import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Row from './components/Row/Row';
import ImageBox from './components/ImageBox/ImageBox';
import Image from './components/Images/Images';
import ScoreCounter from './components/ScoreCounter/ScoreCounter';
import { fred, daphne, velma, shaggy, scoobydoo } from "./images";

class App extends Component {

  state = {
    score: 0,
    characters: [
      {
        name: 'Fred',
        picture: fred,
      },
      {
        name: 'Daphne',
        picture: daphne,
      },
      {
        name: 'Velma',
        picture: velma,
      },
      {
        name: 'Shaggy',
        picture: shaggy,
      },
      {
        name: 'Scooby-Doo',
        picture: scoobydoo,
      },
    ]
  };
  shuffle = a => {
    return a.reduce((l, e, i) => {
      const j = Math.floor(Math.random() * (a.length - i) + i); // j is in [i, a.length[
      [a[i], a[j]] = [a[j], a[i]];
      return a;
    }, a);
  };

  handleClick = event => {
    if (event.target.clicked) {
      alert("you've clicked the same character twice! game over!");
      window.location.reload();
    }
    else {
      this.setState({
        score: this.state.score + 1
      }, () => this.scoreCheck());
      event.target.clicked = true;
      this.shuffle(this.state.characters);
    };
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.score !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }

  scoreCheck = () => {
    console.log(this.state.score);
    if (this.state.score === 5) {
      alert("You've clicked all the characters! You Win!");
      window.location.reload();
    };
  };

  render() {
    return (
      <Container>
        <Row>
          <ScoreCounter
            score={this.state.score}
          />
          <ImageBox>
            {this.state.characters.map(character => (
              <Image
                name={character.name}
                key={character.name}
                image={character.picture}
                click={this.handleClick}
                clicked={false}
              />
            ))}
          </ImageBox >
        </Row>
      </Container>
    );
  };
};

export default App;