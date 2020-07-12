import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store/index'
import { PersistGate } from 'redux-persist/integration/react'
import CovidContainer from './containers/CovidContainer'
import './App.css';

function App() {
  return (
    <>
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={ CovidContainer }/>
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </>
  );
}

export default App;