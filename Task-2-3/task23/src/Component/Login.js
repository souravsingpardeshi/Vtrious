import React,{useRef ,useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from "react-router-dom";
import { auth } from '../firebase';
import "./Login.css";
const Login = ()=> {
  const history = useHistory();
    const emailRef= useRef(null);
    const passRef= useRef(null);
    const signin = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
    ).then(user=>{
      alert("success");
      history.push("/Dashboard");
      })
    }
    return (
        <div className="SignMain">
            <form action="">
                <h1>Sign In</h1>
                <h2>Infinite Possibilities <br/>
                One Stop Solution</h2>
                <input ref={emailRef} type="email" placeholder="Email Address" />
                <input ref={passRef} type="password" placeholder="Password" />
                <button onClick={signin}>Get In</button>
                <p>Don't have an Account?<Link style={{color:"#32403B"}} to="SignUp">  Create</Link></p>
            </form>
        </div>
    )
}
export default Login
