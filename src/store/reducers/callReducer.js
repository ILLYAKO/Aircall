import {
  FETCH_ALL_CALLS,
  FETCH_CALLS_LOADINGS,
  FETCH_CALLS_ERROR,
  ARCHIVE_CALL,
  ARCHIVE_ALL_CALLS,
  RESET_CALL,
  RESET_ALL_CALLS,
} from "../actions/types";

const initialState = {
  call: {},
  calls: [],
  isLoading: false,
  error: null,
  message: "",
};

export const callReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CALLS:
      return {
        ...state,
        call: {},
        calls: action.calls,
        isLoading: false,
        error: null,
        message: "",
      };

    case FETCH_CALLS_LOADINGS:
      return {
        ...state,
        call: {},
        calls: [],
        isLoading: true,
        error: null,
        message: "",
      };

    case FETCH_CALLS_ERROR:
      return {
        ...state,
        call: {},
        calls: [],
        isLoading: false,
        error: action.errorMsg,
        message: "",
      };

    case ARCHIVE_CALL:
      return {
        ...state,
        call: action.updatedCall,
        isLoading: false,
        error: null,
        message: "",
      };

    case ARCHIVE_ALL_CALLS:
      return {
        ...state,
        call: {},
        calls: [],
        isLoading: false,
        error: null,
        message: "",
      };

    case RESET_CALL:
      return {
        ...state,
        call: {},
        isLoading: false,
        error: null,
        message: action.message,
      };

    case RESET_ALL_CALLS:
      return {
        ...state,
        call: {},
        isLoading: false,
        error: null,
        message: action.message,
      };

    default:
      return state;
  }
};
