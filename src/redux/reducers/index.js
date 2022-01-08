import {combineReducers} from "redux";
import favoriteReducer from "./favoriteReducer";
import cartReducer from "./cartReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
})

export default rootReducer;