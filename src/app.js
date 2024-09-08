import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CreatePost from './pages/createpost';
import EditPost from './pages/editpost';
import PostDetails from './pages/postdetails';
import Header from './components/header';
import Footer from './components/footer';
import { BlogProvider } from './context/blogcontext';
