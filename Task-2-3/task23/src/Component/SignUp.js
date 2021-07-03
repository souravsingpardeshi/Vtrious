import React, { Component } from 'react'
import { auth } from '../firebase';
import db from '../firebase';
import "./SignUp.css";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
export class SignUp extends Component {
    state ={
        first_name: "",
        email:"",
        phone:"",
        password:""
    };
    sign_Up = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
    ).then(user=>{
         
e.preventDefault();
db.collection("user").doc(auth.currentUser.uid).set({
    ...this.state,
    createdAt: new Date(),
});
        alert("success");
    })
    }

    render() {
        return (
            <div className="create">
           <h1>Create An Account</h1>
           <p>Infinite Possibilities <br/>
            One Stop Solution</p>
            <form action="">
                <input id="first_name" onChange={e=>this.setState({first_name:e.target.value})}  type="text" placeholder="First Name" />
                <input  type="text" onChange={e=>this.setState({phone:e.target.value})}  id="phone" placeholder="Phone Number" />
                <input  type="email" onChange={e=>this.setState({email:e.target.value})}  id="email" name="email" placeholder="Email Address" />
                <input type="password" onChange={e=>this.setState({password:e.target.value})}  id="password" placeholder="Password" />
            </form>
            <button onClick={this.sign_Up}>Create Account</button>
            <p>Already have an account? <Link style={{color:"#32403B"}} to="/" >  Sign In </Link></p>
        </div>
        )
    }
}

export default SignUp
