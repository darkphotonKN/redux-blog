// Maintain a List of Posts from jsonAPI
export default (state = [], action) => {
  // default to have state be an empty error

  switch (action.type) {
    // if action dispatched matches type "FETCH_POSTS"
    // simply return the action payload from the action FETCH_POSTS
    case 'FETCH_POSTS':
      return action.payload;

    default:
      // returns previous cycle's state
      return state;
  }
};
