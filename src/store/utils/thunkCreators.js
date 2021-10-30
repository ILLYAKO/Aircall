import $api from "./http";

import {
  fetchAllCalls,
  fetchCallsLoading,
  fetchCallsError,
  archiveCall,
  archiveAllCalls,
  resetAllCalls,
} from "../actions/callActions";

export const getAllCalls = () => async (dispatch) => {
  console.log("getAllCalls");
  try {
    dispatch(fetchCallsLoading());
    const { data } = await $api.get("/activities");
    dispatch(fetchAllCalls(data));
  } catch (err) {
    console.error(err);
    dispatch(
      fetchCallsError({ error: err?.response.data.error || "Server Error" })
    );
  }
};

export const archiveOneCall = (callId) => async (dispatch) => {
  try {
    dispatch(fetchCallsLoading());
    await $api.post(`/activities/${callId}`, {
      is_archived: true,
    });
    const { data } = await $api.get("/activities");
    await dispatch(archiveCall());
    await dispatch(fetchAllCalls(data));
  } catch (err) {
    console.error(err);
    dispatch(
      fetchCallsError({ error: err?.response.data.error || "Server Error" })
    );
  }
};

export const archiveCalls = () => async (dispatch) => {
  try {
    dispatch(fetchCallsLoading());
    const { data } = await $api.get("/activities");
    data?.map(async (item) => {
      await $api.post(`/activities/${item.id}`, {
        is_archived: true,
      });
    });
    dispatch(archiveAllCalls());
  } catch (err) {
    console.error(err);
    dispatch(
      fetchCallsError({ error: err?.response.data.error || "Server Error" })
    );
  }
};

export const resetOneCall = (callId) => async (dispatch) => {
  try {
    dispatch(fetchCallsLoading());
    await $api.post(`/activities/${callId}`, {
      is_archived: false,
    });
    const { data } = await $api.get("/activities");
    await dispatch(archiveCall());
    await dispatch(fetchAllCalls(data));
  } catch (err) {
    console.error(err);
    dispatch(
      fetchCallsError({ error: err?.response.data.error || "Server Error" })
    );
  }
};

export const resetCalls = () => async (dispatch) => {
  try {
    dispatch(fetchCallsLoading());
    const { data } = await $api.get("/reset");
    // console.log("Message:", data.message);
    dispatch(resetAllCalls(data.message));
  } catch (err) {
    console.error(err);
    dispatch(
      fetchCallsError({ error: err?.response.data.error || "Server Error" })
    );
  }
};
