import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootSaga from 'store/sagas'
import modules from 'store/modules'
import {setLoginState} from 'api/firebaseApi'
import * as loginActions from 'store/modules/login'
import * as todoListActions from 'store/modules/todoList'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware,logger]

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  modules, compose(applyMiddleware(...middlewares),devtools)
)

setLoginState((firebaseUser)=>{
  if(firebaseUser){
    store.dispatch(loginActions.saveUser(firebaseUser))
    store.dispatch(todoListActions.getTodo({user:firebaseUser.email}))
  }
})

window.onunload = function () {
  localStorage.removeItem('user');
  localStorage.removeItem('uid')
}

sagaMiddleware.run(rootSaga)

export default store;