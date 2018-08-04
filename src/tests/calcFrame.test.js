import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CalcFrame from '../components/calculator-frame/CalcFrame';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
    renderer.render(<CalcFrame />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
});

it('can accept props', () => {
    const propButtons = [<div key={'1'}/>, <input key={'2'}/>];
    renderer.render(<CalcFrame buttons={ propButtons }/>);
    const result = renderer.getRenderOutput();
});

it('renders with props', () => {
    const randInteger = Math.floor(Math.random() * 20);
    const propButtons = (new Array(randInteger)).fill().map((e, i)=>(<div key={i}/>));
    renderer.render(<CalcFrame buttons={ propButtons }/>);
    const result = renderer.getRenderOutput();
    expect(result.props.children.length).toBe(propButtons.length);
});