import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import Row from './components/Row/Row';
import ImageBox from './components/ImageBox/ImageBox';
import Image from './components/Images/Images';
import { fred, daphne, velma, shaggy, scoobydoo } from "./images";

class App extends Component {

  state = {
    score: 0,
  };

  // handleClick = () => {
  //   if (none) {

  //   };
  // };

  characters = [
    {
      name: 'Fred',
      picture: fred
    },
    {
      name: 'Daphne',
      picture: daphne
    }, {
      name: 'Velma',
      picture: velma
    }, {
      name: 'Shaggy',
      picture: shaggy
    }, {
      name: 'Scooby-Doo',
      picture: scoobydoo
    }
  ];

  render() {
    return (
      <Container>
        <Row>
          <ImageBox>
            {this.characters.map(character => (
              <Image
                name={character.name}
                image={character.picture}
              />
            ))}
          </ImageBox >
        </Row>
      </Container>
    );
  };
};

export default App;