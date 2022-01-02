const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
    case "INCREASE":
      let tempState = state.cart.map((x) => {
        if (x.id === action.payload) {
          console.log(x);
          return { ...x, amount: x.amount + 1 };
        }
        return x;
      });
      return {
        ...state,
        cart: tempState,
      };
    case "DECREASE":
      let tempState2 = state.cart
        .map((x) => {
          if (x.id === action.payload) {
            return { ...x, amount: x.amount - 1 };
          }
          return x;
        })
        .filter((item) => item.amount !== 0);
      return {
        ...state,
        cart: tempState2,
      };
  }

  return state;
};

export default reducer;
