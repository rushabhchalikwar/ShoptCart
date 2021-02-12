import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Addresses from "./Addresses";
import Orders from "./Orders";
import Profile from "./Profile";

class AccountDetails extends React.Component {
  renderActiveElement() {
    if (this.props.match.url === "/my/profile") {
      return (
        <div>
          <Link to="/my/profile" className="item active">
            Profile
          </Link>
          <Link to="/my/orders" className="item">
            Orders
          </Link>
          <Link to="/my/addresses" className="item">
            Saved Adresses
          </Link>
        </div>
      );
    }

    if (this.props.match.url === "/my/addresses") {
      return (
        <div>
          <Link to="/my/profile" className="item">
            Profile
          </Link>
          <Link to="/my/orders" className="item">
            Orders
          </Link>
          <Link to="/my/addresses" className="item active">
            Saved Adresses
          </Link>
        </div>
      );
    }

    return (
      <div>
        <Link to="/my/profile" className="item">
          Profile
        </Link>
        <Link to="/my/orders" className="item active">
          Orders
        </Link>
        <Link to="/my/addresses" className="item">
          Saved Adresses
        </Link>
      </div>
    );
  }

  renderDetailTab() {
    if (this.props.match.url === "/my/profile") {
      return <Profile />;
    }

    if (this.props.match.url === "/my/addresses") {
      return <Addresses />;
    }

    return <Orders />;
  }

  render() {
    if (!this.props.isSignedIn) {
      return <div>Please sign in to continue</div>;
    }

    return (
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            {this.renderActiveElement()}
            <Link to="/" className="item">
              Links
            </Link>
          </div>
        </div>
        <div className="twelve wide stretched column">
          <div className="ui segment"> {this.renderDetailTab()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, user: state.auth.user };
};

export default connect(mapStateToProps)(AccountDetails);
