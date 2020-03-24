import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Friends from './components/Protected/Friends';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login}/>
      <PrivateRoute exact path='/friends' component={Friends}/>
    </div>
  );
}

export default App;
