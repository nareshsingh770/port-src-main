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


export default contactDetails;
export { themeMode, orderList };