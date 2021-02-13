import React from "react";
import { Link } from "react-router-dom";

class StepProcess extends React.Component {
  render() {
    return (
      <div className="ui ordered steps">
        <Link
          to="/checkout/cart"
          className={
            this.props.stepNumber >= "0" ? "completed step" : "active step"
          }
        >
          <div className="content">
            <div className="title">Cart</div>
            <div className="description">Choose your products</div>
          </div>
        </Link>
        <Link
          to="/checkout/shipping"
          className={
            this.props.stepNumber >= "1" ? "completed step" : "active step"
          }
        >
          <div className="content">
            <div className="title">Shipping</div>
            <div className="description">Choose your shipping address</div>
          </div>
        </Link>
        <Link
          to="/checkout/payment"
          className={
            this.props.stepNumber >= "2" ? "completed step" : "active step"
          }
        >
          <div className="content">
            <div className="title">Confirm Order</div>
            <div className="description">Verify order details</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default StepProcess;
