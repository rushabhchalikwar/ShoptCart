import React from "react";
import { connect } from "react-redux";
import { signIn, signOut, search } from "../actions";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  onSearchClick = (searchTerm) => {
    this.props.search(searchTerm);
  };

  renderCart() {
    if (this.props.isSignedIn) {
      return (
        <Link
          to={"/checkout/cart"}
          style={{
            margin: "7px 10px 3px 10px",
            backgroundColor: "transparent",
            border: "0px solid #3498db",
          }}
        >
          <i className="shopping cart large icon"></i>
        </Link>
      );
    }
  }

  renderDisplayName() {
    if (this.props.isSignedIn) {
      return <div>Welcome , {this.props.user.firstName}</div>;
    }
  }

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          ShopCart
        </Link>
        <div className="right menu">
          <div className="ui transparent left icon input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => this.onSearchClick(e.target.value)}
            />
            <i className="search icon"></i>
          </div>
          {this.renderCart()}
          <div className="ui compact menu">
            <div className="ui simple dropdown item">
              {this.renderDisplayName()} &nbsp;
              <i className="user icon"></i>
              <i className="dropdown icon"></i>
              <div className="menu">
                <Link to="/my/profile" className="item">
                  Profile
                </Link>
                <Link to="/my/orders" className="item">
                  Orders
                </Link>
                <div className="item">Wishlist</div>
                <div className="item">
                  <GoogleAuth />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { isSignedIn: auth.isSignedIn, user: auth.user };
};

export default connect(mapStateToProps, { signIn, signOut, search })(Header);
