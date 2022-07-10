import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests'
import ButtonContainer from './index.js';

let wrapper = shallow(<ButtonContainer />);
describe('ButtonContainer', () => {
	it('should render the ButtonContainer Component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});