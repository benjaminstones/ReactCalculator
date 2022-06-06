import './Button.css'

function Button(props) {
    const handleClick = () => {
        props.clickHandler(props.btnName, props.btnType);
      };

    return (
      <div className='calc-button'>
        <button onClick={handleClick}>{props.btnName}</button>
      </div>
    );
  }
  
  export default Button;