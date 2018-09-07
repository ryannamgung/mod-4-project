import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

document.addEventListener('keydown', (e) => {
  let player = document.getElementById('player')
  debugger
  let left = parseInt(player.style.left)
  if(e.key == 'ArrowRight'){
    player.style.left = `${left+15}px`
  }else if(e.key == 'ArrowLeft'){
    player.style.left = `${left-15}px`
  }
  console.log(e.key)
  // player.style.
})
