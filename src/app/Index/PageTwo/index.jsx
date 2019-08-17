import React, { useState } from 'react';
import usePosition from './usePosition';

export default function Example() {
  const [state] = useState({
    width: 100,
    height: 100,
  });
  const position = usePosition();
  return (
    <div style={{ position: 'relative' }}>
      <header>useState 拆开自定义hooks</header>
      <div
        style={{
          position: 'absolute',
          ...position,
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
