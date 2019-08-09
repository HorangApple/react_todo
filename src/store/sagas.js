import { takeEvery, all, put, select  } from 'redux-saga/effects'
import { login, logout, postTodo, getTodos, deleteTodo, changeDone } from 'api/firebaseApi'

const getUserEmail = (state) => (state.login.get('user'))

function* accesslogin (){
  const response = yield login()
  const user = response.user.email
  const payload = {user}
  yield put({type:"todoList/GET_TODO",payload})
}

function* accesslogout(){
  yield logout()
  yield put({type:"login/DELETEUSER"})
  window.location.reload()
}

function* writeTodo(action){
  const user = yield select(getUserEmail)
  const {id} = action.payload
  yield postTodo(user, id).set({...action.payload})
}

function* removeTodo(action){
  const user = yield select(getUserEmail)
  const {id} = action.payload
  if(user) yield deleteTodo(user,id)
}

function* doneTodo(action){
  const user = yield select(getUserEmail)
  const {id} = action.payload
  if(user) yield changeDone(id, user)
}

function* getTodo(action){
  const {user} = action.payload
  const response = yield getTodos(user)
  const list = response.docs.map(todo=>todo.data())
  const payload = {list}
  yield put({type:"todoList/SET_TODO",payload})
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

function* watchGetTodo() {
  yield takeEvery('todoList/GET_TODO', getTodo)
}

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchPostTodo(),
    watchDeleteTodo(),
    watchDoneTodo(),
    watchGetTodo()
  ])
}