import React from 'react'
import styled from 'styled-components'

import shadow from 'style/shadow'

let background = '#8e24aa';

const Btn = styled.button`
  ${shadow(3)}
  background-color:${background};
  text-align: center;
  display: inline-block;
  width: 5vmin;
  height: 5vmin;
  line-height:5vmin;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 50%;
  font-size: 4vmin;
  color: #ffffff;
  transition: 0.2s;
  margin-top: auto;

  &:hover {
    cursor: pointer;
    background-color: #c158dc;
    ${shadow(4)}
  }

  &:active {
    ${shadow(6)}
    transform: scale(0.90);
  }
`

const CircleButton = ({handleClick}) => (
  <Btn onClick={handleClick}>
    +
  </Btn>
)

export default CircleButton