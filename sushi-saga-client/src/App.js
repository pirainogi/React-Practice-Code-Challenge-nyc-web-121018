import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {


  constructor() {
    super()

    this.state = {
      sushis: [],
      startingSushi: 0,
      plates: [],
      wallet: 100
    }
  } // end of constructor


  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushis: sushis
      }, this.isSushiEaten) //setState takes a callback as a second argument so you can shove more attributes into it instead of using a setTimeout fn
    })
  } //end of componentDidMount

  isSushiEaten = () => {
    // console.log(this.state.sushis);
    let eatenSushiStatus = [...this.state.sushis]
     eatenSushiStatus.map(sushi => {
      return sushi.eaten = false
    })
    this.setState({sushis: eatenSushiStatus})
  } // add eaten attribute to sushis

  eatSushis = (sushiID, sushiPrice) => {
    // console.log('click', this.state.sushis[0].id, sushiID);
    // console.log(sushiID === this.state.sushis[0].id);
    let newSush = this.state.sushis.map(origSush => {
      // console.log(origSush.id === sushiID);
      // console.log(origSush.eaten);
      if(origSush.id === sushiID){
        origSush.eaten = true;
        // console.log(origSush.eaten);
        return origSush
        // console.log(origSush);
      } else {
        return origSush
      }
    })
    this.setState({
      sushis: newSush,
      plates: [...this.state.plates, {plate: 1}],
      wallet: this.state.wallet - sushiPrice
    })
    // console.log(this.state.plates);
  }

  displaySushis = () => {
    let sushiIndex = this.state.startingSushi
    return this.state.sushis.slice(sushiIndex, sushiIndex + 4)
  }//end of display sushis

  incrementSushis = () => {
    this.setState({startingSushi: this.state.startingSushi + 4})
  } //change to the next 4 sushis


  render() {
    console.log(this.state.wallet);
    return (
      <div className="app">
        <SushiContainer
          sushis={this.displaySushis()}        incrementSushis={this.incrementSushis}
          eatSushis={this.eatSushis}
          wallet={this.state.wallet}
        />
        <Table
          plates={this.state.plates}
          wallet={this.state.wallet}
        />
      </div>
    );
  } // end of render


} //end of APP CLASS


export default App;
