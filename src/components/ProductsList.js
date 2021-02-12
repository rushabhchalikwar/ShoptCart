import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
import { Link } from "react-router-dom";

class ProductsList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProductList = () => {
    if (!this.props.products) {
      return (
        <div
          className="ui active centered inline loader"
          style={{ marginTop: "200px" }}
        ></div>
      );
    }

    return this.props.products.map((product) => {
      return (
        <div className="ui segment divided items" key={product.id}>
          <div className="item">
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="content">
              <p className="header">{product.title}</p>
              <div className="meta">
                <span className="cinema">{product.description}</span>
              </div>
              <div className="description">
                <p></p>
              </div>
              <div className="extra">
                <div className="right floated">
                  <Link
                    className="ui button primary right floated"
                    to={`/products/${product.id}`}
                  >
                    Buy
                    <i className="right chevron icon"></i>
                  </Link>
                </div>
                <div className="ui label">{product.category}</div>
                <div className="ui label">
                  <i className="star icon"></i> {product.total_stars}
                </div>
              </div>
              <i className="rupee sign icon"></i> {product.price}
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderProductList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { products: state.products.products };
};

export default connect(mapStateToProps, { fetchProducts })(ProductsList);
