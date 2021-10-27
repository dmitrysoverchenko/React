import types from "./types";
import {getFromLocalStorage} from "../localStorage/getFromLocalStorage";
import {saveToLocalStorage} from "../localStorage/saveToLocalStorage";

const saveCards = payload => ({type: types.SET_CARDS, payload});

const setLoader = payload => ({type: types.SET_LOADER, payload});

const setModal = payload => ({type: types.SET_MODAL, payload})

const closeModal = confirm => (dispatch, getState) => {
  const state = getState();
  const {cart} = state.cart;

  if(confirm) {
    saveToLocalStorage('cart', cart)
    dispatch(actions.setModal({isOpen: false, header: null}))
  } else {
    dispatch(actions.setCartFromLocalStorage())
  }
}

const addItemToCart = payload => dispatch => {
  dispatch(setModal({isOpen: true, header: "Do you want to add ot to the cart?"}))
  dispatch({type: types.ADD_TO_CART, payload})
}

const removeItemFromCart = payload => dispatch => {
  dispatch(setModal({isOpen: true, header: "Are you sure you want to delete it?"}))
  dispatch({
    type: types.REMOVE_FROM_CART, payload
  })
}

const setFavorite = card => (dispatch, getState) => {
  const state = getState();
  const {favorite} = state.favorite;
  const filteredFavoriteList = !!favorite.find(item => +item.id === +card.id)
      ? favorite.filter(item => item.id !== card.id)
      : [...favorite, card];
  saveToLocalStorage('favorite', filteredFavoriteList);

  dispatch({
    type: types.SET_FAVORITE, payload: filteredFavoriteList
  })
}

const setCartFromLocalStorage = () => dispatch => {
  dispatch(setModal({isOpen: false, header: null}))
  dispatch({
    type: types.SET_CART, payload: getFromLocalStorage('cart') || []
  })
}

const actions = {
  saveCards,
  setLoader,
  setFavorite,
  setModal,
  addItemToCart,
  setCartFromLocalStorage,
  removeItemFromCart,
  closeModal
};

export default actions;