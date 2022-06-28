import React, { useEffect, useState } from 'react';
import { OPERATOR_CHAR, UTIL } from '../../Constants';
import './Button.css';

function Button(props) {
	const handleClick = () => {
		props.clickHandler(props.btnName, props.btnTags);
	};
	const [isHighlighted, setIsHighlighted] = useState(false);

	useEffect(() => {
		if (props.btnName === 'AC' || props.btnTags === UTIL || props.btnTags === OPERATOR_CHAR) {
			setIsHighlighted(true);
		}
	});

	return (
		<div className={isHighlighted ? 'calc-button highlighted-button' : 'calc-button'}>
			<button onClick={handleClick}>{props.btnName}</button>
		</div>
	);
}

export default Button;