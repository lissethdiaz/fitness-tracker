import React, { Component } from 'react';

import axios from 'axios';
import Login from './Login';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
    constructor(props) {
        super(props);

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

    Login() {

    }

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
            <div className='container bg-blue-200'>
                <h3 className='flex justify-center items-center text-lg font-bold tracking-wide text-center shadow-lg h-16 font-josefin-sans bg-fuchsia-100'>Let's Get Started!</h3>
                <form className='flex flex-col justify-center items-center' onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className='font-bold'>enter a username: </label>
                        <input type="text"
                            required
                            className="form-control rounded border-double flex justify-center items-center"
                            value={this.state.username}
                            placeholder="Username"
                            onChange={this.onChangeUsername}
                        />
                    </div>

                    <div className="form-group">
                        <label className='font-bold'>enter your email address: </label>
                        <input type="email"
                            required
                            className="form-control rounded border-double flex justify-center items-center"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.onChangeEmail}
                        />
                    </div>

                    <div className="form-group">
                        <label className='font-bold'>enter a unique password: </label>
                        <input type="text"
                            required
                            className="form-control rounded border-double flex justify-center items-center"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className='h-20 justify-center items-center pt-5 pb-5'>
                        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Let's Go!</button>
                    </div>
                    <div className=' h-20 justify-center items-center pt-5 pb-5 font-bold'>
                        Or...
                    </div>

                    <Link to='/login' ><button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' >Login</button></Link>

                </form>
            </div>
        )
    }
}