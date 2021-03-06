import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(auth =>{
        history.push('/');
    }).catch(error =>alert(error.message))
}
const register = e =>{
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(email,password).then((auth) =>{
        console.log(auth);
        if(auth){
            history.push('/')
        }
    }).catch(error =>alert(error.message));
}

    return (
        <div className="login">
            <Link to='/' >
            <img
             className="login__logo"
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>
        <div className="login__container">
       <h1>Sign In</h1>

       <form>
           <h5>Email</h5>
           <input type='text' placeholder="E-Mail" value={email} onChange={e =>setEmail(e.target.value)}/>

           <h5>Password</h5>
           <input type='password'  placeholder="Password"
           value={password} onChange={e =>setPassword(e.target.value)}
           />
  
             <button type="submit" onClick={signIn} className="login__SignInButton">Sign In</button>
                  </form>

                  <p>
                      By Signing in you agree to thr Privacy of our Site
                  </p>
                  <button onClick={register} className="login__RegisterButton">Create Your Account</button>
        </div>
        </div>
    )
}

export default Login
