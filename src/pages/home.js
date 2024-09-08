import React, { useContext } from 'react';
import { BlogContext } from '../context/blogcontext';
import PostCard from '../components/postcard';

const Home = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div className="home">
      <h2>All Posts</h2>
      <div className="posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
