import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = (props) => {
  // console.log(props);
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return <Sushi sushi={sushi} key={sushi.id} />
        })
        }
        <MoreButton handleMoreSushiClick={props.handleMoreSushiClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
