import React, { Component } from 'react'

export default class extends Component {
constructor()
{
super()
this.state={
        username:"amit"
}
}
handlechanger=()=>{
    this.setState({username:"bandappa"})
}
  render() {
    return (
      <div>
<h1>{this.state.username}</h1>
<button onClick={this.handlechanger}>change me</button>
      </div>
    )
  }
}
