import {BrowserRouter as Router,Switch,Route,Link, useHistory} from "react-router-dom";
import React,{Component,useState} from 'react';
import db from "../firebase";
import { auth } from '../firebase';
import "./Dashboard.css";
const Dashboard = () =>{
const LogOut =()=>{
    auth.signOut().then(() => {
      }).catch((error) => {
      });
}
const [userDetails, setUserDetails] = useState('')
db.collection('user').doc(auth.currentUser.uid).get()
        .then(snapshot => setUserDetails(snapshot.data()))
   return (
        <div className="fetch">
            <h2>Details of the Person</h2>
            <p>Infinite Possibilities <br/>
            One Stop Solution</p>
            <div className="ot">
                <h1>First Name :{userDetails.first_name}</h1>
                <h1>Phone Number :{userDetails.phone} </h1>
                <h1>Email Address : {userDetails.email}</h1>
                <h1>Password : {userDetails.password}</h1>
            </div>
            <button onClick={LogOut}><Link to="/Login" style={{color:"white",textDecoration:"none"}}>Great!!</Link></button>
        </div>
    )
}
export default Dashboard
