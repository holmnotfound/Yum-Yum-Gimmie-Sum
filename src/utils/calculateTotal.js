

export const calculateTotal = (array) => {
    console.log(array)
    return array.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0)
}