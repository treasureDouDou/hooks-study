import React, { useState } from 'react';
// hooks setState与class 的setState的差别
const Count = () => {
  const [state, setState] = useState({
    title: '我是计数器4',
    count: 0,
  });
  const onChange = () => {
    setState({ ...state, count: 1 + state.count });
  };
  const iptChange = e => {
    const value = e.target.value;
    setState({ title: value });
  };
  const RenderInput = () => {
    return <input value={state.title} onChange={iptChange}></input>
  }
  return (
    <div style={{ borderBottom: '2px solid #eee', paddingBottom: `20px` }}>
      <p onClick={onChange}>{state.title}: {state.count}</p>
      <RenderInput />
      {JSON.stringify(state)}
    </div>
  );
};
export default Count;
