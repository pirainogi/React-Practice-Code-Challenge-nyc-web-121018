import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return <Sushi sushi={sushi} key={sushi.id} chargeCustomer={props.chargeCustomer} handleEatClick={props.handleEatClick}/>
        })
        }
        <MoreButton handleMoreSushiClick={props.handleMoreSushiClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
