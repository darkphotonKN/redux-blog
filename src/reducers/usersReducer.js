// this reducer is supposed to maintain a list of records
// so we default its state to an empty array
export default (state = [], action) => {
  switch (action.type) {
    // when we see this 'FETCH_USER' action we
    // know that a single data response from the api is incoming
    // from the dispatched action, hence we add it to the entire
    // list of records
    case 'FETCH_USER':
      const newState = [...state, action.payload];
      return newState;

    // default with no action type matches just return the state
    default:
      return state;
  }
};
