import { NON_OPERATOR_CHAR, OPERATOR_CHAR, UTIL, HIGHLIGHTED } from '../../constants.js';
import Button from '../button/Button';
import './ButtonContainer.css';

function ButtonContainer(props) {

	const handleClick = (buttonName, buttonTags) => {
		props.clickHandler(buttonName, buttonTags);
	};

	return (
		<div className='button-container'>
			<div className='button-row'>
				<Button btnName={'AC'} btnTags={{UTIL, HIGHLIGHTED}} clickHandler={handleClick} />
				<Button btnName={'('} btnTags={{NON_OPERATOR_CHAR, HIGHLIGHTED}} clickHandler={handleClick} />
				<Button btnName={')'} btnTags={{NON_OPERATOR_CHAR, HIGHLIGHTED}} clickHandler={handleClick} />
				<Button btnName={'del'} btnTags={{UTIL, HIGHLIGHTED}} clickHandler={handleClick} />
			</div>
			<div className='button-row'>
				<Button btnName={'1'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'2'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'3'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'+'} btnTags={{OPERATOR_CHAR, HIGHLIGHTED}} clickHandler={handleClick} />
			</div>
			<div className='button-row'>
				<Button btnName={'4'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'5'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'6'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'-'} btnTags={{OPERATOR_CHAR, HIGHLIGHTED}} clickHandler={handleClick} />

			</div>
			<div className='button-row'>
				<Button btnName={'7'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'8'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'9'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'\u00d7'} btnTags={{OPERATOR_CHAR, HIGHLIGHTED}} clickHandler={handleClick} />
			</div>
			<div className='button-row'>
				<Button btnName={'.'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'0'} btnTags={{NON_OPERATOR_CHAR}} clickHandler={handleClick} />
				<Button btnName={'='} btnTags={{UTIL, HIGHLIGHTED}} clickHandler={handleClick} />
				<Button btnName={'\u00f7'} btnTags={{OPERATOR_CHAR, HIGHLIGHTED}} clickHandler={handleClick} />
			</div>

		</div>
	);
}

export default ButtonContainer;