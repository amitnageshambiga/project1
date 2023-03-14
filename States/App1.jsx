import React, { Component } from 'react'
import JSON1 from './user.json'
import Student4 from './Student4';


export default class App1 extends Component {
constructor()
{
    super()
    this.state={
        json:JSON1
    }
}
  render() {
    return (
      <div>
<Student4 data={this.state.json}/>

      </div>
    )
  }
}
