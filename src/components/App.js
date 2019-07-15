import React from 'react'
import styled from 'styled-components'

import {TodoPage} from 'pages'


const Body = styled.div`
  display: relative;
`

const App = () => {

  return (
    <Body>
      <TodoPage></TodoPage>
    </Body>
  )
}

export default App