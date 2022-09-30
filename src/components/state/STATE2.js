import React, { Component } from 'react'

export default class 
 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }

      plusEvent = () =>{
        this.setState({
            count: this.state.count + 1
        })
      }

      minusEvent = () =>{
        this.setState({
            count: this.state.count - 1
            
        })
       
      }

  render() {
    const {count} =this.state;
    if(this.state.count < 0){
        this.state.count =0;
    }
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.plusEvent}>+</button>
        <button onClick={this.minusEvent}>-</button>

      </div>
    )
  }
}
