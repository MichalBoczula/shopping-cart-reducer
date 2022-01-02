const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
    case "TOGGLE_AMOUNT":
      let tempCartState = state.cart
        .map((x) => {
          if (x.id === action.payload.id) {
            switch (action.payload.type) {
              case "increase":
                return { ...x, amount: x.amount + 1 };
              case "decrease":
                return { ...x, amount: x.amount - 1 };
            }
          }
          return x;
        })
        .filter((item) => item.amount !== 0);
      return {
        ...state,
        cart: tempCartState,
      };
  }

  return state;
};

export default reducer;
