import React, { useState, useRef } from 'react';
// 如何异步指向最新的state?
const Count = () => {
  const [state, setState] = useState({ title: '计数器', count: 0 });
  const stateRef = useRef(state);
  stateRef.current = state;
  const onChange = () => {
    setState({ ...state, count: 1 + state.count });
    setTimeout(() => {
      console.log('delay 1s:');
      console.log(stateRef.current);
      console.log(state)
    }, 1000);
  };
  return <p style={{ borderBottom: '2px solid #eee', paddingBottom: `20px` }} onClick={onChange}>计数器3: {state.count}</p>;
};
export default Count;
