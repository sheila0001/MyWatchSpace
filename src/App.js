import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watchlist from './components/watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import Header from './components/Header';
import './App.css';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/">
          <Watchlist />
        </Route>

        <Route path="/Watched">
          <Watched />
        </Route>

        <Route path="/add">
          <Add />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
