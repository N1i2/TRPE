import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [disabledBut, setDisable] = useState<boolean>(true);
    const [color, setColor] = useState<string>('#0ff');

    function increaseCount() {
        setCount(count + 1);
        setDisable(false);
        setColor('#0ff');

        if (count === 4)
            setColor('red');

        if (count === 5)
            resetCount();
    }

    function resetCount() {
        setCount(0);
        setDisable(true);
        setColor('#0ff');
    }

    return (
        <div className="Counter" style={{ color }}>
            <div className='Counter'>{count}</div>
            <Button content='inc' onClick={increaseCount} />
            <Button content='reset' onClick={resetCount} disabled={disabledBut} />
        </div>
    );
};

export default Counter;
