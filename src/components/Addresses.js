import React from "react";
import { connect } from "react-redux";
import { retrieveAddresses } from "../actions";
import { Link } from "react-router-dom";

class Addresses extends React.Component {
  componentDidMount() {
    this.props.retrieveAddresses();
  }

  renderAddresses() {
    return this.props.addresses.map((address) => {
      return (
        <div key={address.id} className="ui raised card">
          <h4>{address.default ? "DEFAULT ADDRESS" : ""}</h4>
          <div className="content">
            <div className="header">
              {address.first_name + " " + address.last_name}
            </div>
            <div className="meta">
              <span className="category">{address.address1}</span> ,
              <span className="category">{address.address2}</span> <br />
              <span className="category">
                {address.city + " - " + address.zip}
              </span>{" "}
              <br />
              <span className="category">{address.province}</span>
              <br />
              <span className="category">{address.country}</span> <br />
              <span className="category">{`Mobile : ${address.phone}`}</span>
            </div>
            <div className="description">
              <p></p>
            </div>
          </div>
          <div className="extra content">
            <button className="ui primary button">Edit</button>
            <button className="ui primary button">Remove</button>
          </div>
        </div>
      );
    });
  }

  render() {
    if (typeof this.props.addresses === "undefined") {
      return <div>Loading....</div>;
    }

    return (
      <div>
        <Link to="addresses/new" className="ui button">
          <i className="plus icon"></i>Add new Address
        </Link>
        {this.renderAddresses()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user: state.auth.user,
    addresses: state.addresses.addresses,
  };
};

export default connect(mapStateToProps, { retrieveAddresses })(Addresses);
