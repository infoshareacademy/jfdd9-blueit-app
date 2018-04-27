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
          <label for = "Family car">Family Car</label></p>
        <p><input
          type="checkbox"
          id="Sports car"
        />
          <label for = "Sports car">Sports Car</label></p>
        <p><input
          type="checkbox"
          id="Autonomous car"
          />
          <label for = "Autonomous car">Autonomus Car</label></p>
        <p><input
          type="checkbox"
          id="Child care"
        />
          <label for = "Child care">Child care</label></p>
        <p><input
          type="checkbox"
          id="Pet friendly"
        />
          <label for = "Pet friendly">Pet friendly</label></p>
        <p><input
          type="checkbox"
          id="Tour guide"
        />
          <label for = "Tour guide">Tour guide</label></p>
        <p><input
          type="checkbox"
          id="Cable TV"
        />
          <label for = "Cable TV">Cable TV</label></p>
        <p><input
          type="checkbox"
          id="Private bathroom"
        />
          <label for = "Private bathroom">Private bathroom</label></p>

      </div>

    )
  }
}

export default CarFeatures