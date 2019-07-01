import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiIndex: 0,
    currentSushis: [],
    wallet: 100,
  }

  handleMoreSushiClick = () => {
    let newSushis = this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
    this.setState({
      currentSushis: newSushis,
      sushiIndex: this.state.sushiIndex + 4
    })
  }

  handleEatClick = (sushi) => {
    if(this.state.wallet - sushi.price >= 0){
      let eaten = this.state.sushis.map(sush => {
        if (sush.id === sushi.id){
          sush.eaten = true
          return sush
        } else {
          return sush
        }
      })
      this.setState({
        sushis: eaten,
        wallet: this.state.wallet - sushi.price
      })
    } else {
      alert("You don't have enough money! Buy a cheaper sushi!")
    }
  }

  eatenSush = () => {
    return this.state.sushis.filter(sushi => sushi.eaten)
  }


  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      let sush = sushis.map(sushi => {return {...sushi, eaten: false} })
      this.setState({
        sushis: sush
      })
      this.handleMoreSushiClick()
    })


  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.currentSushis} handleMoreSushiClick={this.handleMoreSushiClick} chargeCustomer={this.chargeCustomer} handleEatClick={this.handleEatClick}/>
        <Table wallet={this.state.wallet} eatensush={this.eatenSush()}/>
      </div>
    );
  }
}

export default App;
