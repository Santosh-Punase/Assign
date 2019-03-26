import React, { Component } from 'react';

class User extends Component {
    render() {
        const user = this.props.user;
        return (
            <div className="row pt-5">
                    <div className="col-12 col-lg-6 offset-lg-2">
                        <div className="card my-3">
                            <div className="card-header">
                                <b>{user.id}</b>
                            </div>
                            <div className="card-body">
                                <p className="mt-5">{user.userName}</p>
                                <p className="mt-5">{user.gender}</p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default User;