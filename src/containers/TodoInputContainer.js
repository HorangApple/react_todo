import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as inputActions from 'store/modules/todoInput'
import * as listActions from 'store/modules/todoList'
import TodoInput from 'components/TodoInput'

import firebase from 'firebase';
import { getTodoId } from 'api/firebaseApi'

class TodoInputContainer extends Component {
  handleInput = (e) => {
    const content = e.target.value
    const {InputActions} = this.props
    InputActions.inputTodo({content})
  }

  handleClick = async () => {
    const {content} = this.props
    if (localStorage.getItem('user')){
      if(content!==""){
        const {ListActions, InputActions} = this.props
        const created_at = new Date()
        const user = firebase.auth().currentUser.email
        const id = await getTodoId(user)
        ListActions.writeTodo({id,content,created_at,done:false})
        InputActions.initialize()
      } else {
        alert("할 일을 입력해 주세요.")
      }
    } else {
      alert("로그인을 해주세요.")
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