import Display from './Display';
import ButtonContainer from './ButtonContainer';
import { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState('0');
  const [expression, setExpression] = useState('0');

  const calculate = (expression) => {
    var stringMath = require('string-math');
    return stringMath(expression);
  }
  
  /*
calculator.net
*/
  const handleClick = (buttonName, buttonType) => {
      if (buttonName === '=') {
        setExpression(expression.concat(buttonName));
        setTotal(calculate(expression));
      } else if (buttonName === 'C') {
        setTotal('0')
        setExpression('0')
      } else if (buttonType === 'num' || buttonType === 'op') {
        if (expression.endsWith('=') || expression === '0') {
            setExpression(buttonName);
        } else {
            setExpression(expression.concat(buttonName));
        } 
    }
  }

  return (
    <div className='calc-container'>
      <Display expression={expression} total = {total} />
      <ButtonContainer clickHandler={handleClick}/>
    </div>
  );
}

export default App;
