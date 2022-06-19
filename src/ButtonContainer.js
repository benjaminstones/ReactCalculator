import './ButtonContainer.css'
import Button from './Button';

function ButtonContainer(props) {

    const handleClick = (buttonName, buttonType) => {
        props.clickHandler(buttonName, buttonType);
      };

    return (
      <div className='button-container'>        
        <div className='button-row'> 
          <Button btnName={'AC'} btnType={'util'} clickHandler={handleClick}/>
          <Button btnName={'('} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={')'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'del'} btnType={'util'} clickHandler={handleClick}/>
        </div>
        <div className='button-row'> 
          <Button btnName={'1'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'2'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'3'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'+'} btnType={'op'} clickHandler={handleClick}/>
        </div>
        <div className='button-row'> 
          <Button btnName={'4'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'5'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'6'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'-'} btnType={'op'} clickHandler={handleClick}/>

        </div>
        <div className='button-row'> 
          <Button btnName={'7'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'8'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'9'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'*'} btnType={'op'} clickHandler={handleClick}/>
        </div>
        <div className='button-row'> 
          <Button btnName={'.'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'0'} btnType={'num'} clickHandler={handleClick}/>
          <Button btnName={'='} btnType={'util'} clickHandler={handleClick}/>
          <Button btnName={'/'} btnType={'op'} clickHandler={handleClick}/>
        </div>

      </div>
    );
  }
  
  export default ButtonContainer;