//adapted from react-spritesheet
import React, { PropTypes } from 'react'
import sheet from '../res/maple-foreground.png'
import knight from '../res/knight-cropped/Knight_idle_01.png'
export const Sprite = ({ filename, x, y, width, height }) => {
  if(!filename){
    return null
  }

  x *= 2
  y *= 2

  const style = {
    backgroundImage: `url(${filename})`,
    backgroundPosition: `${x * (-1)}px ${y * (-1)}px`,
    width,
    height,
  }

  return <div style={style} data-x={x} data-y={y} data-w={width} data-h={height} />
}
const style = {
  backgroundImage: `url(${knight})`,
  // backgroundPosition: `${0 * (-1)}px ${0 * (-1)}px`,
  backgroundPosition: `0px 0px`,
  width: 103,
  height: 149
}
export const idle = <div style={style} id='player'></div>
