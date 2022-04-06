import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { authenticationService } from '../services';
import { ErrorBoundary } from "./ErrorBoundary";

//export default function Login() {
//  const [formData, setFormData] = useState({
//    user: {
//      username: "",
//      password: ""
//    },
//  });
export class Login extends React.Component {
  constructor(props) {
    super(props);

    if (authenticationService.currentUserValue) {
      this.props.history.push('/');
    }
  }
  //const handleChange = (e) => {
  //  setFormData({
  //    user: {
  //      ...formData.user,
  //      [e.target.name]: e.target.value,
  //   },
  // });
  //};
  render() {
    return (

      <div className="h-auto flex bg-gray-100">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primary Border shadow-default py-10 px-1">
          <div className="text-primary m-6 font-josefin-sans">
            <div className="flex items-center mt-3 justify-center">
              <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
                Login to your account
              </h1>
            </div>
          </div>
        </div>

        <div className='formik flex justify-start items-center'>
            <ErrorBoundary>
              <Formik
                initialValues={{
                  username: '',
                  password: ''
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string().required('Username is required'),
                  password: Yup.string().required('Password is required')
                })}
                onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
                  setStatus();
                  authenticationService.login(username, password)
                    .then(
                      user => {
                        const { from } = this.props.location.state || { from: { pathname: "/" } };
                        this.props.history.push(from);
                      },
                      error => {
                        setSubmitting(false);
                        setStatus(error);
                      }
                    );
                }}
                render={({ errors, status, touched, isSubmitting }) => (
                  <Form className='font-josefin-sans'>
                    <div className='form-group text-left'>
                      <label htmlFor="username">Username:</label>
                      <Field name='username' type="text" placeholder="Username" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : ' ')} />
                      <ErrorMessage name="username" component=' ' className='invalid-feedback' />
                    </div>
                    <div className='form-group text-left'>
                      <label htmlFor="password">Password:      </label>
                      <Field name="password" type="password" placeholder="Password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                      <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </div>                  
                    <div className="form-group flex items-center mt-3 justify-center">
                      <button type='submit' className="bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black" disabled={isSubmitting}>
                        Login</button>
                      {isSubmitting &&
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}
                    </div>
                    <div className="flex items-center mt-3 justify-center">
                      <Link to='/'>
                        <button className="justify-center text-blue-500 hover:underline">
                          Want an account? Sign up for free!
                        </button>
                      </Link>
                    </div>
                  </Form>
                )}
             />
           </ErrorBoundary>  
              </div>
  </div>
    )
                      }
                    }
    
                        
       
          