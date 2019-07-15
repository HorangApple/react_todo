import React from 'react'
import styled from 'styled-components'

import TodoList from 'components/TodoList'
import Button from 'components/Button'

const TodoPage = () => {
  return (
    <div>
      <h1>My Todo</h1>
      <Button></Button>
      <TodoList></TodoList>
    </div>
  )
}

export default TodoPage