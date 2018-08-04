import React from 'react';
import ReactDOM from 'react-dom';
import CalcScreen from '../components/calculator-screen/CalcScreen';

function randomString(){
   return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

it('CalcScreen can render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalcScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('CalcScreen can render with props', () => {
    const div = document.createElement('div');
    const randString = randomString();
    const screen = <CalcScreen displayText={ randString }/>;
    ReactDOM.render(screen, div);
    ReactDOM.unmountComponentAtNode(div);
});
