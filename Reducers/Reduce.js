
const initialDetail = {
    name: '',
    email: '',
    subject: '',
    message: ''
}
const initialOrderDetail = {}
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

const orderInput = (state = initialOrderDetail, action) => {
    switch (action.type) {
        case 'ORDER_DETAILS':
            return {
                ...state,
                [action.orderItem]: { 'price': action.price, 'quantity': action.quantity }
            }



        default: return state
    }
}



export default messageInput;
export { colorThemeApplied, orderInput };