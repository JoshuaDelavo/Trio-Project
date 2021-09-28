import './App.css';

import React from 'react'
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
import 'react-image-lightbox/style.css';
import News from './pages/News';
import OurStory from './pages/OurStory';
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
          <Route path='/news/:id'>
            <NewsDetail />
          </Route>
          <Route path='/collections'>
            <Header />
            <Collections />
          </Route>
          <Route path='/ourStory'>
            <Header />
            <OurStory />
          </Route>
          <Route path='/news'>
            <Header />
            <News />
          </Route>
          <Route path='/concierge'>
            <Concierge />
          </Route>
          <Route path='/question'>
            <Question />
          </Route>
          <Route path='/thanks'>
            <Thanks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
