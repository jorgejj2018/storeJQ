
import React from "react";
import "./App.css";
import Home from "./pages/home";
import Error from "./pages/error";

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
          <Route path="/404" component={Error} />
        </Switch>
      </main>
    </Router>
  );
}
export default App;

/* 
import Blog from "./pages/blog";
import AddBlog from "./pages/addBlog";
import DeleteBlog from "./pages/deleteBlog";
import UpdateBlog from "./pages/updateBlog"; */

{/*           
          <Route exact path="/createNewBlog" component={AddBlog} />
          <Route exact path="/updateBlog:slug" component={UpdateBlog} />
          <Route exact path="/deleteBlog:slug" component={DeleteBlog} />
          <Route path="/:slug" component={Blog} /> */}