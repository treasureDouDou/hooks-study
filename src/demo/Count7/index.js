import React, { useState, useMemo } from 'react';
//解决父子组件重新渲染
const Count = () => {
  const [state, setState] = useState({
    title: '我是计数器7',
    count: 0
  });

  const customSetState = params => {
    setState(prevState => ({ ...prevState, ...params }));
  };

  const onChange = () => {
    customSetState({ count: 1 + state.count });
  };

  const RenderInput = () => {
    const iptChange = e => {
      const value = e.target.value;
      customSetState({ title: value });
    };
    console.log('render');
    return <input value={state.title} onChange={iptChange}></input>;
  };
  const CustomRenderInput = useMemo(() => {
    return <RenderInput />;
  }, [state.title]);
  return (
    <div style={{ borderBottom: '2px solid #eee', paddingBottom: `20px` }}>
      <p onClick={onChange}>
        {state.title}: {state.count}
      </p>
      {CustomRenderInput}
      {JSON.stringify(state)}
    </div>
  );
};
export default Count;
