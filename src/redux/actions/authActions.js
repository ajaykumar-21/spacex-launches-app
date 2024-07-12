export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => {
    // Dummy authentication
    return dispatch => {
        if (username === 'user' && password === 'password') {
            dispatch({ type: LOGIN_SUCCESS, payload: { username } });
        }
    };
};

export const logout = () => ({
    type: LOGOUT,
});
