import React, { useEffect, useState } from 'react';
import { HIGHLIGHTED } from '../../constants';
import { StyledButtonContainer, StyledHighlightedButton, StyledUnhighlightedButton } from './styles/styled';

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
		<StyledButtonContainer>
			{isHighlighted ? 
				<StyledHighlightedButton onClick={handleClick}>{props.btnName}</StyledHighlightedButton> : 
				<StyledUnhighlightedButton onClick={handleClick}>{props.btnName}</StyledUnhighlightedButton>}
		</StyledButtonContainer>
	);
}

export default Button;