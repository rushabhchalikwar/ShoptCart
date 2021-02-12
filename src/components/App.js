import React from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";
import { Router, Route, Switch, withRouter } from "react-router-dom";
import history from "../history";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import AccountDetails from "./AccountDetails";
import Shipping from "./Shipping";
import Payment from "./Payment";
import AddAddresses from "./AddAddresses";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <div
            style={{
              position: "sticky",
              top: "0",
              zIndex: "100",
              backgroundColor: "white",
            }}
          >
            <Header />
          </div>
          <Switch>
            <Route path="/" exact component={withRouter(ProductsList)} />
            <Route
              path="/products"
              exact
              component={withRouter(ProductsList)}
            />
            <Route
              path="/products/:id"
              exact
              component={withRouter(ProductDetails)}
            />
            <Route path="/checkout/cart" exact component={withRouter(Cart)} />
            <Route
              path="/my/profile"
              exact
              component={withRouter(AccountDetails)}
            />
            <Route
              path="/my/orders"
              exact
              component={withRouter(AccountDetails)}
            />
            <Route
              path="/my/addresses"
              exact
              component={withRouter(AccountDetails)}
            />
            <Route
              path="/checkout/shipping"
              exact
              component={withRouter(Shipping)}
            />
            <Route
              path="/checkout/payment"
              exact
              component={withRouter(Payment)}
            />
            <Route path="/my/addresses/new" exact component={AddAddresses} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
