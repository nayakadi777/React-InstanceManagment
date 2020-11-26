/* istanbul ignore file */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainComponents from './components/MainComponent/MainComponent';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './redux/store.js';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
        <MainComponents />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
