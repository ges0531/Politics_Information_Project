import React from "react";

// 댓글 하나를 전달받아 댓글 하나를 보여주는 창
export default function Comment(props) {
  const { uName, pCommentContent, writeDate } = props.comment;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/48/${uName}@adorable.io.png`}
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