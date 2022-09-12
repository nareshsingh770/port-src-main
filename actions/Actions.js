const contactDetails = (data) => {
    return {
        type: 'DETAIL_INPUT_USERS',
        payload: data
    }
}
const themeMode = (mode) => {
    return {
        type: 'COLOR_MODE_CHANGE',
        payload: mode
    }
}
const orderList = (item, price, qnt) => {
    return {
        type: 'ORDER_DETAILS',
        orderItem: item,
        price: price,
        quantity: qnt
    }
}

const weatherDataAction = (loc) => {
    return {
        type: 'SHOW_WEATHER',
        payload: loc
    }
}

const weatherState = (loc) => {
    return {
        type: 'WEATHER_LOC',
        payload: loc
    }
}


const addTodoList = (text) => {
    return {
        type: 'ADDED_TODO_TEXT',
        payload: text
    }
}
const deletedList = (id) => {
    return {
        type: 'DELETE_TODO_TEXT',
        payload: id
    }
}
const editedList = (element) => {
    return {
        type: 'UPDATE_TODO_TEXT',
        payload: element
    }
}
const deleteAllList = () => {
    return {
        type: 'DELETE_ALL_TODO_TEXT',
    }
}


export default contactDetails;
export { themeMode, orderList, weatherState, weatherDataAction, addTodoList, deletedList, editedList, deleteAllList };