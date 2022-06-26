import './Display.css';

function Display(props) {
	return (
		<div className='display-container'>
			<h1>{props.expression}</h1>
			<h1>{props.total}</h1>
		</div>
	);
}

export default Display;
