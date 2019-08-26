import React, { useState, useCallback, memo } from 'react';

function App() {
  const [isOn, setIsOn] = useState(false);
  const handleClick = useCallback(() => setIsOn(prevIsOn => !prevIsOn), []);
  return (
    <div>
      <h1>{isOn ? 'on' : 'off'}</h1>
      <Button handleClick={handleClick} />
    </div>
  );
}
const Button = memo(({ handleClick }) => {
  console.log('chidRender');
  // const prevClickRef = useRef();
  // useEffect(() => {
  //   prevClickRef.current = handleClick;
  // });
  // const prevClick = prevClickRef.current;
  // console.log('AppMiddle rendered', prevClick === handleClick);
  return (
    <button onClick={handleClick} type="button">
      click
    </button>
  );
});

export default App;
