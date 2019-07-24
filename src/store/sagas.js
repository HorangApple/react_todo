import { takeEvery, all, put, select  } from 'redux-saga/effects'
import { login, logout, postTodo, getTodo, deleteTodo } from 'api/firebaseApi'

const getUserEmail = (state) => (state.login.get('user'))

function* accesslogin (){
  const response = yield login()
  yield put({type:"login/SAVEUSER", data:response.user})
}

function* accesslogout(){
  yield logout()
}

function* writeTodo(action){
  const user = yield select(getUserEmail)
  const doc = yield postTodo(user)
  const todoId = doc.id
  yield doc.set({todoId,...action.payload})
}

function* removeTodo(action){
  const user = yield select(getUserEmail)
  console.log(action.payload)
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

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchPostTodo(),
    watchDeleteTodo()
  ])
}