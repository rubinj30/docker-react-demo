import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CalcButton from '../components/calculator-button/CalcButton';

function randomString(){
   return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  renderer.render(<CalcButton />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
});

it('renders with props', () => {
  const text = randomString();
  renderer.render(<CalcButton displayText={ text }/>);
  const result = renderer.getRenderOutput();
  expect(result.props.children).toBe(text);
});

it('can be passed a behavior prop', () => {
  const behaviorFunction = () => {};
  renderer.render(<CalcButton behavior={ behaviorFunction }/>);
  const result = renderer.getRenderOutput();
  expect(result.props.onClick).toBe(behaviorFunction);
});