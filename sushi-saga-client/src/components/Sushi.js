import React, { Fragment, Component } from 'react'

class Sushi extends Component {





  render(){
    console.log(this.props);
    return (
      <div className="sushi">
        <div className="plate" >
          { this.props.sushi.eaten
             ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" onClick={() => this.props.eatASushi(this.props.sushi)}/>
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
