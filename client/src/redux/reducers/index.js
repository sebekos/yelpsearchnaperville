import {
    SET_ALERT,
    REMOVE_ALL_ALERTS,
    TOGGLE_LOADING,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    DETAILS_SUCCESS,
    DETAILS_FAILURE
} from '../constants/types';

const initialState = {
    alert: [],
    search: [],
    details: {},
    loading: false,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return {
                ...state,
                alert: payload
            };
        case REMOVE_ALL_ALERTS:
            return {
                ...state,
                alert: []
            };
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: payload
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                search: payload,
                loading: false
            };
        case DETAILS_SUCCESS:
            return {
                ...state,
                details: payload,
                loading: false
            };
        case DETAILS_FAILURE:
        case SEARCH_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}
