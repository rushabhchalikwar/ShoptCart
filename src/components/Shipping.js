import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Addresses from "./Addresses";
import StepProcess from "./StepProcess";
import WarningMessage from "./WarningMessage";

class Shipping extends React.Component {
  calculateTotalPrice() {
    var totalPrice = 0;

    for (var i = 0; i < this.props.products.length; i++) {
      totalPrice = totalPrice + this.props.products[i].product.price;
    }

    return totalPrice;
  }

  render() {
    if (!this.props.products) {
      return null;
    }

    return (
      <div>
        <WarningMessage
          header="Shipping address"
          description="After clicking on continue , it will take default address for shipping. If want to change default address , Please go to saved address screen "
        />
        <StepProcess stepNumber="1" />
        <div style={{ display: "flex" }}>
          <Addresses />
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
              <Link to="/checkout/payment" class="ui primary button negative">
                <i class="shopping bag icon"></i>
                Continue
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
    isSignedIn: state.auth.isSignedIn,
    user: state.auth.user,
    products: state.cartProducts.products,
  };
};

export default connect(mapStateToProps)(Shipping);
