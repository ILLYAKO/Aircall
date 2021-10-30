import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import CallItem from "../../particles/CallItem";
import { getAllCalls, resetCalls } from "../../../store/utils/thunkCreators";
import ResetAllCallsButton from "../../particles/ResetAllCallsButton";
import Spinner from "../../particles/Spinner";

const ArchivedCalls = (props) => {
  const { calls, getAllCalls, resetCalls, isLoading } = props;

  useEffect(() => {
    getAllCalls();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Spinner/>
  } else {
    return (
      <div className="  d-flex flex-column">
        {calls?.filter((item) => item.is_archived).length ? (
          <ResetAllCallsButton resetCalls={resetCalls} />
        ) : (
          <div>No archived Calls.</div>
        )}

        {calls
          ?.filter((item) => item.is_archived)
          .map((item, i) => (
            <div key={item.id}>
              <CallItem item={item} />
            </div>
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
    resetCalls: () => {
      dispatch(resetCalls());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedCalls);
