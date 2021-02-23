import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h2>Profile Details</h2>
        <hr />
        <br />
        <img
          class="ui medium centered circular image"
          src={this.props.user.imageURL}
          alt="profile"
        />

        <table class="ui red table">
          <tbody>
            <tr>
              <td>Full Name</td>
              <td>
                {this.props.user.firstName + " " + this.props.user.lastName}
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.props.user.email}</td>
            </tr>
            <tr>
              <td>User ID</td>
              <td>{this.props.user.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, user: state.auth.user };
};

export default connect(mapStateToProps)(Profile);
