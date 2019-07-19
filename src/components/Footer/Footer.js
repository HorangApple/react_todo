import React from 'react'
import styled from 'styled-components'

import LoginButton from 'components/LoginButton'

const Body = styled.div`
  margin-top:1rem;
  display:flex;
  justify-content:center;
`

const Footer = (data) =>{
  return(
    <Body>
      <LoginButton {...data}/>
    </Body>
  )
}

export default Footer