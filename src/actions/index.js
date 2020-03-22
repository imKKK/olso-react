import { CLEAR_SESSION, SET_SESSION } from '../constants/actionType'

function setNewSessionForCurrentUser(user) {
    return {
        type: SET_SESSION,
        user
    }
}

function clearSession() {
    return {
        type: CLEAR_SESSION
    }
}

export { setNewSessionForCurrentUser, clearSession }