import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login.js";
import Header from "./Components/Header.js";
import Home from "./Components/Home";
import Details from "./Components/Details";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/detail/:id">
              <Details />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
