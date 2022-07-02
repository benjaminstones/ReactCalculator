import React, { useEffect, useState } from 'react';
import { HIGHLIGHTED } from '../../constants';
import './Button.css';

function Button(props) {
	const handleClick = () => {
		props.clickHandler(props.btnName, props.btnTags);
	};
	const [isHighlighted, setIsHighlighted] = useState(false);

	useEffect(() => {
		if (Object.values(props.btnTags).indexOf(HIGHLIGHTED) > -1) {
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