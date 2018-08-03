import {
  put,
} from 'redux-saga/effects'

import {systemActions} from '../actions'

export function* initEffect() {
   yield put(systemActions.sendLog('send log...', 'example initial effect'))
}