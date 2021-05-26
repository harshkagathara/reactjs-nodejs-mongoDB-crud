import React from "react";
import Navbar from "./Components/layouts/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./Table.css";
import {BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import About from "./Components/layouts/About";
import Contact from "./Components/layouts/Contact";
import Home from "./Components/layouts/Home";
import NotFound from "./Components/layouts/NotFound";
import Create from "./Components/Students/Create";
import Edit from "./Components/Students/Edit";
import View from "./Components/Students/View";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        { <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path="/create-student" component={Create} />
            <Route exact path="/edit-student/:id" component={Edit} />
            <Route exact path="/student-view/:id" component={View} />
            <Route component={NotFound} />
        </Switch> }
      </div>
  </Router>
    );
}


export default App;
