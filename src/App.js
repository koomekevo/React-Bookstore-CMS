import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <AddBook />
        </Route>
        <Route path="/categories">
          Under construction
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
