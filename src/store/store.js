import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from 'store/sagas'
import modules from 'store/modules'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const store = createStore(
  modules,composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

sagaMiddleware.run(rootSaga)

export default store;