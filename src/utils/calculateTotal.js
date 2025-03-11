

export const calculateTotal = (array) => {
    return array.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0)
}