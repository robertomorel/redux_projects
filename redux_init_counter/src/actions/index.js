export const increment = nr => {
    return {
        type: 'INCREMENT',
        payload: 5
    };
};

export const decrement = nr => {
    return {
        type: 'DECREMENT',
        payload: 5
    };
};

export const signin = () => {
    return {
        type: 'SIGN_IN'
    };
};