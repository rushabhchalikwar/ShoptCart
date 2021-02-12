import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    if (window.gapi) {
      window.gapi.load("client:auth2", () => {
        window.gapi.client
          .init({
            clientId:
              "835990399298-0jbulk42tarvepudqn3dkka0mctskra2.apps.googleusercontent.com",
            scope: "email",
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
    } else {
      alert("Please connect to the internet !!!");
    }
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(
        this.auth.currentUser.get().getBasicProfile().getId(),
        this.auth.currentUser.get().getBasicProfile().getGivenName(),
        this.auth.currentUser.get().getBasicProfile().getFamilyName(),
        this.auth.currentUser.get().getBasicProfile().getEmail(),
        this.auth.currentUser.get().getBasicProfile().getImageUrl()
      );
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui blue google button">
          <i className="google icon" />
          Sign In Google
        </button>
      );
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    return <div> {this.renderAuthButton()}</div>;
  }
}

const mapsStatetoProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapsStatetoProps, { signIn, signOut })(GoogleAuth);
