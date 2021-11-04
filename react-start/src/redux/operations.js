import axios from "axios";
import actions from "./actions";
import {saveToLocalStorage} from "../localStorage/saveToLocalStorage";

const fetchCards = () => async dispatch => {
  const response = await axios.get('/api/phones.json');
  dispatch(actions.saveCards(response.data));
  dispatch(actions.setLoader(false));
  saveToLocalStorage("cards", response.data)
}

const operations = {fetchCards}
export default operations;