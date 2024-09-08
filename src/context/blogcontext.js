import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    setPosts([...posts, { id: uuidv4(), title, content }]);
  };

  const editPost = (id, updatedPost) => {
    setPosts(posts.map((post) => (post.id === id ? updatedPost : post)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, editPost, deletePost }}>
      {children}
    </BlogContext.Provider>
  );
};
