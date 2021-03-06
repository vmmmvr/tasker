import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from "./Redux/store";
import HabitsTracker from './Features/Task/Components/Habits-Tracker/Habits-Tracker';
import Main from './Features/Task/Components/Main';

// const store = createStore(rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(

  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/"  element={ <App children={ <Main/>} /> } />
        <Route path="/habits-tracker"  element={ <App children={<HabitsTracker/>} /> } />
      </Routes>
    </Router>,
  </Provider>,
  

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
