import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as inputActions from 'store/modules/todoInput'
import * as listActions from 'store/modules/todoList'
import TodoInput from 'components/TodoInput'

class TodoInputContainer extends Component {
  handleInput = (e) => {
    const content = e.target.value
    const {InputActions} = this.props
    InputActions.inputTodo({content})
  }

  handleClick = () => {
    const {content} = this.props
    if (content!==""){
      const {ListActions, InputActions} = this.props
      const created_at = new Date()
      ListActions.writeTodo({content,created_at,done:false})
      InputActions.initialize()
    }
  }

  render(){
    const { content } = this.props
    return (
      <TodoInput content={content} handleInput={this.handleInput} handleClick={this.handleClick}/>
    )
  }
}

export default connect(
  (state) => ({
    content: state.todoInput.get('content')
  }),
  (dispatch) =>({
    InputActions: bindActionCreators(inputActions, dispatch),
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(TodoInputContainer)