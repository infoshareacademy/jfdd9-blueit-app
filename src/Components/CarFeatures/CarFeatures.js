import React, {Fragment} from 'react'
import './CarFeatures.css'

const options = [
  'Family car',
  'Sports car',
  'Autonomous car',
  'Child care',
  'Pet friendly',
  'Tour guide',
  'Cable TV',
  'Private bathroom',


];



class CarFeatures extends React.Component {

  state = {
    expanded: false
  }
  render() {
    return (
      <Fragment>
      <div className='CarFeatures'>
        <div>
        <button onClick={() => this.setState({ expanded: true })}>MORE</button>
        </div>
<div>
        {this.state.expanded && options.map(
          option => (
            <p key={option}
               className="option"
               style={{ background: this.props.selectedOptions.includes(option) ? 'rgb(59, 65, 122)' : undefined, cursor: 'pointer', borderRadius: 5}}
               onClick={() => this.props.toggleOption(option)}
            >

              {option}
            </p>
          )
        )}
        </div>
      </div>
      </Fragment>
    )
  }
}

export default CarFeatures