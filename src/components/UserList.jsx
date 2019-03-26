import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import Pagination from './Pagination';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : true,
            page:0,
            size:25,
            totalPages:10,
            data :[]
        };
    }

    loadData = (page) => {
        const size = this.state.size;
        const token = localStorage.getItem("token");
        const headers = {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': token 
        }

        axios(`https://api.prontoitlabs.com/api/v1/user?page=${page}&size=${size}`,{headers: headers})
        .then((res) => this.setState({
            page : res.data.data.currentPage,
            totalPages : res.data.data.totalPages,
            data : res.data.data.content 
        }));
    }

    componentDidMount() {        
        const page = this.state.page;
        this.loadData(page);   
    }

    goToPrevious = () => {
        const page = this.state.page - 1;
        this.loadData(page); 
    }
    
    goToNext = () => {
        const page = this.state.page + 1;
        this.loadData(page); 
    }
    
    render() {
        const data = this.state.data;
        return (
            <div className="container">
            {
                data.map((user) => {
                    return (<User key={user.id} user={user} />)
                })      
            }       
            <Pagination 
            page = {this.state.page} 
            totalpages = {this.state.totalPages}
            goToPrevious = {this.goToPrevious}
            goToNext = {this.goToNext}
            /> 
            </div>
        );
    }
}

export default UserList;