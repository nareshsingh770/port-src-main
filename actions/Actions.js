const contactDetails = (element) => {
    return {
        type: 'DETAIL_INPUT_USERS',
        payload: element
    }
}
const themeMode = (mode) => {
    return {
        type: 'COLOR_MODE_CHANGE',
        payload: mode
    }
}


export default contactDetails;
export { themeMode };