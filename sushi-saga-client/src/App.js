import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      sushis: [],
      sushiIndex: 0,
      currentSushis: [],
    }
  }

  handleMoreSushiClick = () => {
    console.log('click');
    let newSushis = this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
    console.log(newSushis);
    this.setState({
      currentSushis: newSushis,
      sushiIndex: this.state.sushiIndex + 4
    })
  }


  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushis: sushis
      })
      let fourSushis = sushis.slice(this.state.sushiIndex, 4)
      this.setState({
        currentSushis: fourSushis,
        sushiIndex: this.state.sushiIndex + 4
      })
    })


  }

  render() {
    // console.log('sushi index:', this.state.sushiIndex, 'current sushis:', this.state.currentSushis);
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.currentSushis} handleMoreSushiClick={this.handleMoreSushiClick}/>
        <Table />
      </div>
    );
  }
}

export default App;
