import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route path="/login">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
