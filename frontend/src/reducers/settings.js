import {
    UPDATE_SETTING_SUCCESS,
} from '../actions/types';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    register_success: false
};

const settingsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                register_success: true
            }
        case REGISTER_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    };
};

export default settingsReducer;
