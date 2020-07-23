import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, signin } from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(5))}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch(signin())}>{isLogged ? 'Logout' : 'Login'}</button>
        {isLogged && (
          <h3>Valuable information I shouldn´t see</h3>
        )}
      </div>
    </div>
  );
}

export default App;
