import React, { useEffect, useLayoutEffect, useState } from 'react';

import './style.scss';

export default function PageSeven() {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const startTime = Date.now() - lapse;
      const intervalId = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 2);
      return () => clearInterval(intervalId);
    }
  }, [lapse, running]);

  // useLayoutEffect(() => {
  //   if (running) {
  //     const startTime = Date.now() - lapse;
  //     const intervalId = setInterval(() => {
  //       setLapse(Date.now() - startTime);
  //     }, 2);
  //     console.log(intervalId);
  //     return () => clearInterval(intervalId);
  //   }
  //   console.log(lapse);
  // }, [lapse, running]);

  function handleRunClick() {
    setRunning(r => !r);
  }

  function handleClearClick() {
    setRunning(false);
    setLapse(0);
  }

  return (
    <div>
      <h3>useLayoutEffect</h3>
      <label>{lapse}ms</label>
      <button onClick={handleRunClick} type="button">
        {running ? '暂停' : '开始'}
      </button>
      <button onClick={handleClearClick} type="button">
        暂停并清0
      </button>
    </div>
  );
}
