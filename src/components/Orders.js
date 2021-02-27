import React from "react";
import { connect } from "react-redux";
import { retrieveOrder } from "../actions";

class Orders extends React.Component {
  state = { activeIndex: null };

  componentDidMount() {
    this.props.retrieveOrder();
  }

  renderProductsInOrder(products) {
    return products.map((product) => {
      return (
        <div
          className="card"
          style={{ width: "500px", borderLeft: "2px solid blue" }}
        >
          <div className="content">
            <img
              src={product.product.image}
              style={{ maxHeight: "50px" }}
              alt={product.product.title}
            />
            <div className="header">{product.product.title}</div>
            <div className="meta">{product.product.category}</div>
            <div className="description">RS : {product.product.price}</div>
          </div>
        </div>
      );
    });
  }

  onTitleClick = (index) => {
    this.setState({ activeIndex: index });
  };

  renderOrders() {
    return this.props.orders.map((order, index) => {
      const active = index === this.state.activeIndex ? "active" : "";
      return (
        <div>
          <div
            className={`title ${active}`}
            onClick={() => this.onTitleClick(index)}
          >
            <i className="dropdown icon"></i>
            Order Id : {order.orderId}
          </div>
          <div className={`content ${active}`}>
            <div className="card" style={{ width: "500px" }}>
              <div className="content">
                <div className="ui cards">
                  {this.renderProductsInOrder(order.products)}
                </div>
                <h3>Total amount paid RS : {order.totalPrice}</h3>
              </div>
            </div>
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

    return (
      <div className="ui styled fluid accordion">{this.renderOrders()}</div>
    );
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
