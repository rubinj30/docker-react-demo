import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalcButton from './components/calculator-button/CalcButton';
import CalcFrame from './components/calculator-frame/CalcFrame';
import CalcScreen from './components/calculator-screen/CalcScreen';

class App extends Component {

  constructor(){
    super();
    this.state = {
      buttons: [1, 2, 3, '/', 4, 5, 6, '*', 7, 8, 9, '+', '(', 0, ')', '-'],
      input: ''
    }
    this.applyInput = this.applyInput.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.backspace = this.backspace.bind(this);
  }

  applyInput(e){
    const val = e.target.innerText;
    this.setState({
      input: this.state.input += val
    })
  }

  backspace(){
    const len = this.state.input.length;
    this.setState({
      input: this.state.input.substr(0, len-1),
      error: false
    })
  }

  clearInput(){
    this.setState({ 
      input: '', 
      error: false
    });
  }

  calculateTotal(){
    if(this.state.input.length==0){
      return;
    }
    try {
      this.setState({
        error: false,
        input: eval(this.state.input) + ''
      })
    } catch(e) {
      this.setState({ error: true });
    }
  }

  render() {
    const calcButtons = this.state.buttons.map((b, i)=> {
      return (<CalcButton key={ i } behavior={ this.applyInput } displayText={ b }/>);
    })
    const totalButton = (
      <CalcButton
        key={'calculate'}
        behavior={ this.calculateTotal }
        displayText={ 'Calculate!' }
        style={{ backgroundColor: 'rgba(0,100,200,0.2)', gridColumn : '1 / 5', width: '99%'}}
      />);
    const clearButton = (
      <CalcButton
        key={'clear'}
        behavior={ this.clearInput }
        displayText={ 'Clear' }
        style={{ gridColumn : '1 / 3', width: '99%'}}
      />);
    const backspaceButton = (
      <CalcButton
        key={'delete'}
        behavior={ this.backspace }
        displayText={ 'Delete' }
        style={{ gridColumn : '3 / 5', width: '99%'}}
      />);
    calcButtons.push(totalButton);
    calcButtons.push(clearButton);
    calcButtons.push(backspaceButton);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React PEMDAS Calculator</h1>
        </header>
        <CalcScreen displayText={ this.state.input } error={ this.state.error }/>
        <CalcFrame buttons={ calcButtons } />
      </div>
    );
  }
}

export default App;
