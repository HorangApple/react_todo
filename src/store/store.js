import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootSaga from 'store/sagas'
import modules from 'store/modules'
import {setLoginState} from 'api/firebaseApi'
import * as loginActions from 'store/modules/login'
import * as todoListActions from 'store/modules/todoList'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware,logger]

const store = createStore(
  modules, applyMiddleware(...middlewares)
)

setLoginState((firebaseUser)=>{
  if(firebaseUser){
    store.dispatch(loginActions.saveUser(firebaseUser))
    store.dispatch(todoListActions.getTodo({user:firebaseUser.email}))
  }
})


sagaMiddleware.run(rootSaga)

export default store;