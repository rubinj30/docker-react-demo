import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CalcButton from '../src/components/calculator-button/CalcButton';

function randomString(){
   return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

// it('CalcButton can render', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<CalcButton />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('CalcButton', () => {
    let wrapper;
  
    it('Can Render', () => {
      wrapper = shallow(<CalcButton />);
      expect(wrapper.find('.calculator-button').length).toEqual(1);
    });
  
    // it('has a title of Timeline', () => {
    //   wrapper = mount(<Timeline />)
    //   expect(wrapper.find('.title').text()).toBe("Timeline")
    // })
  
    // describe('search button', () => {
    //   let search;
    //   beforeEach(() => wrapper = mount(<Timeline />))
    //   beforeEach(() => search = wrapper.find('input.searchInput'))
  
    //   it('starts out hidden', () => {  
    //     expect(search.hasClass('active')).toBeFalsy()
    //   })
    //   it('becomes visible after being clicked on', () => {
    //     const icon = wrapper.find('.searchIcon')
    //     icon.simulate('click')
    //     expect(search.hasClass('active')).toBeTruthy()
    //   })
    // })
  
    // describe('status updates', () => {
    //   it('has 4 status updates at minimum', () => {
    //     wrapper = shallow(<Timeline />)
    //     expect(
    //       wrapper.find('ActivityItem').length
    //     ).toBeGreaterThan(3)
    //   })
    // })
  
})
