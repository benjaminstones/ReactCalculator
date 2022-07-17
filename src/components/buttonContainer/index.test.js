import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests'
import ButtonContainer from './index.js';
import { StyledButtonRow } from './styles/styled';
import Button from '../button/index.js'

let wrapper = shallow(<ButtonContainer />);
describe('ButtonContainer', () => {
	it('should render the ButtonContainer Component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render 3 rows of buttons', () => {
		expect(wrapper.find(StyledButtonRow)).toHaveLength(5);
	})

	it('should render 20 buttons', () => {
		expect(wrapper.find(Button)).toHaveLength(20);
	})
});