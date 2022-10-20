import * as types from "./actionType";

const initialState = {
  loggedInUser: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.POST_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.POST_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedInUser: payload,
      };
    case types.POST_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    default:
      return { ...state };
  }
};
