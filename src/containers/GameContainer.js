import React, {Component} from 'react'
import Game from '../components/Game'

class GameContainer extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return <Game />
  }
}

export default GameContainer
