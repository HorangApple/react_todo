import React from 'react'
import styled from 'styled-components'

import shadow from 'style/shadow'

const Btn = styled.button`
  ${shadow(3)}
  background-color:${props=>props.loginCheck ? '#b71c1c' : '#8e24aa'};
  color:white;
  border-width:0;
  padding: 5px 10px 5px 10px;
  vertical-align: middle;
  overflow: auto;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${props=>props.loginCheck ? '#f05545' : '#c158dc'};
    ${shadow(4)}
  }

  &:active {
    ${shadow(6)}
    transform: scale(0.90);
  }
`

const LoginButton = ({user,clickLogin,clickLogout}) => {
  const loginCheck = localStorage.getItem('user') !==null || user !=="" ? true : false
  return (
    <Btn onClick={ loginCheck ? clickLogout : clickLogin } loginCheck={loginCheck}>
      { loginCheck ? '로그아웃' : '로그인'}
    </Btn>
  )
}

export default LoginButton