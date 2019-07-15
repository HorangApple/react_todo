import React, {Component} from 'react'
import styled from 'styled-components'

import Todo from 'components/Todo'

class TodoList extends Component {
  render(){
    return (
      <div>
        <h3>TodoList</h3>
        <div>
          <Todo></Todo>
          <Todo></Todo>
        </div>
      </div> 
    )
  }
}

export default TodoList