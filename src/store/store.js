import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootSaga from 'store/sagas'
import modules from 'store/modules'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware,logger]

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  modules, compose(applyMiddleware(...middlewares),devtools)
)

sagaMiddleware.run(rootSaga)

export default store;