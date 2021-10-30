import React from "react";
import "./style.css";
import CallProperty from "../CallProperty";

const CallDetails = ({ item }) => {
  return (
    <div className="d-flex flex-column border p-1 m-2 mx-4">
      <CallProperty keyTag="ID" valueTag={item?.id} />
      <CallProperty keyTag="Created at" valueTag={item?.created_at} />
      <CallProperty keyTag="Direction" valueTag={item?.direction} />
      <CallProperty keyTag="From" valueTag={item?.from} />
      <CallProperty keyTag="To" valueTag={item?.to} />
      <CallProperty keyTag="Via" valueTag={item?.via} />
      <CallProperty keyTag="Duration" valueTag={item?.duration} />
      <CallProperty keyTag="Is archived" valueTag={item?.is_archived} />
      <CallProperty keyTag="Call type" valueTag={item?.call_type} />
    </div>
  );
};

export default CallDetails;
