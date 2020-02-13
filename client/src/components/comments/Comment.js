import React from "react";

export default function Comment(props) {
  // const { name, message, time } = props.comment;
  const { uName, pCommentContent, writeDate } = props.comment;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/48/${uName}@adorable.io.png`}
        // src={"https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"}
        alt={uName}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{writeDate}</small>
        <h6 className="mt-0 mb-1 text-muted">{uName}</h6>
        {pCommentContent}
      </div>
    </div>
  );
}
