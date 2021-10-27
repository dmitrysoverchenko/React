import {getFromLocalStorage} from "../../localStorage/getFromLocalStorage";
import types from "../types";

const initialState = {
  favorite: getFromLocalStorage("favorite") || [],
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FAVORITE: {
      return {...state, favorite: action.payload}
    }
    default:
      return state;
  }
}

export default favoriteReducer;