import React, { useEffect } from "react";
import { connect } from "react-redux";
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

  useEffect(() => {
    getAllCalls();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="  d-flex flex-column">
        {calls?.filter((item) => !item.is_archived).length ? (
          <ArchiveCallsButton archiveCalls={archiveCalls} />
        ) : (
          <div>No active Calls.</div>
        )}
        {calls
          ?.filter((call) => !call.is_archived)
          .map((item, i) => (
            <CallItem
              key={item.id}
              item={item}
              archiveOneCall={archiveOneCall}
            />
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
    
    archiveOneCall: ( callId) => {
      dispatch(archiveOneCall( callId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
