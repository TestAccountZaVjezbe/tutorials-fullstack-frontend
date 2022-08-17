export const incrementCounter = () => {
    return { type: 'INCREMENT'}
};

export const decrementCounter = () => {
    return { type: 'DECREMENT'}
};

export const incrementByAmount = (data) => {
    return { type: 'BY_AMOUNT', payload: Number(data)}
}