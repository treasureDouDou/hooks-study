import React, { useState } from 'react';
// 拷贝当前数据覆盖？
const Count = () => {
  const [state, setState] = useState({
    title: '我是计数器5',
    count: 0
  });

  const onChange = () => {
    setState({ ...state, count: 1 + state.count });
  };
  const iptChange = e => {
    const value = e.target.value;
    setState({ ...state, title: value });
  };
  const RenderInput = () => {
    return <input value={state.title} onChange={iptChange}></input>;
  };
  /**
   * 注：此input其实需要内部维护state，不应写在外部，会导致重渲染，可以参考h5会员夜的input 使用useCallback，debounce
   * 
   * 看起来用拓展运算符state，貌似可以解决这个问题，如果存在多个异步操作然后setState
   * 比如一个函数体内执行两个异步的函数，这两个方法内部都存在setState({ ...state, 其他参数 });
   * fn1()
   * fn2()
   * 这会出现什么问题呢
   */

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
