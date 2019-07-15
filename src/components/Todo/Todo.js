import React, {Component} from 'react'
import styled from 'styled-components'

import shadow from 'style/shadow'

const Body = styled.div`
  ${shadow(1)}
  background-color:white;
  margin-top: 10px;
  height: 50px;
  padding: 10px 10px 10px 10px;
`

const CheckBox = styled.input`
  
`

const Text = styled.p`

`

class Todo extends Component {

  render() {
    return (
      <Body>
        <Text><CheckBox type="checkbox" />잠 자고 싶다, 쿨쿨</Text>
      </Body>
    )
  }
} 

export default Todo