import {setMessage} from './setMessage'

const initialState = {
  message: 'Hello World.'
}

export const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'system/SET_MESSAGE':
      return setMessage(state, action)
    default:
      return state
  }
}
