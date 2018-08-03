const type = 'system/SEND_LOG'

export const sendLog = (msg, data) => ({
  type: type,
  payload: {
    msg,
    data,
  }
})

sendLog.type = type