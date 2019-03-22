import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import UserList from './components/UserList';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Router>
          <Route path='/' exact component={UserList} />
          <Route path='/login'  component={Form} />
          <Route path='/register' component={Form} />
          <Route path='/users' component={UserList} />
      </Router>
      </div>
    );
  }
}

export default App;
