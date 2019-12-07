import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => { //fetchPosts is a function that returns an async arrow function
    const response = await jsonPlaceholder.get('/posts'); //response will be whatever api jsonPlaceholder returns
    dispatch({ type: 'FETCH_POSTS', payload: response.data}); //dispatch the action obj
};

export const fetchUser = id => dispatch => { //id is id of user we want to fetch
    _fetchUser(id, dispatch); // call the memoized function and pass it in id and dispatch
};

// create private function with underscore syntax of function name 
//we will define a memoized function outside our action creator that will make the api request and then dispatch the action and memoize it 
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`); 
    dispatch({ type: 'FETCH_USER', payload: response.data }); //dispatch the action obj
});