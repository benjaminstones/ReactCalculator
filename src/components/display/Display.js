import './Display.css';

const formatUnicode = (outputText) => {
	let formattedText = outputText.replaceAll('*', '\u00d7')
	formattedText = formattedText.replaceAll('/', '\u00f7')
	return(formattedText)
}

function Display(props) {
	return (
		<div className='display-container'>
			<h1>{formatUnicode(props.expression)}</h1>
			<h1>{props.total}</h1>
		</div>
	);
}

export default Display;
