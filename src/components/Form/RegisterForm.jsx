import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name:'',
                password:'',
                gender:'',
                success:false
        };
    }

    register = (e) => {
        e.preventDefault();
        const gender = this.state.gender.toUpperCase();
        
        const data = {
            "userName":this.state.name,
	        "password":this.state.password,
	        "gender":gender
        }

        const headers = {
            "Content-Type" : "application/json"
        }

        axios.post(`https://api.prontoitlabs.com/api/v1/user`, data, {headers : headers}) 
        .then(() => {
            this.setState({success:true});
            setTimeout(() => {
            this.setState({success:false});
            }, 3000);
        })
        .catch(()=>this.setState({error:"Invalid Details"}));
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
                { this.state.success &&
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 offset-lg-4">
                        <span style={{color:'green'}}>Registered...</span>
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
                <input type="password" placeholder="password" autoComplete="current-password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className="col-12 col-lg-2 offset-lg-4">
                <label> Gender :</label>
                </div>
                <div className="col-12 col-lg-6">
                <input type="text" placeholder="Male/Female" autoCapitalize="characters" name="gender" value={this.state.gender} onChange={this.handleChange} required/>
                </div>
                <div className="col-12 col-lg-6 offset-lg-4">
                    <button type="submit" className="btn btn-primary" onClick={this.register}>Register</button>
                </div>
                </div>
                </form>
                
                
            </div>
        );
    }
}

export default RegisterForm;