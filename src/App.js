import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import Footer from "./components/Footer";
import SignIn from "./SignIn";
import "./App.css";




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
<header className="block row2 center">
<h1>Maryouli.tn</h1>
<a className="sign" href="#/signin">  Sign In  </a>

<hr />
</header>
          
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

      </Provider>
    );
    
  }
}

export default App;