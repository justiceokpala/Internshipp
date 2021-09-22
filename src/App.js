import React from "react";
import ContactCard from "./components/ContactCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderSummary from "./components/orderSummary";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={OrderSummary} />
          <Route path="/contact-card" component={ContactCard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
