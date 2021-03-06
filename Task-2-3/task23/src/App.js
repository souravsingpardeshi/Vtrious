import React,{useState,useEffect}  from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Component/Login';
import SignUp from "./Component/SignUp.js";
import Dashboard from "./Component/Dashboard";
import {auth} from "./firebase";
function App() {
  const [user, setUser]=useState(null);
  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
     const user={
       uid:userAuth?.uid,
       email:userAuth?.email
     }
      if(userAuth){
        setUser(user)
      }
      else{
        setUser(null)
      }})
    return unsubscribe
  }, [])
 const [dark,setDark] = useState(false);
  return (
    <div className={dark? 'dark':'light'}>
    <div className="App">
        <Router>
        <label className="switch">
            <input type="checkbox" onChange={() => setDark(!dark)} />
            <span className="slider round"> </span>
          </label>
    <Switch>
      <Route path="/Login">
      <Login />
      </Route>
        <Route path="/SignUp">
        <SignUp />
      </Route>
      <Route path="/Dashboard">
      <Dashboard/>
      </Route>
      <Route path="/">
      {user ? <Dashboard/> : <Login/>}
      </Route>
    </Switch>
    </Router>
    </div>
    </div>
  );
}

export default App;
