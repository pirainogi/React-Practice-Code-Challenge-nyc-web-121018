import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiIndex: 0,
    wallet: 100,
  }

  getFourSushis = () => {
    let four = this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
    return four
  }

  getMoreSushi = () => {
    console.log('more sushi plz');
    this.setState({
      sushiIndex: this.state.sushiIndex + 4
    })
  }

  // eatASushi = () => {
  //   // console.log('eating a sushi');
  //   this.setState({
  //     eaten: true
  //   })
  // }
  eatASushi = (sushiObj) => {
    console.log('eating a sushi', sushiObj);
    if(this.state.wallet - sushiObj.price >= 0){
      let newSush = this.state.sushis.map(sushi => {
        if(sushi.id === sushiObj.id){
          return {...sushi, eaten: true}
        } else {
          return sushi
        }
      })
      this.setState({
        sushis: newSush,
        wallet: this.state.wallet - sushiObj.price
      })
    }
    else {
      alert("You don't have enough money for this sushi")
    }
  }

  emptyPlates = () => {
    return this.state.sushis.filter(sushi => sushi.eaten)
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(rawsushi => {
      let newRawSushi = rawsushi.map(sushi => {return {...sushi, eaten: false }})
      this.setState({
        sushis: newRawSushi
      })
    })
  }


  render() {
    console.log('sushis', this.state.sushis);
    return (
      <div className="app">
        <SushiContainer sushis={this.getFourSushis()} getMoreSushi={this.getMoreSushi} eatASushi={this.eatASushi}/>
        <Table emptyPlates={this.emptyPlates()} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
