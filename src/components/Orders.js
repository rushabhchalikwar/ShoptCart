import React from "react";
import { connect } from "react-redux";
import { retrieveOrder } from "../actions";

class Orders extends React.Component {
  componentDidMount() {
    this.props.retrieveOrder();
  }

  renderProductsInOrder(products) {
    return products.map((product) => {
      return (
        <div
          className="card"
          style={{ width: "500px", border: "solid 2px blue" }}
        >
          <div className="content">
            <img
              src={product.image}
              style={{ maxHeight: "50px" }}
              alt={product.title}
            />
            <div className="header">{product.title}</div>
            <div className="meta">{product.category}</div>
            <div className="description">RS : {product.price}</div>
          </div>
        </div>
      );
    });
  }

  renderOrders() {
    return this.props.orders.map((order) => {
      return (
        <div
          className="card"
          style={{ width: "500px", border: "solid 2px green" }}
        >
          <div className="content">
            <div className="header">Order Id : {order.orderId}</div>
            <div className="ui cards">
              {this.renderProductsInOrder(order.products)}
            </div>
            <h3>Total amount paid RS : {order.totalPrice}</h3>
          </div>
        </div>
      );
    });
  }

  render() {
    if (typeof this.props.orders === "undefined") {
      return <div>Loading....</div>;
    }

    if (this.props.orders.length === 0) {
      return <div>No orders</div>;
    }

    return <div className="ui cards">{this.renderOrders()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.order,
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.user.userId,
  };
};

export default connect(mapStateToProps, { retrieveOrder })(Orders);
