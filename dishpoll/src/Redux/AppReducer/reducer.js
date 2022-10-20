import * as types from "./actionType";

const initialState = {
  dish: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DISH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DISH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dish: payload,
      };
    case types.GET_DISH_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };
      
    default:
      return { ...state };
  }
};
