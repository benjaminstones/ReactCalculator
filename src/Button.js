import './Button.css'
import { useState, useEffect} from 'react';
function Button(props) {
    const handleClick = () => {
        props.clickHandler(props.btnName, props.btnType);
      };
      const [isHighlighted, setIsHighlighted] = useState(false);

      useEffect(() => {
        if(props.btnName ==='AC') {
          console.log(true);
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