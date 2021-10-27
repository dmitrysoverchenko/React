import types from '../types';
import {getFromLocalStorage} from "../../localStorage/getFromLocalStorage";

const initialState = {
  cart: getFromLocalStorage("cart") || [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CART: {
      return {...state, cart: action.payload}
    }
    case types.ADD_TO_CART: {
      return {...state, cart: state.cart.concat(action.payload)}
    }
    case types.REMOVE_FROM_CART: {
      return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
    }
    default:
      return state;
  }
}

export default cartReducer;