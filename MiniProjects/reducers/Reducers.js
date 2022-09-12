const reducerSelCity = (state, { type, payload }) => {
    switch (type) {
        case 'SELECT_CITY':
            return payload
        default: return state
    }
}
export default reducerSelCity;
