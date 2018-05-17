import React, {Component, Fragment} from 'react';
import SignInForm from "./core/auth/SignInForm";
import SignUpForm from "./core/auth/SignUpForm";

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