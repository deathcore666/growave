import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store/index'

import CovidContainer from './containers/CovidContainer'
import './App.css';

function App() {
  return (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ CovidContainer }/>
                </Switch>
            </BrowserRouter>
        </Provider>
    </>
  );
}

export default App;