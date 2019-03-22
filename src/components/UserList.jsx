import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

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

    componentDidMount() {
        const page = this.state.page;
        const size = this.state.size;

        axios(`https://api.prontoitlabs.com/api/v1/user?page=${page}&size=${size}`)
        .then((res) => this.setState({
            page : res.data.currentPage,
            size : res.data.currentPageSize,
            totalPages : res.data.totalPages,
            data : res.data.content 
        }));

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
            </div>
        );
    }
}

export default UserList;