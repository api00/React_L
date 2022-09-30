import React, { Component } from 'react'

export default class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       changeValue : ''
    }
  }
  handleCng=(e)=>{
    this.setState({
      changeValue : e.target.value
    },()=>{
      console.log(e.target.value);
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleCng}/>
        <p>{this.state.changeValue}</p>
      </div>
    )
    }
  
}
