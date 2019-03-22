import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name:null,
                password:null,
                gender:null
        };
    }
    
    



    register = () => {
        const data = this.state.data;

        const headers = {
            "Content-Type" : "application/json",
            "X-AUTH-TOKEN" : localStorage.getItem("token")
            }

        axios.post(`https://api.prontoitlabs.com/api/v1/user`,data,{headers : headers}) 
        .then((res) => this.setState({
            page : res.data.currentPage,
            size : res.data.currentPageSize,
            totalPages : res.data.totalPages,
            data : res.data.content 
        }));
    }

    render() {
        return (
            <div container>
                <div className="row pt-5">
                <div className="col-12 col-lg-2 offset-lg-4">
                <label> User Name :</label>
                </div>
                <div className="col-12 col-lg-6">
                <input type="text" placeholder="user name" value={this.state.name} onChange={this.changeListner} required/>
                </div>
                <div className="col-12 col-lg-2 offset-lg-4">
                <label> Password :</label>
                </div>
                <div className="col-12 col-lg-6">
                <input type="password" placeholder="password" value={this.state.password} required/>
                </div>
                <div className="col-12 col-lg-2 offset-lg-4">
                <label> Gender :</label>
                </div>
                <div className="col-12 col-lg-6">
                <input type="text" placeholder="MALE" value={this.state.gender} required/>
                </div>
                <div className="col-12 col-lg-6 offset-lg-4">
                    <button type="submit" className="btn btn-primary" onClick={this.register}>Register</button>
                </div>
                </div>
            </div>
        );
    }
}

Form.propTypes = {};

export default Form;
