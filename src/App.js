import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import Contact from './components/contact/contact.component';
import Post from './pages/post/post.component';
import About from './pages/about/about.component'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />

        <Route path='/' exact component={HomePage} />
        <Route path='/contact' component={Contact}/>
        <Route path='/post' component = {Post} />
        <Route path='/about' component={About} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
