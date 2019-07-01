import React, { Component, Fragment } from 'react'

class Sushi extends Component {

  render(){
    // console.log('sushi component:', this.props);
    return (
      <div className="sushi">
        <div className="plate"
             onClick={() => this.props.handleEatClick(this.props.sushi)}>
          {
            this.props.sushi.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
