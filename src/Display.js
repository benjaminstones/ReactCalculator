import './Display.css'

function Display(props) {
  return (
    <div className='display-container'>
      <h1>{props.text}</h1>
    </div>
  );
}

export default Display;
