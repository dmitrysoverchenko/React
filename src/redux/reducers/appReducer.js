import types from '../types';
import {getFromLocalStorage} from "../../localStorage/getFromLocalStorage";

const initialState = {
  modal: {isOpen: false, header: null},
  isLoading: true,
  cards: getFromLocalStorage("cards") || [],
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CARDS: {
      return {...state, cards: state.cards.concat(action.payload)}
    }
    case types.SET_LOADER: {
      return {...state, isLoading: action.payload}
    }
    case types.SET_MODAL: {
      return {...state, modal: action.payload}
    }
    default:
      return state;
  }
}

export default appReducer;