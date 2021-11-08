import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DateTime } from "luxon";

import "./style.css";
import CallItem from "../../particles/CallItem";
import {
  getAllCalls,
  resetOneCall,
  archiveOneCall,
} from "../../../store/utils/thunkCreators";
import Spinner from "../../particles/Spinner";

const AllCalls = (props) => {
  const { calls, getAllCalls, resetOneCall, archiveOneCall, isLoading } = props;
  let dayOfCall = null;

  useEffect(() => {
    getAllCalls();
    // eslint-disable-next-line
  }, []);

  const setDayOfCall = (dayDate) => {
    if (
      !dayOfCall ||
      DateTime.fromISO(dayDate).startOf("day") <
        DateTime.fromISO(dayOfCall).startOf("day")
    ) {
      dayOfCall = DateTime.fromISO(dayDate);
      return (
        <div className="dotstyle">
          <span className="span-dotstyle">
            {dayOfCall.toLocaleString(DateTime.DATE_MED)}
          </span>
        </div>
      );
    }
  };

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="d-flex flex-column mt-5">
        {calls?.map((item) => (
          <>
            {setDayOfCall(item.created_at)}
            <CallItem
              key={item.id}
              item={item}
              archiveOneCall={archiveOneCall}
              resetOneCall={resetOneCall}
            />
          </>
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    call: state.callReducer.call,
    calls: state.callReducer.calls,
    isLoading: state.callReducer.isLoading,
    error: state.callReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCalls: () => {
      dispatch(getAllCalls());
    },
    archiveOneCall: (callId) => {
      dispatch(archiveOneCall(callId));
    },
    resetOneCall: (callId) => {
      dispatch(resetOneCall(callId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCalls);
