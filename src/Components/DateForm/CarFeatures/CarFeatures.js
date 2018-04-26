import React from 'react'
import './CarFeatures.css'

class CarFeatures extends React.Component {
  render () {
    return (
      <div className='CarFeatures'>
        <input
          type="checkbox"
          id="Autonomous car"
          />
        <label for = "Autonomous car">Autonomus Car</label>
        <input
          type="checkbox"
        />
        <input
          type="checkbox"
        />
        <input
          type="checkbox"
        />
        <input
          type="checkbox"
        />
        <input
          type="checkbox"
        />
        <input
          type="checkbox"
        />
        <input
          type="checkbox"
        />

      </div>

    )
  }
}

export default CarFeatures