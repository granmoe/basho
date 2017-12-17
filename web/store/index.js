import { createStore } from 'redux'

const initialState = {
  theme: {},
}

const reducer = (state = initialState, { type, data }) => {
  switch (type) {
    case 'SET_THEME':
      console.log(data, type)
      return data
    default:
      return state
  }
}

const initializeStore = initialState => {
  return createStore(reducer, initialState)
}

export default initializeStore
