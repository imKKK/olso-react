import { combineReducers } from 'redux'
import { SET_SESSION, CLEAR_SESSION } from '../constants/actionType'


function manageSession(state={}, action) {
    switch(action.type) {
        case SET_SESSION:
            return {
                user: action.user,
                isAuthenticated: true
            }
        case CLEAR_SESSION:
        default:
            return {
                user: null,
                isAuthenticated: false
        }
    }
}

const OlsoSession = combineReducers({
    manageSession
});

export default OlsoSession;