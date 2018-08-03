export const setMessage = (state, action) => {
  return {
    ...state,
    message: action.payload.message,
  }
}