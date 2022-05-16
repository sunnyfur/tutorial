import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button type='button' onClick={handleClick}>
      {count}
    </button>
  );
};

export default Counter;
