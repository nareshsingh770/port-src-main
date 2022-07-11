
const initialDetail = {
    name: '',
    email: '',
    subject: '',
    message: ''
}
const messageInput = (state = initialDetail, action) => {
    switch (action.type) {
        case 'DETAIL_INPUT_USERS':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default: return state
    }
}


const colorThemeApplied = (theme = false, action) => {
    switch (action.type) {
        case 'COLOR_MODE_CHANGE':
            return action.payload
        default: return theme
    }
}




export default messageInput;
export { colorThemeApplied };