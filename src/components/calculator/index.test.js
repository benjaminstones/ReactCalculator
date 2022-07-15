import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests'
import Calculator from './index.js'

let wrapper = shallow(<Calculator />);

describe('Calculator', () => {
	it('should render the Calculator Component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render a display', () => {
		const display = wrapper.find('#display');

		expect(display.exists()).toBe(true);
	})

	it('should render a button container', () => {
		const buttonContainer = wrapper.find('#button-container');

		expect(buttonContainer.exists()).toBe(true);
	})
});
