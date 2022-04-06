import React, { Component } from 'react';
import {authenticationService } from '../services/authentication.service';
import axios from 'axios';
import Login from './Login';
import { Link } from 'react-router-dom';
import {render} from 'react-dom'

export  class Signup extends React.Component {
    constructor(props) {
        super(props);

        if(authenticationService.currentUserValue) {
            this.props.history.push('/');
        }
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
           email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
   }

    //Login() {
    //}

    onSubmit(e) {
        e.preventDefault();

       const user = {
            username: this.state.username
        }

        const email = {
            email: this.state.email
        }

        const password = {
            password: this.state.password
        }

        console.log(user, email, password);

        axios.post('http://localhost:3000/user/add', user)
            .then(res => console.log(res.data));

       this.setState({
            username: '',
            email: '',
            password: ''
        })
    }
    render() {
        return (

            <div className='container h-auto bg-blue-200'>
                <h3 className='flex justify-center items-center text-lg font-bold tracking-wide text-center shadow-lg h-16 font-josefin-sans bg-fuchsia-100'>Let's Get Started!</h3>
                <form className='align-middle flex flex-col  justify-center items-center' onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className='font-bold'>Username: </label>
                        <input type="text"
                            required
                            className="form-control rounded border-double flex justify-center items-center"
                            value={this.state.username}
                            placeholder="enter a username"
                            onChange={this.onChangeUsername}
                        />
                    </div>

          <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name" />
          </div>

          <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" />
          </div>

          <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
          </div>

                </form>
            </div>
    
        )
    }
}
