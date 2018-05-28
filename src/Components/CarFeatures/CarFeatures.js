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
    expanded: false,
    buttonText: 'MORE OPTIONS'
  }

  clickHeandler = () => {
    this.state.expanded ?
      this.setState({expanded: false, buttonText: 'MORE OPTIONS'})
      :
      this.setState({expanded: true, buttonText: 'HIDE'})
  }

  render() {
    return (
      <Fragment>
      <div className='CarFeatures'>
        <div className="MoreOptions">
        <button onClick={this.clickHeandler}
                className={this.clickHeandler.includes ? 'MORE OPTIONS' : 'HIDE'}
                >
          {this.state.buttonText}</button>
        </div>
<div className="CarFeaturesOptions">
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