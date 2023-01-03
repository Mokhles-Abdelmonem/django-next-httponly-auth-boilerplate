import {
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
} from './types';
import { API_URL } from '../../config/index';
import cookie from 'cookie';



export const load_user = () => async dispatch => {
    try {
        const res = await fetch('/api/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await res.json();

        if (res.status === 200) {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: LOAD_USER_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: LOAD_USER_FAIL
        });
    }
};