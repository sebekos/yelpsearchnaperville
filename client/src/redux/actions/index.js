import {
    SET_ALERT,
    REMOVE_ALL_ALERTS,
    TOGGLE_LOADING,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    DETAILS_SUCCESS,
    DETAILS_FAILURE
} from '../constants/types';
import axios from 'axios';
import uuid from 'uuid';

// Set alert
export const setAlert = (msg, alertType, timeout = 100000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: [{ msg, alertType, id }]
    });

    setTimeout(
        () => dispatch({ type: REMOVE_ALL_ALERTS, payload: id }),
        timeout
    );
};

// Search business
export const searchBusiness = formData => async dispatch => {
    try {
        dispatch({
            type: TOGGLE_LOADING,
            payload: true
        });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const res = await axios.post('/search', formData, config);
        dispatch({
            type: SEARCH_SUCCESS,
            payload: res.data
        });
        dispatch({
            type: REMOVE_ALL_ALERTS
        });
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: SEARCH_FAILURE,
            payload: errors
        });
    }
};

// Search details
export const searchDetails = formData => async dispatch => {
    try {
        dispatch({
            type: TOGGLE_LOADING,
            payload: true
        });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const res = await axios.post('/details', formData, config);
        dispatch({
            type: DETAILS_SUCCESS,
            payload: res.data
        });
        dispatch({
            type: REMOVE_ALL_ALERTS
        });
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: DETAILS_FAILURE,
            payload: errors
        });
    }
};

// Toggle add gallery
export const toggleLoading = value => async dispatch => {
    dispatch({
        type: TOGGLE_LOADING,
        payload: value
    });
};
