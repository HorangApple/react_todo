import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const LOGIN = 'login/LOGIN'
const LOGOUT = 'login/LOGOUT'
const SAVEUSER = 'login/SAVEUSER'
const DELETEUSER = 'login/DELETEUSER'

export const login = createAction(LOGIN)
export const logout = createAction(LOGOUT)

const initialState = Map({
  user:"",
  token:""
})

export default handleActions({
  [SAVEUSER]: (state, action) =>{
    const {email,refreshToken} = action.data
    return state.set('user',email)
                .set('token',refreshToken)
  },
  [DELETEUSER]: (state, action)=>{
    console.log(action)
  }
},initialState)