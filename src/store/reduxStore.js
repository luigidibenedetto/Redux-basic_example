import {createStore, compose} from 'redux'
import ColorModeReducer from './ColorModeReducer'
import {defaultStore} from './constants'

export const store = createStore(ColorModeReducer, defaultStore, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));