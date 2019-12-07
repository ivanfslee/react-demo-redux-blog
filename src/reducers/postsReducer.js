export default (state = [], action) => { //give state a default value on an empty array on app start-up
    //previous syntax we used 
    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload];
    // }
    // return state

    //We use switch statements instead of if statement to ensure we handle every action that comes into reducer 
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};