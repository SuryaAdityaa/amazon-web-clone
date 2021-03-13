import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase';
import '../style/Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = e => {
        e.preventDefault();

        // Firebase Login
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        // Firebase Register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Login Logo"/>   
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="" method="post">
                    <h5>E-Mail</h5>
                    <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button onClick={signIn} type="submit" className="login__signInButton">Sign In</button>
                    <p>
                        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
