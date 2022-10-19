import axios from "axios";
import * as types from "./actionType";

export const getDishData = () => (dispatch) => {
  dispatch({ type: types.GET_DISH_DATA_REQUEST });
  return axios
    .get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
    .then((res) => dispatch({ type: types.GET_DISH_DATA_SUCCESS }))
    .catch((err) => dispatch({ type: types.GET_DISH_DATA_FAILURE }));
};
