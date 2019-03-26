import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import Row from './components/Row/Row';
import ImageBox from './components/ImageBox/ImageBox';
import Image from './components/Images/Images';

class App extends Component {

  state = {
    score: 0,
    images: ['./images/fred.png',
      './images/daphne.png',
      './images/velma.png',
      './images/shaggy.png',
      './images/scooby-doo.png',
      './images/zombie.png',
      './images/creeper.png']
  };

  handleClick = () => {
    if (none) {
      
    };
  };

  render() {
    return (
      <Container>
        <Row>
          <ImageBox
            {this.state.images.map(image => {
              <Image

              />
            })}
          />
        </Row>
      </Container>
    );
  };
};

export default App;