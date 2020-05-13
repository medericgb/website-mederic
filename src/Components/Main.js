import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";

function Main() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Main;
