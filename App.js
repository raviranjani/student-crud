import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddStudent } from "./components/AddStudent";
import { UpdateStudent } from "./components/UpdateStudent";
import { GlobalProvider } from "./context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "50rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddStudent} />
            <Route path="/edit/:id" component={UpdateStudent} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
