function cart(state = [], action) {
  console.log(state);

  switch(action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default cart;
