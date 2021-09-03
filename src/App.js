
import React from "react";
import "./App.css";
import Home from "./pages/home";
import Error from "./pages/error";
import Product from "./pages/product";

import { BrowserRouter as Router ,Route, Link , Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <h2>StoreJQ</h2>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
           <Route path="/:slug" component={Product}/>
          <Route path="/404" component={Error} />
        </Switch>
      </main>
    </Router>
  );
}
export default App;


