import { useState, memo } from "react";
import Avatar from "./Avatar";
import parseDate from "../util/date";
import EditPostForm from "./EditPostForm";

const PostCard = memo(({ post, owner, onDelete, onUpdate, onUseridClick }) => {
  const { _id, userid, name, url, text, createdAt } = post;
  const [editng, setEditing] = useState(false);
  const onClose = () => setEditing(false);

  return (
    <li className="post">
      <section className="post-container">
        <Avatar url={url} name={name} />
        <div className="post-body">
          <span className="post-name">{name}</span>
          <span className="post-username" onClick={() => onUseridClick(post)}>
            @{userid}
          </span>
          <span className="post-date">{parseDate(createdAt)}</span>
          <p>{text}</p>
          {editng && (
            <EditPostForm post={post} onUpdate={onUpdate} onClose={onClose} />
          )}
        </div>
      </section>
      {owner && (
        <div className="post-action">
          <button className="post-action-btn" onClick={() => onDelete(_id)}>
            x
          </button>
          <button className="post-action-btn" onClick={() => setEditing(true)}>
            🖋
          </button>
        </div>
      )}
    </li>
  );
});

export default PostCard;
