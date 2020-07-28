import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Cart from './pages/Cart';

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;
