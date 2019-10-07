import _ from 'lodash';

import jsonPlaceholder from '../api/jsonPlaceholder';

// Alternative to using Memoize to prevent repeated requests for the same result
export const fetchPostsAndUsers = () => async (dispatch) => {
  console.log('About to fetch posts.');
  await dispatch(fetchPosts());
  console.log('Fetched posts!');
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    // request to jsonplaceholder

    const { data } = await jsonPlaceholder.get('/posts');

    // instead of returning action that calls for fetching all posts,
    // we manually call "dispatch" function

    // usually:

    // return {
    //   type: 'FETCH_POSTS',
    //   payload: response
    // };

    // new:
    dispatch({
      type: 'FETCH_POSTS',
      payload: data
    });
  };
};

// Memoizing to prevent multiple requests for the same request

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// for memoizing fetchUser - so that each repeated request is done once only

const _fetchUser = _.memoize(async (id, dispatch) => {
  const { data } = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: data });
});

// // fetch a single user (ORIGINAL WITHOUT MEMOIZE)
// export const fetchUser = (id) => {
//   return async (dispatch, getState) => {
//     const { data } = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//       type: 'FETCH_USER',
//       payload: data
//     });
//   };
// };

// standard action without redux thunk

export const selectPost = (id) => {
  return {
    type: 'SELECT_POST',
    payload: id
  };
};
