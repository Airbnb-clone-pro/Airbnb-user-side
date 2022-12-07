
// const token = localStorage.getItem('token')
export function userReducer(State = null, action) {

    if (action.type === 'SET_USER') {
        const token = action.payload.token
        localStorage.getItem('token', token)
        return action.payload
    } else return State


}

