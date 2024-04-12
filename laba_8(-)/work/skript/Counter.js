import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Button title="Increase" onClick={increaseCount} disabled={count >= 5} />
      <Button title="Reset" onClick={resetCount} disabled={count === 0} />
    </div>
  );
}

export default Counter;