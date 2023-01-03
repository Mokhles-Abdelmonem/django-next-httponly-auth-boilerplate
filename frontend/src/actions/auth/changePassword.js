import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';
import { API_URL } from '../../config/index';



export const changePassword = (
    old_password,
    new_password1,
    new_password2,
) => async dispatch => {
    const body = JSON.stringify({
        old_password,
        new_password1,
        new_password2,
    });


    try {
        const apiRes = await fetch('/api/changePassword/', {
            method: 'POST',
            body: body
        });
        const res = await apiRes.json();
        return res

    } catch(err) {
        dispatch({
            type: REGISTER_FAIL
        });
    }

    dispatch({
        type: REMOVE_AUTH_LOADING
    });
};