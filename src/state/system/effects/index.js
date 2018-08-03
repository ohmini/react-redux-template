import {initEffect} from './init'
import {sendLogEffect} from './sendLog'

export const systemEffects = [
  sendLogEffect,
  initEffect,
]