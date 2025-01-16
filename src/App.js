import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Watchlist } from './components/watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import { Homes } from './components/Homes';
import './App.css';
import './lib/font-awesome/css/all.min.css';
import { GlobalProvider } from './CONTEXT/GlobalState';


function App() {
  return (
    <GlobalProvider>


      <Router>
        {/* Header */}
        <Homes />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;


