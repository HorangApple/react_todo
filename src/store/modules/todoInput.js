import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const INPUT_TODO = 'todoInput/INPUT_TODO'
const INITIALIZE = 'todoInput/INITIALIZE'

export const initialize = createAction(INITIALIZE)
export const inputTodo = createAction(INPUT_TODO)

const initialState = Map({
  content:""
})

export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [INPUT_TODO]: (state, action) => {
    const {content} = action.payload
    return state.setIn(['content'], content)
  }
},initialState)