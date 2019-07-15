import React, {Component} from 'react'
import styled from 'styled-components'

import shadow from 'style/shadow'

const Card = styled.div`
  ${shadow(1)}
  
`

class Todo extends Component {

  render() {
    return (
      <Card>
        Todo
      </Card>
    )
  }
} 

export default Todo