const reducerCity = (state, { type, element }) => {
    switch (type) {
        case 'INPUT_TYPE':
            const inputVal = element.target.value
            return inputVal
        default: return state
    }
}
const reducerSelCity = (state, { type, payload }) => {
    switch (type) {
        case 'SELECT_CITY':
            return payload
        default: return state
    }
}
export default reducerCity;
export { reducerSelCity };
