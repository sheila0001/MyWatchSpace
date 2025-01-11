import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Watchlist } from './components/watchlist';
import { Watched } from './components/Watched';
import './App.css';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>

        <Route path="/watched">
          <Watched />
        </Route>

        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
