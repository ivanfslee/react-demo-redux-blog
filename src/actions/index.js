import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => { //getState function is from redux store that gives us access to data inside of redux store 
    await dispatch(fetchPosts()); //must dispatch call to action creator. also must await the fetchPosts request
    const userIds = _.uniq(_.map(getState().posts, 'userId')) //go through posts array and get unique userId from them

    userIds.forEach(id => dispatch(fetchUser(id))); //for each userId , run fetchUser action creator 

    //_.chain refactor 
    // _.chain(getState().posts)
    //     .map('userId')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value();

};

export const fetchPosts = () => async dispatch => { //fetchPosts is a function that returns an async arrow function
    const response = await jsonPlaceholder.get('/posts'); //response will be whatever api jsonPlaceholder returns
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data}); //dispatch the action obj
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};

//lodash memoize version
// export const fetchUser = id => dispatch => { //id is id of user we want to fetch
//     _fetchUser(id, dispatch); // call the memoized function and pass it in id and dispatch
// };

// // create private function with underscore syntax of function name 
// //we will define a memoized function outside our action creator that will make the api request and then dispatch the action and memoize it 
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`); 
//     dispatch({ type: 'FETCH_USER', payload: response.data }); //dispatch the action obj
// });