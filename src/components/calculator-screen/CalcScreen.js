import React, { Component } from 'react';
import './screen.css';

export default class CalcScreen extends Component{

  render() {
    return (
      <div className={ this.props.error ? 'calc-screen error' : 'calc-screen' } >{ this.props.displayText }</div>
    );
  }
  
}
