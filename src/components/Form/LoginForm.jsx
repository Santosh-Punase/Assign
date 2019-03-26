import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name:'',
                password:'',
                error:''
        };
    }

    login = (e) => {
        e.preventDefault();

        const login = this.props.login;
        const headers = {
            "Content-Type" : "application/json"
        }
        const data = {
            "userName":this.state.name,
            "password":this.state.password
        }

        axios.post(`https://api.prontoitlabs.com/api/v1/user/login`,data,{headers : headers}) 
        .then((res) =>{
            const token = res.data.data.token;
            login(token);   
            console.log(res.data);         
            this.props.history.push("/users");
        })
        .catch(() => this.setState({error:'Invalid credential'}));
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            error:''
        })
    }

    render() {
        return (
            <div className="container">
                <form>
                { this.state.error &&
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 offset-lg-4">
                        <span style={{color:'red'}}>{this.state.error}</span>
                    </div>
                </div>
                }
                <div className="row pt-5">
                <div className="col-12 col-lg-2 offset-lg-4">
                <label> User Name :</label>
                </div>
                <div className="col-12 col-lg-6">
                <input type="text" placeholder="user name" name="name" autoComplete="username" value={this.state.name} onChange={this.handleChange} required/>
                </div>
                <div className="col-12 col-lg-2 offset-lg-4">
                <label> Password :</label>
                </div>
                <div className="col-12 col-lg-6">
                <input type="password" placeholder="password" autoComplete="current-password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                </div>
                <div className="col-12 col-lg-6 offset-lg-4">
                    <button type="submit" className="btn btn-primary" onClick={this.login}>Login</button>
                </div>
                </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;