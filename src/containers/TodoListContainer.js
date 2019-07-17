import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as listActions from 'store/modules/todoList'
import TodoList from 'components/TodoList'

class TodoListContainer extends Component {
  handleCheck = (e) =>{
    const id = e.target.id
    const {ListActions} = this.props
    ListActions.doneTodo({id:id})
  }

  handleDelete = (e) =>{
    const id = e.currentTarget.id
    const {ListActions} = this.props
    ListActions.removeTodo({id:id})
  }

  render() {
    return (
      <TodoList list={this.props.list} handleCheck={this.handleCheck} handleDelete={this.handleDelete}/>
    )
  }
}

export default connect(
  (state) => ({
    list:state.todoList.toJS()
  }),
  (dispatch) => ({
    ListActions : bindActionCreators(listActions,dispatch)
  })
)(TodoListContainer)