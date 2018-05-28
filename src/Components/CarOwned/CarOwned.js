import React, {Fragment} from 'react'
import {withSearch} from "../contexts/Search";
import './CarOwned.css'

class CarOwned extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='ownershipButton'>
          <button
            className='checkOwner ButtonBlue'
            onClick={this.props.toggleOwned}
          >{this.props.isOwned === true
            ? "Show all cars"
            : "Show owned cars"}
          </button>


        </div>

      </Fragment>
    )
  }

}


export default withSearch(CarOwned)