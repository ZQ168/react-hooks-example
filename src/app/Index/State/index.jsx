import React, { useState, useEffect } from 'react';

export default function Example() {
  const [state, updateState] = useState({
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  });
  // const [left,setLeft] = useState(0);
  // const [top,setTop] = useState(0);
  // const [width,setWidth] = useState(100);
  // const [height,setHeight] = useState(100);
  useEffect(() => {
    function handleWindowMouseMove(e) {
      updateState(stateParam => ({
        ...stateParam,
        left: e.pageX,
        top: e.pageY,
      }));
    }
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, []);
  return (
    <div style={{ position: 'relative' }}>
      <header>useState</header>
      <div
        style={{
          position: 'absolute',
          left: state.left,
          top: state.top,
          width: state.width,
          height: state.width,
          background: 'red',
        }}
      >
        kkkkk
      </div>
    </div>
  );
}
