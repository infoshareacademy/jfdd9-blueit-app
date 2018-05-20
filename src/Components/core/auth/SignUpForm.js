import React, { Component } from 'react'
import { withUser } from '../../contexts/User';
import './SignUpForm.css'

class SignUpForm extends Component {

  state = {
    username: '',
    password: '',
    error: null
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signUp(this.state.username, this.state.password).catch(
      error => this.setState({ error })
    )
  }

  render() {
    return (
      <div>
        <h2 className='SignUpText'>NEW CUSTOMER? SIGN UP</h2>
        {this.state.error && <p>{this.state.error.message}</p>}
        <form className='SignUpForm' onSubmit={this.handleSubmit}>
          <div><input
            className='SignUpInput'
            value={this.state.username}
            name="username"
            type="text"
            onChange={this.handleChange}
            placeholder="email"
          /></div>
          <div><input
            className='SignUpInput'
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="password"
          /></div>
          <button className='SignUpButton'>Sign up</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignUpForm)