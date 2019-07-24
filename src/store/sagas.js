import { takeEvery, all, put, select  } from 'redux-saga/effects'
import { login, logout, postTodo, getTodo, deleteTodo, changeDone } from 'api/firebaseApi'

const getUserEmail = (state) => (state.login.get('user'))

function* accesslogin (){
  yield login()
}

function* accesslogout(){
  yield logout()
  yield put({type:"login/DELETEUSER"})
}

function* writeTodo(action){
  const user = yield select(getUserEmail)
  const {id} = action.payload
  yield postTodo(user, id).set({...action.payload})
}

function* removeTodo(action){
  const user = yield select(getUserEmail)
  const {id} = action.payload
  yield deleteTodo(user,id)
}

function* doneTodo(action){
  const user = yield select(getUserEmail)
  const {id} = action.payload
  yield changeDone(id, user)
}

// watcher
function* watchLogin() {
  yield takeEvery('login/LOGIN', accesslogin)
}

function* watchLogout() {
  yield takeEvery('login/LOGOUT', accesslogout)
}

function* watchPostTodo() {
  yield takeEvery('todoList/WRITE_TODO', writeTodo)
}

function* watchDeleteTodo() {
  yield takeEvery('todoList/REMOVE_TODO', removeTodo)
}

function* watchDoneTodo() {
  yield takeEvery('todoList/DONE_TODO', doneTodo)
}

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchPostTodo(),
    watchDeleteTodo(),
    watchDoneTodo()
  ])
}