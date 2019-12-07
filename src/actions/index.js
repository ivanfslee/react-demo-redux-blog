import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => { //fetchPosts is a function that returns an async arrow function
    const response = await jsonPlaceholder.get('/posts'); //response will be whatever api jsonPlaceholder returns
    dispatch({ type: 'FETCH_POSTS', payload: response.data}); //dispatch the action obj
};

export const fetchUser = (id) => async dispatch => { //id is id of user we want to fetch
    const response = await jsonPlaceholder.get(`/users/${id}`); 
    dispatch({ type: 'FETCH_USER', payload: response.data }); //dispatch the action obj
};