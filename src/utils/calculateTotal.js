

/* export const calculateTotal = (array) => {
    return array.reduce((acc, item) => {
        return acc + (item.price * item.quantity*1.2);
    }, 0)
} */

export const calculateTotal = (array) => {
    const total = array.reduce((acc, item) => {
        return acc + (item.price * item.quantity * 1.25);
    }, 0);
    return Math.round(total * 100) / 100;
}