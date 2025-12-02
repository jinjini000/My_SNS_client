import React, { useState } from "react";

const EditPostForm = ({ post, onUpdate, onClose }) => {
  const [text, setText] = useState(post.text);

  const onSubmit = async (e) => {
    e.preventDefault();
    onUpdate(post._id, text);
    onClose();
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="edit-post-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="포스트를 수정하세요"
        value={text}
        required
        autoFocus
        onChange={onChange}
        className="form-input post-input"
      />
      <div className="edit-post-form-action">
        <button type="submit" className="form-btn">
          수정
        </button>
        <button type="button" className="form-btn-cancel" onClick={onClose}>
          취소
        </button>
      </div>
    </form>
  );
};

export default EditPostForm;
