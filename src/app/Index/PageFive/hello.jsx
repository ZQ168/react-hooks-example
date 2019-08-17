import React, { useRef } from 'react';
export const Hello = React.memo(({ increment }) => {
  const renders = useRef(0);
  console.log((renders.current += 1));
  return (
    <button type="button" onClick={increment}>
      点我+
    </button>
  );
});
