import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests'
import Calculator from './index.js'

let wrapper = shallow(<Calculator />);

describe('Calculator', () => {
	it('should render the Calculator Component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});