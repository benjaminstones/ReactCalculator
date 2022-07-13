import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests'
import Calculator from './index.js'

let wrapped = shallow(<Calculator />);
describe('Calculator', () => {
	it('should render the Calculator Component correctly', () => {
		expect(wrapped).toMatchSnapshot();
	});
});