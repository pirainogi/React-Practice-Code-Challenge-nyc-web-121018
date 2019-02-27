import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.wallet);
  const renderSushis = () => {
    return props.sushis.map(sushi => {
      return (
        <Sushi
        key={sushi.id}
        id={sushi.id}
        name={sushi.name}
        price={sushi.price}
        image={sushi.img_url}
        eaten={sushi.eaten}
        eatSushis={props.eatSushis}
        wallet={props.wallet}
        />
      )
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushis()}
        <MoreButton incrementSushis={props.incrementSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
