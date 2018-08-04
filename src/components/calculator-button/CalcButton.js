import React, { Component } from 'react';
import './button.css';

export default class CalcButton extends Component{

  render() {
    return (

    <div className='calculator-button' 
      onClick={ this.props.behavior }
      style={this.props.style}>
        { this.props.displayText }
    </div>

    );
  }
  
}
