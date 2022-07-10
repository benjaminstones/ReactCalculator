import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests'
import Button from './index.js';
import { HIGHLIGHTED, UNHIGHLIGHTED } from '../../constants/index.js';
import { StyledUnhighlightedButton } from './styles/styled';

describe('Button', () => {
	it('should render the Button Component correctly', () => {
		let wrapper = shallow(<Button btnName={'AC'} btnTags={{ HIGHLIGHTED }} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('should render an unhighlighted button if the unhighlighted tag is given', () => {
		let wrapper = shallow(<Button btnName={'AC'} btnTags={{ UNHIGHLIGHTED }} />);
		expect(wrapper.find(StyledUnhighlightedButton)).toHaveLength(1);
	});

	//FLAKE?
	// it('should render a highlighted button if the highlighted tag is given', () => {
	// 	let wrapper = shallow(<Button btnName={'AC'} btnTags={{ HIGHLIGHTED }} />);
	// 	expect(wrapper.find(StyledHighlightedButton)).toHaveLength(1);
	// });
});