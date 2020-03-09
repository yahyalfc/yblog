import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import Hero from './components/hero/hero.component';
import Post from './pages/post/post.component';
import AllPosts from './pages/posts/posts.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Hero />
        <Route path='/posts' component={AllPosts} />
        <Route path='/' exact component={HomePage} />
        <Route path='/post/:slug' component = {Post} />
      </div>
    </BrowserRouter>
    
  );
}
export default App;
