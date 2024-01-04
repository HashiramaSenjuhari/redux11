import React, { useReducer } from 'react';
import reducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

const LikeCounter = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Like Counter: {state.count}</h1>
      <button onClick={() => dispatch(incrementLike())}>Increment</button>
      <button onClick={() => dispatch(decrementLike())}>Decrement</button>
    </div>
  );
};

export default LikeCounter;
