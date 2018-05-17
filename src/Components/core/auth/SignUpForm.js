import React, { Component } from 'react'
import { withUser } from '../../contexts/User';

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
        <h2>New customer? Sign up</h2>
        {this.state.error && <p>{this.state.error.message}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            name="username"
            type="text"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <button>Sign up</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignUpForm)