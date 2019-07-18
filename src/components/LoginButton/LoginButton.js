import React from 'react'
import styled from 'styled-components'

import shadow from 'style/shadow'

const Btn = styled.button`
  ${shadow(3)}
  background-color:#8e24aa;
  color:white;
  border-width:0;
  padding: 5px 10px 5px 10px;
  vertical-align: middle;
  overflow: auto;
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

const LoginButton = ({clickLogin}) => {
  return (
    <Btn onClick={clickLogin}>
      로그인
    </Btn>
  )
}

export default LoginButton