import React from 'react'
import styled from 'styled-components'

import shadow from 'style/shadow'

const Btn = styled.button`
  ${shadow(3)}
  background-color:${props=>props.user===""? '#8e24aa' :'#b71c1c'};
  color:white;
  border-width:0;
  padding: 5px 10px 5px 10px;
  vertical-align: middle;
  overflow: auto;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${props=>props.user===""? '#c158dc' :'#f05545'};
    ${shadow(4)}
  }

  &:active {
    ${shadow(6)}
    transform: scale(0.90);
  }
`

const LoginButton = ({user,clickLogin,clickLogout}) => {
  return (
    <Btn onClick={user==="" ? clickLogin: clickLogout} user={user}>
      {user===""? '로그인': '로그아웃'}
    </Btn>
  )
}

export default LoginButton