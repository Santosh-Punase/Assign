import React, { Component } from 'react';

class Nav extends Component {
    
    render() {
        const { isLoggedIn, logout } = this.props;
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Pronto</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li> 
                        { isLoggedIn ? (
                        <>
                        <li className="nav-item">
                            <a className="nav-link" href="/users">Users</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={logout}>Log out</a>
                        </li>
                        </>
                        ) : (
                        <>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        </>
                        )
                        }                        
                    </ul>
                </div>
            </div>
            </nav>
        );
    }
}

export default Nav;