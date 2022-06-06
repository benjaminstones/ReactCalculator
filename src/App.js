import Display from './Display';
import ButtonContainer from './ButtonContainer';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const evil = (fn) => {
    return new Function('return ' + fn)();
  }

  const [total, setTotal] = useState('0');
  const [expression, setExpression] = useState('0');


  const calculate = (expression) => {
    var stringMath = require('string-math');
    return stringMath(expression);
  }
  
  /*
calculator.net

expression:
whenever we add a number or operator we append to it
when we press equals, this becomes the total
Displayed at TOP

total:
Displayed at bottom
This becomes calculated 


*/
  const handleClick = (buttonName, buttonType) => {
    /*
    if number or operator
      append to expression
    */
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
      //setTotal(calculate(expression));
    }
  }

  return (
    <div className='calc-container'>
      <Display text={expression}/>
      <Display text={total}/>
      <ButtonContainer clickHandler={handleClick}/>
    </div>
  );
}

export default App;
