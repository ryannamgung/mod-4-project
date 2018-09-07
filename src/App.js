import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './containers/GameContainer'
import {Sprite} from './components/Sprite'
import sheet from './res/maple-foreground.png'

class App extends Component {
  render() {
    return (
      <div className='App'>
        {Sprite({
          filename: sheet,
          x : 116,
          y: 79,
          width: 100, //range of
          height : 260 //range of 85
        })}
      </div>
    );
  }
}

export default App;
