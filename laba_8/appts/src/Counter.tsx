import React, { useState } from 'react';
import './Counter.css';
import Button from './Button';
import MySqer from './MySqer';

const Counter = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [color, setColor] = useState<string>('#0ff')

  function increaseCount() {
    setClickCount(clickCount + 1);
    setColor('#0ff');

    if(clickCount === 4){
      setColor('#f00')
    }

    if (clickCount === 5) 
      resetCount();
  }
  
  function resetCount() {
    setClickCount(0);
    setColor('#0ff');
  }

  return (
    <div className="Counter">
      <div className='Counter' style={{color}}>{clickCount}</div>
      <Button content='inc' onClick={increaseCount} disabled={clickCount == 5}/>
      <Button content='reset' onClick={resetCount} disabled={clickCount == 0}/>
      {clickCount == 3 && <MySqer visibl = {clickCount == 3}/>}
    </div>
  )
}

export default Counter;
