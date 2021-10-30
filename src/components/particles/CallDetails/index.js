import React from "react";
import "./style.css";
import CallProperty from "../CallProperty";

const CallDetails = ({ details }) => {
  return (
    <div className="d-flex flex-column border p-1 m-2 mx-4">
      <CallProperty keyTag="ID" valueTag={details?.id} />
      <CallProperty keyTag="Created at" valueTag={details?.created_at} />
      <CallProperty keyTag="Direction" valueTag={details?.direction} />
      <CallProperty keyTag="From" valueTag={details?.from} />
      <CallProperty keyTag="To" valueTag={details?.to} />
      <CallProperty keyTag="Via" valueTag={details?.via} />
      <CallProperty keyTag="Duration" valueTag={details?.duration} />
      <CallProperty keyTag="Is archived" valueTag={details?.is_archived} />
      <CallProperty keyTag="Call type" valueTag={details?.call_type} />
    </div>
  );
};

export default CallDetails;
