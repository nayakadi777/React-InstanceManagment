import React from 'react';
import Login from '../components/LoginComponent/LoginComponent';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow, mount, configure } from 'enzyme';

let contextValues;
let wrapper;

describe('renders <Login/>', () => {
    configure({ adapter: new Adapter() });
    const mockStore = configureMockStore();
    
  beforeAll(() => {
    const initialState = {
        isLoggedIn: {
            isloggedin:false,
            error:'error'
        }
    };
   const store = mockStore(initialState);
  const  wrapper = mount(<Provider store={store}><Login /></Provider>);
  });
  test('set userName and password', () => {
    let initialState = {
      isLoggedIn: {
          isloggedin:false,
          error:'error'
      }
    };
    let store = mockStore(initialState);
    configure({ adapter: new Adapter() });
    let  wrapper = mount(<Provider store={store}><Login /></Provider>);
    const userInputEmail = wrapper.find('#email');
    const userInputPassword = wrapper.find('#password');
    userInputEmail
      .at(1)
      .props()
      .onChange({ target: { value: 'Hello' } },'email');
    userInputPassword
      .at(1)
      .props()
      .onChange({ target: { value: 'World' } },'password');
    userInputEmail
      .at(2)
      .props()
      .onChange({ target: { value: 'Hello' } },'email');
    userInputPassword
      .at(2)
      .props()
      .onChange({ target: { value: 'World' } },'password');
    userInputEmail.at(0).simulate('change');
    userInputPassword.at(0).simulate('change');
    userInputEmail.at(1).simulate('change');
    userInputPassword.at(1).simulate('change');
  });
  test('handle submission of login/sign', () => {
    let initialState = {
      isLoggedIn: {
          isloggedin:false,
          error:'error'
      }
    };
    let store = mockStore(initialState);
    configure({ adapter: new Adapter() });
    let  wrapper = mount(<Provider store={store}><Login /></Provider>);
    wrapper.find('.loginBtn').at(0).simulate('click');
    wrapper.find('.goto').at(0).simulate('click');
    wrapper.find('.goto').at(0).simulate('click');
    wrapper.find('.loginBtn').at(0).simulate('click');
  });
});