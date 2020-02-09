import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userType"

const initialState = {
    loding: false,
    data: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
             }
        case FETCH_USER_SUCCESS:
            return {
                loaing: false,
                data: action.payload,
                error:''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}

export default reducer;