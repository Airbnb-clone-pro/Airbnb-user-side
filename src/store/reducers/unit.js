var state = {
    title: "",
    description: "",
    cat: null,
    price: null

}

export function unitReducer(State = state, action) {

    if (action.type === 'SET_UNIT') {
        let payload = action.payload
        return { ...State, ...payload }
    } else return State


}
