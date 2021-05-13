import {SET_DARK_MODE, SET_LIGHT_MODE} from './constants';

export const setDarkMode = (boolean) => ({
    type: SET_DARK_MODE,
    payload: !boolean
});

export const setLightMode = (boolean) => ({
    type: SET_LIGHT_MODE,
    payload: !boolean
});