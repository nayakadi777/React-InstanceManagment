import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginComponent from '../components/LoginComponent/LoginComponent';

describe('LoginComponent', ()=> {
  let component;
  let store;
  let value;
  const mockStore = configureMockStore();
 beforeEach(() => {
    const initialState = {
        isLoggedIn: {
            isloggedin:false,
            error:'error'
        }
    };
    store = mockStore(initialState);
    component = shallow(<Provider store={store}><LoginComponent/></Provider>);
  });
console.log(component)
 it('should return exact value from the store(props)', () => {
     expect(component.props().errorMsg).toBe('error');
  });


});