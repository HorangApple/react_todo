import React from "react";
import styled from "styled-components";

import Todo from "components/Todo";

const Body = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`

const Todos = styled.div`
  margin-left: auto; 
  margin-right: auto;
`

const TodoList = ({list,handleCheck,handleDelete}) => {
  return (
    <Body>
      <Todos>
        {list.map(todo=><Todo {...todo} handleCheck={handleCheck} handleDelete={handleDelete} key={todo.id}/>)}
      </Todos>
    </Body>
  )
}

export default TodoList;
