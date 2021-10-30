import {
  FETCH_ALL_CALLS,
  FETCH_CALLS_LOADINGS,
  FETCH_CALLS_ERROR,
  ARCHIVE_CALL,
  ARCHIVE_ALL_CALLS,
  RESET_CALL,
  RESET_ALL_CALLS,
} from "../actions/types";

export const fetchAllCalls = (calls) => {
  return {
    type: FETCH_ALL_CALLS,
    calls,
  };
};

export const fetchCallsLoading = () => {
  return {
    type: FETCH_CALLS_LOADINGS,
  };
};

export const fetchCallsError = (errorMsg) => {
  return {
    type: FETCH_CALLS_ERROR,
    errorMsg,
  };
};

export const archiveCall = (updatedCall) => {
  return {
    type: ARCHIVE_CALL,
    updatedCall,
  };
};

export const archiveAllCalls = () => {
  return {
    type: ARCHIVE_ALL_CALLS,
  };
};

export const resetCall = () => {
  return {
    type: RESET_CALL,
  };
};

export const resetAllCalls = (message) => {
  return {
    type: RESET_ALL_CALLS,
    message,
  };
};
