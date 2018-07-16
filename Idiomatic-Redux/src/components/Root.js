import React from 'react';
import { Provider } from 'react-redux';
import App from '../components/App';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </Provider>
)

export default Root;