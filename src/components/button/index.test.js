import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests'
import Button from './index.js';
import  { HIGHLIGHTED, UNHIGHLIGHTED} from '../../constants/index.js';
import { StyledUnhighlightedButton, StyledHighlightedButton } from './styles/styled';

describe('Button', () => {
	it('should render the Button Component correctly', () => {
		let wrapped = shallow(<Button btnName={'AC'} btnTags={{ HIGHLIGHTED }} />);
		expect(wrapped).toMatchSnapshot();
	});
	it('should render an unhighlighted button if the unhighlighted tag is given', () => {
		let wrapped = shallow(<Button btnName={'AC'} btnTags={{ UNHIGHLIGHTED }} />);
		expect(wrapped.find(StyledUnhighlightedButton)).toHaveLength(1);
	});

	//FLAKE?
	// it('should render a highlighted button if the highlighted tag is given', () => {
	// 	let wrapped = shallow(<Button btnName={'AC'} btnTags={{ HIGHLIGHTED }} />);
	// 	expect(wrapped.find(StyledHighlightedButton)).toHaveLength(1);
	// });
});