import React,{useState} from 'react'
import "./Login.css"
import Logo from "./logo.svg";
function Login() {
    const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');



const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        email: 'admin',
        password: 'admin'
    }

    if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
        alert('Successfully Logged in.');
    } else {
        //bad combination
        alert('wrong username or password combination');
    }
}
    return (
        <div className="Main">
            <div className="form">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat');
                    </style>
                <img src={Logo} alt="" />
                <div className="cont">
                    <input type="text" id="user" name="search" placeholder="USERNAME" value={emailInput} onChange={handleEmailChange} />
                    <input type="password" id="pass" name="pass" placeholder="PASSWORD" value={passwordInput}
                    onChange={handlePasswordChange} autoComplete="new-password" />
                </div>
                <button onClick={handleLoginSubmit}>LOGIN</button>
                <a href="index.html">Forgot password?</a>
            </div>
        </div>
    )
}

export default Login
