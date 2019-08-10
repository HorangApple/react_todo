import React from 'react'
import styled from 'styled-components'

import {TodoPage} from 'pages'


const Body = styled.div`
  margin-left:2rem;
  margin-right:2rem;
`

const App = () => {

  return (
    <Body>
      <TodoPage></TodoPage>
    </Body>
  )
}

export default App