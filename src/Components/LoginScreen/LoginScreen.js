import React, {Component, Fragment} from 'react';
import SignInForm from "../core/auth/SignInForm.js";
import SignUpForm from "../core/auth/SignUpForm.js";

class LoginScreen extends Component {
  render() {
    return (
      <Fragment>
      <SignInForm/>
      <SignUpForm/>
      </Fragment>
    )
  }
}

export default LoginScreen