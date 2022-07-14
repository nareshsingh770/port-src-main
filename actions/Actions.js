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
    // console.log(detail)
    return {
        type: 'ORDER_DETAILS',
        orderItem: item,
        price: price,
        quantity: qnt
    }
}

const textInput = (elem) => {
    return {
        type: 'INPUT_TEXT',
        payload: elem
    }
}


const weatherState = (loc) => {
    return {
        type: 'WEATHER_LOC',
        payload: loc
    }
}


export default contactDetails;
export { themeMode, orderList, textInput, weatherState };