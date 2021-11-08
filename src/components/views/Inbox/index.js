import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DateTime } from "luxon";

import "./style.css";
import ArchiveCallsButton from "../../particles/ArchiveCallsButton";
import CallItem from "../../particles/CallItem";
import {
  getAllCalls,
  archiveOneCall,
  archiveCalls,
} from "../../../store/utils/thunkCreators";
import Spinner from "../../particles/Spinner";

const Inbox = (props) => {
  const { calls, getAllCalls, archiveOneCall, archiveCalls, isLoading } = props;
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
      <div className="d-flex flex-column">
        {calls?.filter((item) => !item.is_archived).length ? (
          <ArchiveCallsButton archiveCalls={archiveCalls} />
        ) : (
          <div className="text-center p-5">No active Calls.</div>
        )}
        {calls
          ?.filter((call) => !call.is_archived)
          .map((item, i) => (
            <>
              {setDayOfCall(item.created_at)}
              <CallItem
                key={item.id}
                item={item}
                archiveOneCall={archiveOneCall}
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

    archiveCalls: () => {
      dispatch(archiveCalls());
    },

    archiveOneCall: (callId) => {
      dispatch(archiveOneCall(callId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
