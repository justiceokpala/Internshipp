import React from "react";
import ContactCard from "./components/ContactCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* <ContactCard /> */}
        <Switch>
          <Route exact path="/" component={ContactCard} />
          <Route path='/order-summary'/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
