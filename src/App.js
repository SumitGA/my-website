import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/Navigations/NavBar';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <NavBar />
      </div>
    </Provider>
  );
};

export default App;
