import { useState } from 'react';
import './App.css';
import ButtonContainer from './components/buttonContainer';
import Display from './components/display/index.js';
import { DIVIDE_SIGN, EMPTY, MULTIPLY_SIGN, NON_OPERATOR_CHAR, OPERATOR_CHAR } from './constants/index.js';
import { calculate } from './calculations';

function App() {
	const [total, setTotal] = useState(EMPTY);
	const [expression, setExpression] = useState(EMPTY);

	const handleClick = (buttonName, buttonTags) => {
		if (buttonName === '=') {
			setExpression(expression.concat(buttonName));
			setTotal(calculate(expression));
		} else if (buttonName === 'AC') {
			setTotal(EMPTY)
			setExpression(EMPTY)
		} else if ((buttonName === 'del')) {
			if (expression.length === 1) {
				setExpression(EMPTY)
			} else {
				setExpression(expression.slice(0, -1))
			}
		} else if (Object.values(buttonTags).indexOf(NON_OPERATOR_CHAR) > -1|| Object.values(buttonTags).indexOf(OPERATOR_CHAR) > -1) {
			if (expression.endsWith('=') || expression === EMPTY) {
				setExpression(buttonName);
			} else if (buttonName === DIVIDE_SIGN) {
				setExpression(expression.concat('/'));
			} else if (buttonName === MULTIPLY_SIGN) {
				setExpression(expression.concat('*'));
			} else {
				setExpression(expression.concat(buttonName));
			}
		}
	}

	return (
		<div className='calc-container'>
			<Display expression={expression} total={total} />
			<ButtonContainer clickHandler={handleClick} />
		</div>
	);
}

export default App;
