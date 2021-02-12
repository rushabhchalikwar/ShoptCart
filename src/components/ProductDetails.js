import React from "react";
import { connect } from "react-redux";
import { fetchProduct, addTocart } from "../actions";

class ProductDetails extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProduct(id);
  }

  renderSizes() {
    return this.props.product.sizes.map((size) => {
      return (
        <option key={size} value={size}>
          {size}
        </option>
      );
    });
  }

  onAddToCart() {
    if (!this.props.isSignedIn) {
      alert("Please sign in to continue");
    } else {
      this.props.addTocart({ ...this.props.product, sizes: "S" });
    }
  }

  render() {
    if (!this.props.product) return null;

    return (
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
            <img
              src={this.props.product.image}
              style={{ width: "350px", height: "400px" }}
              alt={this.props.product.title}
            />
          </div>
          <div className="column">
            <h2 className="ui header">
              {this.props.product.title}
              <div className="sub header">{this.props.product.description}</div>
              <div className="ui label">
                <i className="star icon"></i>
                {this.props.product.total_stars} &nbsp; | &nbsp;
                {this.props.product.num_reviews} Reviews
              </div>
              <hr />
              Rs. {this.props.product.price} <br />
              <h3>Select Size (India)</h3>
            </h2>
            <select className="ui dropdown">{this.renderSizes()}</select> <br />
            <br />
            <button
              className="ui primary button"
              onClick={() => this.onAddToCart()}
            >
              <i className="shopping cart icon"></i>Add to Cart
            </button>
            <i className="heart outline extra large icon"></i>
          </div>
        </div>
        <div className="ui vertical divider">.</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchProduct, addTocart })(
  ProductDetails
);
