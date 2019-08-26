import React, { useState, useEffect } from 'react';
import useInput from './useInput';
import useFetch from './useFetch';

const Hello = () => {
  useEffect(() => {
    console.log('childrenrender');
    return () => {
      console.log('childrenunmount');
    };
  }, []);
  return <div>hello</div>;
};
// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//     return () => clearInterval(id);
//   }, [count]);

//   return <h1>{count}</h1>;
// };

export default function Example() {
  const [values, handleChange] = useInput({ value: '1', password: '3' });
  const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('render');
    return () => {
      console.log('unmount');
    };
  }, [values.password]);
  useEffect(() => {
    console.log('render');
  }, []);
  useEffect(() => {
    console.log('render2');
  }, []);
  useEffect(() => {
    console.log('render3');
  }, []);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  return (
    <div>
      <h3>useState 拆开自定义hooks && useEffect</h3>
      <button type="button" onClick={() => setShowHello(!showHello)}>
        toggle
      </button>
      {showHello && <Hello />}
      {loading ? 'lading...' : 'show data'}
      <div>{data}</div>
      <button type="button" onClick={() => setCount(count + 1)}>
        add
      </button>
      <input
        type="value"
        name="value"
        placeholder="请输入名称"
        value={values.value}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="请输入密码"
        value={values.password}
        name="password"
        onChange={handleChange}
      />
    </div>
  );
}
