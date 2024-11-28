import React from "react";

function Comment({ comment }) {
  return (
    <div key={comment.id}>
      <div className="flex gap-x-4">
        <div className="mt-2 h-11 w-11 shrink-0">
          <img
            src={comment.owner.avatar}
            alt={comment.owner.fullName}
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="block">
          <p className="flex items-center text-gray-200">
            {comment.owner.username} &nbsp;
            <span className="text-sm">{comment.createdAt}</span>
          </p>
          <p className="text-sm text-gray-200">@{comment.owner.fullName}</p>
          <p className="mt-3 text-sm">{comment.content}</p>
        </div>
      </div>
      <hr className="my-4 border-white" />
    </div>
  );
}

export default Comment;
