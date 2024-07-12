import { LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
    authenticated: false,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                authenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
