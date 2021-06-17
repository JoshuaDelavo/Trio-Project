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

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/collections/:id'>
            <CollectionsDetail />
          </Route>
          <Route path='/News/:id'>
            <NewsDetail />
          </Route>
          <Route path='/collections'>
            <Collections />
          </Route>
          <Route path='/concierge'>
            <Concierge />
          </Route>
          <Route path='/News'>
            <News />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
