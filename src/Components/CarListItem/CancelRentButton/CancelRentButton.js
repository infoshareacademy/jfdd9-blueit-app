import React from 'react'
import './CancelRentButton.css'

class CancelRentButton extends React.Component {
  render () {
    return (
      <button onClick={this.props.cancel} className='CancelRentButton'>
        Delete reservation
      </button>
    )
  }
}

export default CancelRentButton

