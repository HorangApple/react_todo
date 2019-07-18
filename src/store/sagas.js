import { takeEvery, all, put  } from 'redux-saga/effects'
import { login, logout } from 'api/firebaseApi'

function* accesslogin (){
  const response = yield login()
  yield put({type:"login/SAVEUSER", data:response.user})
}

function* accesslogout(){
  yield logout()
}

// watcher
function* watchLogin() {
  yield takeEvery('login/LOGIN', accesslogin)
}

function* watchLogout() {
  yield takeEvery('login/LOGOUT', accesslogout)
}

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout()
  ])
}