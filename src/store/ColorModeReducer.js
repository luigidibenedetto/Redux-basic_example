import {SET_DARK_MODE, SET_LIGHT_MODE, defaultStore} from './constants';

export default function ColorModeReducer(state = defaultStore, action) {
	switch (action.type) {
		case SET_DARK_MODE:
			return {
				darkMode: action.payload,
				lightMode: false
			}
		case SET_LIGHT_MODE:
			return {
				darkMode: false,
				lightMode: action.payload
			}
		default: 
			return state;
	}
}