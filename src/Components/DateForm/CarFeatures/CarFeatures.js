import React from 'react'
import './CarFeatures.css'

class CarFeatures extends React.Component {
  render () {
    return (
      <div className='CarFeatures'>
        <p><input
          type="checkbox"
          id="Family car"
        />
          <label htmlFor="Family car">Family Car</label></p>
        <p><input
          type="checkbox"
          id="Sports car"
        />
          <label htmlFor="Sports car">Sports Car</label></p>
        <p><input
          type="checkbox"
          id="Autonomous car"
          />
          <label htmlFor="Autonomous car">Autonomus Car</label></p>
        <p><input
          type="checkbox"
          id="Child care"
        />
          <label htmlFor= "Child care">Child care</label></p>
        <p><input
          type="checkbox"
          id="Pet friendly"
        />
          <label htmlFor="Pet friendly">Pet friendly</label></p>
        <p><input
          type="checkbox"
          id="Tour guide"
        />
          <label htmlFor="Tour guide">Tour guide</label></p>
        <p><input
          type="checkbox"
          id="Cable TV"
        />
          <label htmlFor="Cable TV">Cable TV</label></p>
        <p><input
          type="checkbox"
          id="Private bathroom"
        />
          <label htmlFor="Private bathroom">Private bathroom</label></p>

      </div>

    )
  }
}

export default CarFeatures