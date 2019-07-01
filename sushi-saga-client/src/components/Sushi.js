import React, { Component, Fragment } from 'react'

class Sushi extends Component {

  constructor(props){
    super(props)
    this.state = {
      eaten: false,
    }
  }

  handleEatClick = () => {
    // console.log('click');
    this.setState({
      eaten: true,
    })
    this.props.chargeCustomer(this.props.sushi.price)
    // console.log('event', this.props.sushi);
  }

  render(){
    console.log('sushi component:', this.props);
    return (
      <div className="sushi">
        <div className="plate"
             onClick={(e) => this.handleEatClick()}>
          {
            this.state.eaten ?
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
