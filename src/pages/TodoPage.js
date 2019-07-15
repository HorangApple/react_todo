import React from 'react'
import styled from 'styled-components'

import TodoList from 'components/TodoList'
import shadow from 'style/shadow'

const Page = styled.div`
  ${shadow(3)}
  max-width:500px;
  margin-left: auto;
  margin-right: auto;
  margin-top : 20px;
  padding : 15px 10px 15px 10px;
`

const Title = styled.h1`
  ${shadow(6)}
  text-align: center;
  background-color: #673ab7;
  color: white;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 60px;
`

const TodoPage = () => {
  return (
    <Page>
      <Title>My Todo</Title>
      <TodoList></TodoList>
    </Page>
  )
}

export default TodoPage