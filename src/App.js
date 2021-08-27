import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import Footer from "./components/Footer";
import SignIn from "./SignIn";
import "./App.css";
import {BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar";



class App extends Component {
  render() {
    return (
      <Router>
      <Provider store={store}>
      <Navbar/>

{/* <header className="block row2 center">
<h1>Maryouli.tn</h1>
<Link to="/SignIn" >
<a    className="sign" href="/SignIn">  Sign In  </a> </Link>
<a href="#intro">Sign In </a>  
<Route path="/SignIn" component={SignIn}/>
<hr />
</header> */}
<Switch>
  <Route exact path="/">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <Basket />
            </div>
          </div>
          <hr />

          <Footer />

        </div>
        </Route>
<Route path="SignIn">
  <SignIn/>
</Route>
        </Switch>
      </Provider>
      </Router>
    );
    
  }
}

export default App;