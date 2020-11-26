import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/HeaderComponents/HeaderComponents";
import { shallow } from 'enzyme';


it('When active link clicked, will push correct filter message', () => {
    let passedFilterType = '';
    const onlogout = (filterType) => {
        passedFilterType = filterType;
    };
    const accounts = {};
    const wrapper = shallow(<Header  />);

    const button = wrapper.find('Button ');
    button.simulate('click');
    expect(onlogout).toBe(onlogout.archived);
});