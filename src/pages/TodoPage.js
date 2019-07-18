import React from 'react'
import styled from 'styled-components'

import TodoInputContainer from 'containers/TodoInputContainer'
import TodoListContainer from 'containers/TodoListContainer'
import Footer from 'components/Footer'
import shadow from 'style/shadow'

const Page = styled.div`
  ${shadow(3)}
  max-width:500px;
  margin-left: auto;
  margin-right: auto;
  margin-top : 20px;
  padding : 15px 20px 15px 20px;
  background-color: #efe5fd;
`

const Title = styled.h1`
  ${shadow(4)}
  text-align: center;
  background-color: #8e24aa;
  color: white;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 60px;
  line-height: 60px;
`

const TodoPage = () => {
  return (
    <Page>
      <Title>My Todo</Title>
      <TodoInputContainer />
      <TodoListContainer />
      <Footer />
    </Page>
  )
}

export default TodoPage