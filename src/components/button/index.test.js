import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests'
import Button from './index.js';
import HIGHLIGHTED from '../../constants/index.js';

let wrapped = shallow(<Button btnName={'AC'} btnTags={{ HIGHLIGHTED }} />);
describe('Button', () => {
	it('should render the Button Component correctly', () => {
		expect(wrapped).toMatchSnapshot();
	});
});