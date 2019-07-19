import { takeEvery, all, put  } from 'redux-saga/effects'
import { login, logout } from 'api/firebaseApi'

function* accessLogin (){
  const response = yield login()
  yield put({type:"login/SAVEUSER", payload:response.user})
}

function* accessLogout(){
  yield logout()
  yield put({type:"login/DELETEUSER"})
}

// watcher
function* watchLogin() {
  yield takeEvery('login/LOGIN', accessLogin)
}

function* watchLogout() {
  yield takeEvery('login/LOGOUT', accessLogout)
}

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout()
  ])
}