import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = (props) => {
  console.log('sushi container', props)
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return <Sushi key={sushi.id} sushi={sushi} eatASushi={props.eatASushi}/>
        })
        }
        <MoreButton getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
