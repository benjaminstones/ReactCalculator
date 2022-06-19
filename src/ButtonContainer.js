import './ButtonContainer.css'
import Button from './Button';
import { UTIL, NON_OPERATOR_CHAR, OPERATOR_CHAR } from './constants.js'

function ButtonContainer(props) {

    const handleClick = (buttonName, buttonType) => {
        props.clickHandler(buttonName, buttonType);
      };

    return (
      <div className='button-container'>        
        <div className='button-row'> 
          <Button btnName={'AC'} btnType={UTIL} clickHandler={handleClick}/>
          <Button btnName={'('} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={')'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'del'} btnType={UTIL} clickHandler={handleClick}/>
        </div>
        <div className='button-row'> 
          <Button btnName={'1'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'2'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'3'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'+'} btnType={OPERATOR_CHAR} clickHandler={handleClick}/>
        </div>
        <div className='button-row'> 
          <Button btnName={'4'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'5'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'6'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'-'} btnType={OPERATOR_CHAR} clickHandler={handleClick}/>

        </div>
        <div className='button-row'> 
          <Button btnName={'7'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'8'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'9'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'*'} btnType={OPERATOR_CHAR} clickHandler={handleClick}/>
        </div>
        <div className='button-row'> 
          <Button btnName={'.'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'0'} btnType={NON_OPERATOR_CHAR} clickHandler={handleClick}/>
          <Button btnName={'='} btnType={UTIL} clickHandler={handleClick}/>
          <Button btnName={'/'} btnType={OPERATOR_CHAR} clickHandler={handleClick}/>
        </div>

      </div>
    );
  }
  
  export default ButtonContainer;