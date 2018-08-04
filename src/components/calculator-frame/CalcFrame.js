import React, { Component } from 'react';
import './frame.css';

export default class CalcFrame extends Component{

  render() {
    return (

      <div className='calc-frame'>
        { this.props.buttons }
      </div>
      
    );
  }
  
}
