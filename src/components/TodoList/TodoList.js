import React, { Component } from "react";
import styled from "styled-components";

import Todo from "components/Todo";
import Button from "components/Button";

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListBody = styled.div`
  margin-top: 20px;
`

class TodoList extends Component {
  render() {
    return (
      <div>
        <Menu>
          <p>할 일 / 했던 일</p>
          <Button>추가</Button>
        </Menu>
        <ListBody>
          <Todo />
          <Todo />
        </ListBody>
      </div>
    );
  }
}

export default TodoList;
