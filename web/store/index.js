import { createStore } from 'redux'

const initialState = {
  theme: {},
}

const reducer = (state = initialState, { type, data }) => {
  switch (type) {
    case 'CHANGE_THEME':
      const randomTheme =
        state.themes[Math.floor(Math.random() * state.themes.length)]
      const theme = {
        primary: randomTheme.color_one,
        secondary: randomTheme.color_two,
      }

      return {
        ...state,
        theme,
      }
    case 'LOAD_THEMES':
      return {
        ...state,
        themes: data,
      }
    default:
      return state
  }
}

export const changeTheme = () => ({
  type: 'CHANGE_THEME',
})

const initializeStore = initialState => {
  return createStore(reducer, initialState)
}

export default initializeStore
