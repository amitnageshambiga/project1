import React, { Component } from 'react'
import "./global1.css"


export default class App3 extends Component {

constructor()
{
    super()
    this.state={
count:0
    }
}
increment=()=>{
this.setState({count:this.state.count+1})
}
decrement=()=>{
    this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
        }
  render() {
    return (
      <div className="d1">

<h1 className="d3">{this.state.count}</h1>
<button onClick={this.increment} className="d2">+increment</button>
<button onClick={this.decrement} className="d2">-decrement</button>
<button onClick={this.reset} className="d2">RESET</button>
      </div>
    )
  }
}
