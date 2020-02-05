import React, { useState } from 'react';
const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <p
      style={{ borderBottom: '2px solid #eee', paddingBottom: `20px` }}
      onClick={() => setCount(count + 1)}
    >
      计数器1: {count}
    </p>
  );
};
export default Count;
