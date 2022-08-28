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


export default contactDetails;
export { themeMode, orderList, weatherState, weatherDataAction };