import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

function* deleteTodo (){
  console.log('delete!')
}

function* watchDelete() {
  yield takeEvery('todoList/REMOVE_TODO', deleteTodo)
}

export default function* rootSaga() {
  yield all([
    watchDelete()
  ])
}