import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CreatePost from './pages/createpost';
import EditPost from './pages/editpost';
import PostDetails from './pages/postdetails';
import Header from './components/header';
import Footer from './components/footer';
import { BlogProvider } from './context/blogcontext';


const App = () => {
    return (
      <BlogProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
          <Footer />
        </Router>
      </BlogProvider>
    );
  };
  
  export default App;
  