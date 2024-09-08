import React, { useContext, useState, useEffect } from 'react';
import { BlogContext } from '../context/blogcontext';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const { posts, editPost } = useContext(BlogContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const post = posts.find((post) => post.id === id);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost(id, { id, title, content });
    navigate('/');
  };

  return (
    <div className="edit-post">
      <h2>Edit Post</h2>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPost;
