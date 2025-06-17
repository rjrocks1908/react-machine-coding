import { useState } from "react";
import CommentBox from "../components/commentbox/CommentBox";
import commentsData from "../components/commentbox/CommentsData.json";

export interface Comment {
  id: number;
  parentId: number | null;
  value: string;
  children: number[];
}

export interface CommentsData {
  [key: string]: Comment;
}

function CommentBoxPage() {
  const [comments, setComments] = useState<CommentsData>(commentsData.comments);

  const addComment = (parentId: number, reply: string) => {
    if (reply.length === 0) {
      return;
    }

    const newId = Object.entries(comments).length + 1;
    const newComment: Comment = {
      id: newId,
      parentId: parentId,
      value: reply,
      children: [],
    };

    const copyComments = { ...comments, [newId.toString()]: newComment };
    copyComments[parentId.toString()].children.push(newId);
    setComments(copyComments);
  };

  const deleteComment = (id: number) => {
    const parentId = comments[id.toString()].parentId;

    setComments((prevComments) => {
      const updatedComments = { ...prevComments };
      if (parentId) {
        updatedComments[parentId].children = updatedComments[
          parentId
        ].children.filter((cid) => cid !== id);
      }

      const q: number[] = [id];

      while (q.length > 0) {
        const cid = q.shift();
        if (cid) {
          q.push(...updatedComments[cid].children);
          delete updatedComments[cid];
        }
      }

      return updatedComments;
    });
  };

  if (Object.keys(comments).length === 0) {
    return <div className="text-6xl">NO COMMENTS TO SHOW</div>;
  }

  return (
    <div>
      <CommentBox
        comment={comments["1"]}
        comments={comments}
        addComment={addComment}
        deleteComment={deleteComment}
      />
    </div>
  );
}
export default CommentBoxPage;
