import {take} from 'redux-saga/effects' 

import {systemActions} from '../actions'

export function* sendLogEffect() {
  while(true) {
    const {payload: {msg, data}} = yield take(systemActions.sendLog.type)
    console.log(msg, data)
  }
}