import React from 'react';
import { shallow } from 'enzyme';
import Display from './index.js'
import '../../setupTests'
import { StyledDisplayText } from './styles/styled.js';

let wrapped = shallow(<Display expression='2+3=' total='5' />);
describe('Display', () => {
	it('should render the Display Component correctly', () => {
		expect(wrapped).toMatchSnapshot();
	});
	it ('should render an expression and total in the display', () => {
		const expressionDisplay = wrapped.find('#expression-display');
		const totalDisplay = wrapped.find('#total-display')

		expect(wrapped.find(StyledDisplayText)).toHaveLength(2);
		expect(expressionDisplay.exists()).toBe(true);
		expect(totalDisplay.exists()).toBe(true);
	})
});