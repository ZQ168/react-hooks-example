import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  memo,
  useMemo,
} from 'react';

function App() {
  const [count, forceUpdate] = useState(0);

  const schema = { b: 1 };

  return (
    <div>
      <Child schema={schema} />
      <div onClick={() => forceUpdate(count + 1)}>Count {count}</div>
    </div>
  );
}

const Child = memo(props => {
  useEffect(() => {
    console.log('schema', props.schema);
  }, [props.schema]);
  return <div>Child</div>;
},);

export default App;
