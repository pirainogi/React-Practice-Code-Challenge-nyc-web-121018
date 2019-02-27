import React from 'react'

const Sushi = (props) => {
  console.log(props);

  return (
    <div className="sushi">
      <div className="plate">
        {props.eaten === true ?
            null
          :
            <img src={props.image} width="100%" alt={props.name} onClick={
              props.wallet - props.price >= 0
              ? () => props.eatSushis(props.id, props.price)
              : null
            }/>
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
