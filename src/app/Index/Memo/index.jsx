import React, { useState, useMemo, useCallback } from 'react';

// export default function WithMemo() {
//   const [count, setCount] = useState(1);
//   const [val, setValue] = useState('');

//   const expensive = () => {
//     console.log('compute');
//     let sum = 0;
//     for (let i = 0; i < count * 100; i += 1) {
//       sum += i;
//     }
//     console.log(count);
//     return sum;
//   };

//   return (
//     <div>
//       <h4>
//         {count}-{val}-{expensive()}
//       </h4>
//       <div>
//         <button onClick={() => setCount(count + 1)} type="button">
//           +c1
//         </button>
//         <input value={val} onChange={event => setValue(event.target.value)} />
//       </div>
//     </div>
//   );
// }

function Parent() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(10);

  console.time('calc');
  const result = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < count * 100; i += 1) {
      sum += i;
    }
    console.log(count);
    return sum;
  }, [count]);
  console.timeEnd('calc');
  return (
    <>
      <p>result: {result}</p>
      <div>
        <input type="number" disabled value={count} />
        <button onClick={() => setCount(count + 1)} type="button">
          +
        </button>
        <button onClick={() => setCount(count - 1)} type="button">
          -
        </button>
        <br />
        <input type="number" disabled value={count2} />
        <button onClick={() => setCount2(count2 + 1)} type="button">
          +
        </button>
        <button onClick={() => setCount2(count2 - 1)} type="button">
          -
        </button>
      </div>
    </>
  );
}
export default Parent;
