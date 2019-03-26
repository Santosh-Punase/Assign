import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import UserList from './components/UserList';
import PageNotFound from './PageNotFound';
import LoginForm from './components/Form/LoginForm';
import Home from './components/Home';
import RegisterForm from './components/Form/RegisterForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn : this.isLoggedIn()
    }
  }

  login = (token) => {
    localStorage.setItem("token",token);
    this.setState({isLoggedIn:true});
  }

  logout = () => {
    localStorage.removeItem("token");
    this.setState({isLoggedIn:false});
  }

  isLoggedIn = () => localStorage.getItem("token")
  


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <>
      <Nav isLoggedIn={isLoggedIn} logout={this.logout}/>
      <div className="container">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login'
            render={ (props) =>
                <LoginForm login={this.login} {...props} />
            }
          />
          <Route path='/register' component={RegisterForm} />
            {
              isLoggedIn ?
              <Route path='/users' component={UserList} />
              :
              <Redirect to='/login' />
            }
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      </div>
      </>
    );
  }
}

export default App;
