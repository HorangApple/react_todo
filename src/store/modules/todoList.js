import { createAction, handleActions } from 'redux-actions'
import { Map, List } from 'immutable'

const WRITE_TODO = 'todoList/WRITE_TODO'
const INITIALIZE = 'todoList/INITIALIZE'
const REMOVE_TODO = 'todoList/REMOVE_TODO'
const DONE_TODO = 'todoList/DONE_TODO'

// 액션 생성자
export const initialize = createAction(INITIALIZE)
export const writeTodo = createAction(WRITE_TODO)
export const removeTodo = createAction(REMOVE_TODO)
export const doneTodo = createAction(DONE_TODO)

// 초기 상태 정의
const initialState = List([
  Map({
    id:1,
    done: false,
    content: "집 간다"
  }),
  Map({
    id:2,
    done: false,
    content: "밥 먹자"
  }),  
])

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [WRITE_TODO]:(state, action) => {
    const { id, content, done } = action.payload
    return state.push(Map({
      id,
      done,
      content
    }))
  },
  [DONE_TODO]: (state, action) => {
    const { id } = action.payload
    return state.updateIn([id,'done'], done=>!done)
  },
  [REMOVE_TODO]: (state, action) => {
    const { id } = action.payload
    return state.delete(id)
  }
}, initialState)