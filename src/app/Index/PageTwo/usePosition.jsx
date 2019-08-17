import { useState, useEffect } from 'react';

export default function Example() {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });
  useEffect(() => {
    function handleWindowMouseMove(e) {
      setPosition(() => ({ left: e.pageX, top: e.pageY }));
    }
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, []);
  return position;
}
