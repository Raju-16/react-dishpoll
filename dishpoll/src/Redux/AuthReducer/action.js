import axios from "axios";
import * as types from "./actionType";

export const postUserData = (params) => (dispatch) => {
  dispatch({ type: types.POST_DATA_REQUEST });
  return axios
    .post("http://localhost:8080/data", params)
    .then((res) => {
      console.log("RES", res.data);
      dispatch({ type: types.POST_DATA_SUCCESS, payload: res.data });
      return types.POST_DATA_SUCCESS;
    })
    .catch((err) => dispatch({ type: types.POST_DATA_FAILURE }));
};
