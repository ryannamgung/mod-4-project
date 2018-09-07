//adapted from react-spritesheet
import React, { PropTypes } from 'react'
import sheet from '../res/maple-foreground.png'

export const Sprite = ({ filename, x, y, width, height }) => {
  if(!filename){
    return null
  }

  // x *= 2
  // y *= 2

  const style = {
    backgroundImage: `url(${filename})`,
    backgroundPosition: `${x * (-1)}px ${y * (-1)}px`,
    width,
    height,
  }

  return <div style={style} data-x={x} data-y={y} data-w={width} data-h={height} />
}

//const bg = Sprite(then fill out the hash)
