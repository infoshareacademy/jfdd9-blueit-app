import React, {Fragment} from 'react'
import {withSearch} from "../contexts/Search";

const owner = 'isOwner'

class CarOwned extends React.Component{
  render() {
    return (
      <Fragment>
        <div className='checkOwner'>
          <input
            type={'checkbox'}
          onChange= {this.props.toggleOwned}
          />


        </div>

      </Fragment>
    )
  }

}

export default withSearch(CarOwned)