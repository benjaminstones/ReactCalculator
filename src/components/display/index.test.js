import React from 'react';
import { shallow } from 'enzyme';
import Display from './index.js'
import '../../setupTests'

let wrapped = shallow(<Display expression='2+3=' total='5' />);
describe('Display', () => {
	it('should render the Display Component correctly', () => {
		expect(wrapped).toMatchSnapshot();
	});
});