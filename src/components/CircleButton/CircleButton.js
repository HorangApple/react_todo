import React from 'react'
import styled from 'styled-components'

import shadow from 'style/shadow'

let background = '#8e24aa';

const Btn = styled.button`
  ${shadow(3)}
  background-color:${background};
  text-align: center;
  display: block;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 50%;
  font-size: 30px;
  color: #ffffff;
  transition: 0.2s;

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

const CircleButton = (props) => (
  <Btn onClick={props.func}>
    +
  </Btn>
)

export default CircleButton