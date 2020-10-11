import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true, // 처음엔 장바구니를 숨겨야하니 히든 true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
