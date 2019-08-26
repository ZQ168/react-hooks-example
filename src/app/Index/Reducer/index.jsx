import React, { useReducer } from 'react';

const initialState = {
  count: 0,
};
// eslint-disable-next-line consistent-return
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        count: state.count + 1,
      };
    }
    case 'MINUS': {
      return {
        count: state.count - 1,
      };
    }
    default:
      break;
  }
};

function Counter1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>count: {state.count}</div>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'ADD' });
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'MINUS' });
        }}
      >
        -
      </button>
    </>
  );
}
export default Counter1;
