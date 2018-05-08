import React from 'react'
import './CarFeatures.css'

const options = [
  'Family car',
  'Sports car',
  'Autonomous car',
  'Child care',
  'Pet friendly',
  'Tour guide',
  'Cable TV',
  'Private bathroom'

];


class CarFeatures extends React.Component {
  render() {
    return (
      <div className='CarFeatures'>
        {options.map(
          option => (
            <p key={option}>
              <input
                onChange={() => this.props.toggleOption(option)}
                checked={this.props.selectedOptions.includes(option)}
                type="checkbox"
                name={option}
              />
              <label htmlFor={option}>{option}</label>
            </p>
          )
        )}
      </div>
    )
  }
}

export default CarFeatures