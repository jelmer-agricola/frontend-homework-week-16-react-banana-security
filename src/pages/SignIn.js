import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        login(email);

        console.log({
            email: email,
            wachtwoord: password,
        })
    }
  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email-field">
                Emailadres:
                <input
                    type="email"
                    id="email-field"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

          <label htmlFor="password-field">Password:</label>
          <input
              type="password"
              id="password-field"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="wachtwoord"
          />

        <button
            type="submit"
        >
            Inloggen
        </button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;