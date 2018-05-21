import React, { Component } from 'react'
import { withUser } from '../../contexts/User';
import './SignInForm.css'

class SignInForm extends Component {

  state = {
    username: '',
    password: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signIn(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <h2 className='SignInText'>SIGN IN</h2>
        {this.props.signInError && <p>{this.props.signInError.message}</p>}
        <form className='SignInForm' onSubmit={this.handleSubmit}>
          <div><input
            className='SignInInput'
            value={this.state.username}
            name="username"
            type="text"
            onChange={this.handleChange}
            placeholder="email"
          /></div>
          <div><input
            className='SignInInput'
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="password"
          /></div>
          <button className='SignInButton'>Sign in</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignInForm)