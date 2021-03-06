import React from 'react'
import styled from 'styled-components'

import TodoInputContainer from 'containers/TodoInputContainer'
import TodoListContainer from 'containers/TodoListContainer'
import FooterContainer from 'containers/FooterContainer'
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

const Text = styled.h1`
  ${shadow(4)}
  text-align: center;
  background-color: #8e24aa;
  color: white;
  margin-left: auto;
  margin-right: auto;
  width: 35vmin;
  height: 10vmin;
  line-height: 10vmin;
  font-size: 4vmin;
`
const Title = styled.div`
  display:flex;
  justify-content:center;
`;

const TodoPage = () => {
  return (
    <Page>
      <Title>
        <Text>My Todo</Text>
      </Title>
      <TodoInputContainer />
      <TodoListContainer />
      <FooterContainer />
    </Page>
  )
}

export default TodoPage