import { StyledDisplayContainer, StyledDisplayText } from './styles/styled';

const formatUnicode = (outputText) => {
	let formattedText = outputText.replaceAll('*', '\u00d7')
	formattedText = formattedText.replaceAll('/', '\u00f7')
	return(formattedText)
}

function Display(props) {
	return (
		<StyledDisplayContainer>
			<StyledDisplayText>{formatUnicode(props.expression)}</StyledDisplayText>
			<StyledDisplayText>{props.total}</StyledDisplayText>
		</StyledDisplayContainer>
	);
}

export default Display;
