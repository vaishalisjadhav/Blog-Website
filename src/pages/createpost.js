import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/blogcontext';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content);
    navigate('/');
  };

  return (
    <div className="create-post">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
