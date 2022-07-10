import React from 'react';
import { shallow } from 'enzyme';
import Display from './index.js'
import '../../setupTests'
import { StyledDisplayText } from './styles/styled.js';

let wrapper = shallow(<Display expression='2+3=' total='5' />);
describe('Display', () => {
	it('should render the Display Component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should render an expression and total in the display', () => {
		const expressionDisplay = wrapper.find('#expression-display');
		const totalDisplay = wrapper.find('#total-display')

		expect(wrapper.find(StyledDisplayText)).toHaveLength(2);
		expect(expressionDisplay.exists()).toBe(true);
		expect(totalDisplay.exists()).toBe(true);
	})
	it('should output the expression correctly', () => {
		const expressionDisplay = wrapper.find('#expression-display');

		expect(expressionDisplay.text()).toBe('2+3=')
	});
	it('should output the total correctly', () => {
		const totalDisplay = wrapper.find('#total-display')

		expect(totalDisplay.text()).toBe('5')
	});
});