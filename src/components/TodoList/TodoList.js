import React, { Component } from "react";
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

class TodoList extends Component {
  render() {
    return (
      <Body>
        <Todos>
          <Todo />
          <Todo />
        </Todos>
      </Body>
    );
  }
}

export default TodoList;
