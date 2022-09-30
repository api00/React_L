import React, { Component } from 'react'
import Home from './home';
import Login from './login';
export default class index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLog : true
        
      }
    }
  render() {

    if(this.state.isLog){
        return <Home />
    }
    else{
        return <Login />
    }
 
  }
}
 