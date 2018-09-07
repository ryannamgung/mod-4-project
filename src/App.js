import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './containers/GameContainer'
import {Sprite} from './components/Sprite'
import sheet from './res/maple-foreground.png'
import {idle} from './components/Sprite'

//rather import the const we have defined instead of sprite
class App extends Component {
  render() {
    return (
      <div className='App' id="fakingcanvas">
        {/* {Sprite({
          filename: sheet,
          x : 116,
          y: 79,
          width: 100, //range of
          height : 260 //range of 85
        })} */}
        {idle}
      </div>
    );
  }
}

export default App;
