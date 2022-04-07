<<<<<<< HEAD
import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
          <form>

          <h3>Log in</h3>

          <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
      </form>
        );
    }
}
=======
import React, { useState } from "react";
import{Link} from 'react-router-dom'

export default function Login() {
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: ""
    },
  });

  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <figure className="h-auto flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primary Border shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold font-josefin-sans">Welcome to Fit don't Quit</p>
        </blockquote>

        <div className="text-primary m-6 font-josefin-sans">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
              Login to your account
            </h1>
          </div>
          <form>
            <label className="text-left">Username:</label>
            <input
              name="username"
              type="text"
              value={formData.user.username}
              onChange={handleChange}
              placeholder="Username"
              className=
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              
            />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Password"
              className=
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              
            />
            <div className="flex items-center mt-3 justify-center">
              <button
                className="bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                value="Login"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center mt-3 justify-center">
            <Link to='/'><button className="justify-center text-blue-500 hover:underline">
              Want an account? Sign up for free!
            </button></Link>
          </div>
        </div>

      </div>
    </figure>
  );
}
>>>>>>> historyandtrack
