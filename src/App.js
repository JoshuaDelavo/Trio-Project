import './App.css';

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from './components/Header/Header';
import Collections from './pages/Collections';
import CollectionsDetail from './pages/CollectionsDetail';
import Concierge from './pages/Concierge';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Question from './pages/Question';
import Thanks from './pages/Thanks';
import ScrollToTop from "./pages/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/collections/:id'>
            <CollectionsDetail />
          </Route>
          <Route path='/News/:id'>
            <Header />
            <NewsDetail />
          </Route>
          <Route path='/collections'>
            <Header />
            <Collections />
          </Route>
          <Route path='/News'>
            <Header />
            <News />
          </Route>
          <Route path='/Concierge'>
            <Concierge />
          </Route>
          <Route path='/Question'>
            <Question />
          </Route>
          <Route path='/Thanks'>
            <Thanks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
