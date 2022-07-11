import React from 'react';
import { DIVIDE_SIGN, MULTIPLY_SIGN } from '../../constants';
import { StyledDisplayContainer, StyledDisplayText } from './styles/styled';

export const formatOutputWithUnicode = (outputText) => {
	let formattedText = outputText.replaceAll('*', MULTIPLY_SIGN)
	formattedText = formattedText.replaceAll('/', DIVIDE_SIGN)
	return (formattedText)
}

function Display(props) {
	return (
		<StyledDisplayContainer>
			<StyledDisplayText id='expression-display'>{formatOutputWithUnicode(props.expression)}</StyledDisplayText>
			<StyledDisplayText id='total-display'>{props.total}</StyledDisplayText>
		</StyledDisplayContainer>
	);
}

export default Display;
