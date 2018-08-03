import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {router5Middleware as createRouterMiddleware, router5Reducer} from 'redux-router5'
import {router} from '../router'
import {initialState} from './initialState'

import {systemEffects} from './system/effects'

const sagaMiddleware = createSagaMiddleware()
const routerMiddleware = createRouterMiddleware(router)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    router: router5Reducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(
    sagaMiddleware, routerMiddleware
  ))
)

systemEffects.forEach(fx => sagaMiddleware.run(fx))

export {
  store
}
