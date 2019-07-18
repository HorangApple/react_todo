import React from 'react'
import styled from 'styled-components'

import LoginButton from 'components/LoginButton'

const Body = styled.div`
  margin-top:1rem;
  display:flex;
  justify-content:center;
`

const Footer = ({clickLogin}) =>{
  return(
    <Body>
      <LoginButton clickLogin={clickLogin}/>
    </Body>
  )
}

export default Footer