export function getCatReducer(State = [], action) {

    if (action.type === 'GET_CAT') {
        return action.payload
    } else return State
}
