import React, { useState, useMemo, useCallback } from 'react';

// 强行更新组件
const useForceUpdate = () => {
  const forceUpdate = useState(0)[1];
  return () => forceUpdate(x => x + 1);
};
// 一个很耗时间的代码
function slowlyAdd(n) {
  console.time('add slowly');
  let res = n;
  for (let i = 0; i < 2000000000; i += 1) {
    res += 1;
  }
  console.timeEnd('add slowly');
  return res;
}

// useMemo记忆结果的一个自定义hook
function useSlowlyAdd(n) {
  const res = useMemo(() => slowlyAdd(n), [n]);
  return res;
}

export default () => {
  const [count, add] = useState(1);
  const forceUpdate = useForceUpdate();
  const handleClick = useCallback(() => {}, []);
  useSlowlyAdd(count); // 第一次这里会耗很多时间，页面卡死一阵
  return (
    <>
      <button onClick={forceUpdate}>更新页面</button>
      <button onClick={() => add(count + 1)}>+</button>
    </>
  )
}
