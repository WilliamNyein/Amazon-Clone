import React,{useState} from 'react'
import './Login.css'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

function Login() {
    const history = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then(
            (cred)=>{
                if(cred){
                    history('/')
                }
            }
        ).catch(err=>alert(err.message))

    }

    const register = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((cred)=>
        {
            if(cred){
                history('/')
            }
        }).catch(err=>alert(err.message))
    }

  return (
    <div className='login-page'>
      <img className='login-logo' src='http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png'/>
    <div className='login-container'>
        <h2>Sign In</h2>
        <div>
            <h4>Email</h4>
            <input type='email' value={email} 
            onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div>
            <h4>Password</h4>
            <input type='password' value={password}
            onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button className='signin-button' type='submit'
        onClick={signIn}>Sign In</button>
        <p>By signing in u agree the policy &
            term
        </p>
        <button className='register-button' onClick={register}
        >Create Amazon Account</button>
    </div>
    </div>
  )
}

export default Login
