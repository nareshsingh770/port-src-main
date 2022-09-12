import { initialFeild } from "../components/home/Contact"
const messageInput = (state = initialFeild, { type, payload }) => {
    switch (type) {
        case 'DETAIL_INPUT_USERS':
            return {
                ...state,
                ...payload
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



const initialOrderDetail = {}
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

const weather_set = (state = 'delhi', { type, payload }) => {
    switch (type) {
        case 'WEATHER_LOC':
            return payload
        default: return state
    }
}
const weather_data = (state = '', { type, payload }) => {
    switch (type) {
        case 'SHOW_WEATHER':
            return payload
        default: return state
    }
}

const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADDED_TODO_TEXT':
            return [
                ...state,
                action.payload
            ]
            break
        case 'DELETE_TODO_TEXT':
            return state.filter(elem => elem.id !== action.payload)
            break
        case 'UPDATE_TODO_TEXT':
            console.log(action.payload)
            state.map(elem => {
                if (elem.id === action.payload.id) {
                    elem.name = action.payload.name
                }

            })
            break
        case 'DELETE_ALL_TODO_TEXT':
            return []
            break
        default: return state
    }
}



export default messageInput;
export { colorThemeApplied, orderInput, weather_set, weather_data, todoList };