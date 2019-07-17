import { combineReducers } from 'redux'

import todoList from './todoList'
import todoInput from './todoInput'

export default combineReducers({todoList, todoInput})