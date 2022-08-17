export const initialState = {
  value: 0
}

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
          ...state,
          value: state.value + 1
      }
    case 'DECREMENT':
      return {
          ...state,
          value: state.value - 1
      }
    case 'BY_AMOUNT': 
      return {
        ...state,
        value: state.value + action.payload
      }
    default:
      return state
  }
}