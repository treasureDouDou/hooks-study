import React, { useState } from 'react';
// state异步问题?
const Count = () => {
  const [state, setState] = useState({ title: '计数器', count: 0 });
  const onChange = () => {
    setState({...state, count: 1 + state.count});
    console.log('change')
    console.log(state);
    setTimeout(() => {
      console.log('delay 1s:');
      console.log(state)
    }, 1000);
  };
  return <p style={{ borderBottom: '2px solid #eee', paddingBottom: `20px` }} onClick={onChange}>计数器2: {state.count}</p>;
};
export default Count;
