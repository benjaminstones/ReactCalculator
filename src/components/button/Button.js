import { useEffect, useState } from 'react';
import { OPERATOR_CHAR, UTIL } from '../../Constants';
import './Button.css';

function Button(props) {
  const handleClick = () => {
    props.clickHandler(props.btnName, props.btnType);
  };
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    if (props.btnName === 'AC' || props.btnType === UTIL || props.btnType === OPERATOR_CHAR) {
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