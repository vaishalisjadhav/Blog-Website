import React, { useContext } from 'react';
import { BlogContext } from '../context/blogcontext';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const { posts, deletePost } = useContext(BlogContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === id);

  const handleDelete = () => {
    deletePost(id);
    navigate('/');
  };

  if (!post) return <h2>Post not found!</h2>;

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostDetails;
