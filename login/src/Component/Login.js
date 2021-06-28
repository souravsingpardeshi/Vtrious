import React,{useState} from 'react'
import "./Login.css"
import Logo from "./logo.svg";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Login() {
    const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');



const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}
const [result, setResult] = useState(false);
const [not, setNot] = useState(false);

const HandleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        email: 'admin',
        password: 'admin'
    }
   

    if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
        setResult(true)
        
    } else {
        setNot(true)
        setResult(false)
      
    }
   
}
    return (
        <div className="Lain">
            <div className="form">
                <img className="cart" src={Logo} alt="" />
                <div className="contn">
                    <input type="text" id="user" name="search" placeholder="USERNAME" value={emailInput} onChange={handleEmailChange} />
                    <input type="password" id="pass" name="pass" placeholder="PASSWORD" value={passwordInput}
                    onChange={handlePasswordChange} autoComplete="new-password" />
                </div>
                <button onClick={HandleLoginSubmit}>LOGIN</button>
             
                <Snackbar open={not}  autoHideDuration={3000} onClose={()=>setNot(false)}  >
                    <Alert  variant="filled" severity="error">
                        Wrong username or password
                    </Alert>
                </Snackbar>
                <Snackbar open={result} autoHideDuration={3000} onClose={()=>setResult(false)} >
                    <Alert  variant="filled" severity="success"  >
                          Successfully Logged in....!
                    </Alert>
                </Snackbar>
                <a href="index.html">Forgot password?</a>
            </div>
        </div>
    )
}

export default Login
