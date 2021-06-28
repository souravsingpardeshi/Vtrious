import Main from "./Component/Main";
import Login from "./Component/Login";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
    <Switch>
      <Route path="/Home">
      <Main />
      </Route>
        <Route path="/Sign in">
        <Login />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
