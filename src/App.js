import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import Hero from './components/hero/hero.component';
import Contact from './components/contact/contact.component';
import Post from './pages/post/post.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Hero />

        <Route path='/' exact component={HomePage} />
        <Route path='/post/:postId' component = {Post} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
