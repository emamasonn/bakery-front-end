import React from 'react';
import Router from './router/index'
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router />
      </div>
    </Provider>

  );
}

export default App;

