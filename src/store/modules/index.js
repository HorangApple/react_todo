import { combineReducers } from 'redux'

import todoList from './todoList'
import todoInput from './todoInput'
import login from './login'

export default combineReducers({todoList, todoInput, login})