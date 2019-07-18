import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const LOGIN = 'login/LOGIN'
const LOGOUT = 'login/LOGOUT'

export const login = createAction(LOGIN)
export const logout = createAction(LOGOUT)

const initialState = Map({
  user:"",
  token:""
})

export default handleActions({
  [LOGIN]: (state, action) => {

  },
  [LOGOUT]: (state, action) => {
    
  }
},initialState)