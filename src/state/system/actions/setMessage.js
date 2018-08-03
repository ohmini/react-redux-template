const type = 'system/SET_MESSAGE'

export const setMessage = (message) => ({
  type,
  payload: {
    message,
  }
})

setMessage.type = type