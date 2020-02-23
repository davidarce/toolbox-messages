import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './app.css';
import Home from './home';
import Message from './message';

function App() {
  return (
    <BrowserRouter>
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/messages' component={Message} />
        <Route path=''>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
} 

export default App;