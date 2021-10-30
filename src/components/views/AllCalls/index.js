import React, { useEffect } from "react";
import { connect } from "react-redux";
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
  useEffect(() => {
    getAllCalls();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="d-flex flex-column">
        {calls?.map((item, i) => (
          <CallItem
            key={item.id}
            item={item}
            archiveOneCall={archiveOneCall}
            resetOneCall={resetOneCall}
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
    archiveOneCall: (callId) => {
      dispatch(archiveOneCall(callId));
    },
    resetOneCall: (callId) => {
      dispatch(resetOneCall(callId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCalls);
