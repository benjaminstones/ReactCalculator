import { useState } from "react";  
import { EMPTY, NON_OPERATOR_CHAR, OPERATOR_CHAR } from './Constants.js'
import { calculate } from './Calculations';


export const useDisplayContents = (buttonName, buttonType) => { 

    const [total, setTotal] = useState(EMPTY);
    const [expression, setExpression] = useState(EMPTY);

    if (buttonName === '=') {
        setExpression(expression.concat(buttonName));
        setTotal(calculate(expression));
      } else if (buttonName === 'AC') {
        setTotal(EMPTY)
        setExpression(EMPTY)
      } else if ((buttonName === 'del')) {
          if (expression.length === 1) {
            setExpression(EMPTY)
          } else {
            setExpression(expression.slice(0, -1))
          } 
      } else if (buttonType === NON_OPERATOR_CHAR || buttonType === OPERATOR_CHAR) {
        if (expression.endsWith('=') || expression === EMPTY) {
            setExpression(buttonName);
        } else {
            setExpression(expression.concat(buttonName));
        } 
    }

    return { total, expression }
}