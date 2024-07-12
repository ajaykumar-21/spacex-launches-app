import {
    FETCH_LAUNCHES_REQUEST,
    FETCH_LAUNCHES_SUCCESS,
    FETCH_LAUNCHES_FAILURE,
} from '../actions/launchActions';

const initialState = {
    loading: false,
    launches: [],
    error: '',
};

const launchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LAUNCHES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_LAUNCHES_SUCCESS:
            return {
                loading: false,
                launches: action.payload,
                error: '',
            };
        case FETCH_LAUNCHES_FAILURE:
            return {
                loading: false,
                launches: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default launchReducer;
