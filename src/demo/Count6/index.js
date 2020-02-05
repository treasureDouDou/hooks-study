import React, { useState } from 'react';
//封装简单的setState&父子组件重新渲染？
const Count = () => {
  const [state, setState] = useState({
    title: '我是计数器6',
    count: 0
  });

  const customSetState = params => {
    setState(prevState => ({ ...prevState, ...params }));
  };

  const onChange = () => {
    customSetState({ count: 1 + state.count });
  };
  const iptChange = e => {
    const value = e.target.value;
    customSetState({ title: value });
  };
  const RenderInput = () => {
    console.log('render');
    return <input value={state.title} onChange={iptChange}></input>;
  };
  return (
    <div style={{ borderBottom: '2px solid #eee', paddingBottom: `20px` }}>
      <p onClick={onChange}>
        {state.title}: {state.count}
      </p>
      <RenderInput />
      {JSON.stringify(state)}
    </div>
  );
};
export default Count;
