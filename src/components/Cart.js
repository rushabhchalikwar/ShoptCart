import React from "react";
import { connect } from "react-redux";
import { retrieveCart } from "../actions";
import history from "../history";
import StepProcess from "./StepProcess";
import { Link } from "react-router-dom";
import WarningMessage from "./WarningMessage";

class Cart extends React.Component {
  state = { totalAmount: 0 };

  componentDidMount() {
    this.props.retrieveCart();
  }

  renderCartProduct() {
    return this.props.products.map(({ product }) => {
      return (
        <div class="item" style={{ marginTop: "20px" }}>
          <div class="ui small image">
            <img
              src={product.image}
              style={{ maxHeight: "80px" }}
              alt={product.title}
            />
          </div>
          <div class="content">
            <div class="header">{product.title}</div>
            <div class="meta">
              <span class="price">Rs.{product.price}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  calculateTotalPrice() {
    var totalPrice = 0;

    for (var i = 0; i < this.props.products.length; i++) {
      totalPrice = totalPrice + this.props.products[i].product.price;
    }

    return totalPrice;
  }

  render() {
    if (!this.props.isSignedIn) {
      history.push("/");
    }

    if (typeof this.props.products === "undefined") {
      return (
        <div
          class="ui active centered inline loader"
          style={{ marginTop: "200px" }}
        ></div>
      );
    }

    if (this.props.products.length === 0) {
      return (
        <WarningMessage
          header="You dont have any product in the cart"
          description="Please add product to cart"
        />
      );
    }

    return (
      <div>
        <StepProcess stepNumber="0" />
        <div style={{ display: "flex" }}>
          <div className="ui items">{this.renderCartProduct()}</div>
          <div className="ui cards">
            <div
              class="card"
              style={{ marginLeft: "150px", maxHeight: "280px" }}
            >
              <div class="content">
                <div class="header">
                  PRICE DETAILS {`(${this.props.products.length} items)`}
                </div>
                <hr />
                <div class="description">
                  <p style={{ float: "left" }}>
                    Total MRP <br /> Discount on MRP <br /> Coupon discount
                  </p>
                  <p style={{ float: "right" }}>
                    {this.calculateTotalPrice()} <br /> -200 <br />{" "}
                    <p>Apply Coupon</p>
                  </p>
                </div>

                <div class="description">
                  <br /> <br /> <hr />
                  Total Amount
                  <p style={{ float: "right" }}>
                    {this.calculateTotalPrice() - 200}
                  </p>
                </div>
              </div>
              <Link to="/checkout/shipping" class="ui primary button negative">
                <i class="shopping bag icon"></i>
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cartProducts.products,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { retrieveCart })(Cart);
