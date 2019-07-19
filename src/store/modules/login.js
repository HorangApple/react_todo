import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const LOGIN = 'login/LOGIN'
const LOGOUT = 'login/LOGOUT'
const SAVEUSER = 'login/SAVEUSER'
const DELETEUSER = 'login/DELETEUSER'

export const login = createAction(LOGIN)
export const logout = createAction(LOGOUT)
export const saveUser = createAction(SAVEUSER)

const initialState = Map({
  user:"",
  token:"",
  uid:""
})

export default handleActions({
  [SAVEUSER]: (state, action) =>{
    const {email,refreshToken,uid} = action.payload
    return state.set('user',email)
                .set('token',refreshToken)
                .set('uid',uid)
  },
  [DELETEUSER]: (state, action)=>{
    return state.set('user','')
                .set('token','')
                .set('uid','')
  }
},initialState)