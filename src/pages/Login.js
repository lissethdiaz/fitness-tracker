import React, { useState } from 'react';
//import auth from '../utils/auth'


const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
 

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

//      const { data } = await login({
//        variables: { ...formState },
 //     });

//      auth.login(data.login.token);
//    } catch (e) {
//      console.error(e);
//    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };

  return (
    <main className="flex flex-row justify-center mb-4">
      <div className="columns-12 col-span-6">
        <div className="card">
          <h4 className='card-header header text-center p-5 mb-17 text-2xl border-b-2 border-solid'>Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

            <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;