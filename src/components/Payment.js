import React from "react";
import { connect } from "react-redux";
import StepProcess from "./StepProcess";
import WarningMessage from "./WarningMessage";
import { placeOrder } from "../actions";

class Payment extends React.Component {
  orderDetails = {};

  componentDidMount() {
    this.orderDetails = {
      orderId: Math.floor(Math.random() * 100),
      userId: this.props.userId,
      totalPrice: 4554,
      address: this.props.addresses,
      payment: "COD",
      products: this.props.products,
    };
  }

  render() {
    return (
      <div>
        <StepProcess stepNumber="2" />
        <WarningMessage
          header="Payment coming soon"
          description="choose COD option"
        />
        <button
          className="ui primary button"
          onClick={() => this.props.placeOrder(this.orderDetails)}
        >
          Place order
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    address: state.addresses.addresses[0],
    userId: state.auth.user.userId,
    products: state.cartProducts.products,
  };
};

export default connect(mapStateToProps, { placeOrder })(Payment);
