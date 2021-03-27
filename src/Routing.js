import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Layout/Header.js";
import Landing from "./Pages/Landing.js";
import Finance from "./Pages/Finance.js";
import Learn from "./Pages/Learn.js";
import Contact from "./Pages/Contact.js";
import Footer from "./Layout/Footer.js";

function Routing() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/finance">
            <Finance />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default Routing;
