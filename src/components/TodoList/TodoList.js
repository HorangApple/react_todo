import React, { Component } from "react";
import styled from "styled-components";

import Todo from "components/Todo";
import CircleButton from "components/CircleButton";
import shadow from "style/shadow"

const Body = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Todos = styled.div`
  margin-left: auto; 
  margin-right: auto;
`

const Title = styled.p`
  ${shadow(3)}
  font-size:15px;
  color:white;
  background-color: #c158dc;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 40px;
  width: 80px;
  text-align:center;
`

class TodoList extends Component {
  render() {
    return (
      <Body>
        <Menu>
          <Title>할 일</Title>
          <CircleButton/>
        </Menu>
        <Todos>
          <Todo />
          <Todo />
        </Todos>
      </Body>
    );
  }
}

export default TodoList;
