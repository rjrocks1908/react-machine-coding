import { useState } from "react";
import type { Comment, CommentsData } from "../../pages/CommentBoxPage";

interface Props {
  comment: Comment;
  comments: CommentsData;
  addComment: (parentId: number, comment: string) => void;
  deleteComment: (parentId: number) => void;
}

function CommentBox({ comment, comments, addComment, deleteComment }: Props) {
  const [reply, setReply] = useState("");
  const [isReplying, setIsReplying] = useState(false);

  return (
    <div className="border-l border-l-gray-400 flex flex-col mx-5 my-3 gap-3">
      <div className="flex flex-row ml-5 gap-3">
        {/* Comment */}
        <div>{comment.value}</div>

        {/* reply button */}
        <h5
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={() => setIsReplying((prev) => !prev)}
        >
          {isReplying ? "Cancel" : "Reply"}
        </h5>

        {/* Delete button */}
        <h5
          className="text-red-600 cursor-pointer hover:underline"
          onClick={() => deleteComment(comment.id)}
        >
          Delete
        </h5>
      </div>

      {/* Reply box */}
      {isReplying && (
        <div className="ml-5 flex flex-col gap-3">
          <textarea
            className="bg-gray-600 w-1/2 p-2"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <button
            className="w-fit"
            onClick={() => {
              addComment(comment.id, reply);
              setIsReplying(false);
              setReply("");
            }}
          >
            Post Reply
          </button>
        </div>
      )}

      {comment.children.map((child) => (
        <CommentBox
          comment={comments[child]}
          comments={comments}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
}
export default CommentBox;
