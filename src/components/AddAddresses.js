import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addAddress } from "../actions";
import { Link } from "react-router-dom";

class AddAddresses extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div> {this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.addAddress(formValues);
  };

  render() {
    return (
      <div>
        <Link className="ui primary button" to="/my/addresses">
          Back
        </Link>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="first_name"
            component={this.renderInput}
            label="Enter first name"
          />
          <Field
            name="last_name"
            component={this.renderInput}
            label="Enter last name"
          />
          <Field
            name="address1"
            component={this.renderInput}
            label="Enter address line 1"
          />
          <Field
            name="address2"
            component={this.renderInput}
            label="Enter address line 2"
          />
          <Field name="city" component={this.renderInput} label="Enter city" />
          <Field
            name="province"
            component={this.renderInput}
            label="Enter province"
          />
          <Field
            name="country"
            component={this.renderInput}
            label="Enter country"
          />
          <Field name="zip" component={this.renderInput} label="Enter zip" />
          <Field
            name="phone"
            component={this.renderInput}
            label="Enter phone"
          />
          <button className="ui button primary"> Submit </button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "addAddresses",
  validate,
})(connect(null, { addAddress })(AddAddresses));
