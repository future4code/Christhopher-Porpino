import React from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers';
import AppContainer from './components/AppContainer';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
