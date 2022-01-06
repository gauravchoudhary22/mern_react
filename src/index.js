import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route  path="/" element={<App />} />
     <Route path='create' element={<Create/>} />
     {/* <div style={{ marginTop: 20 }}> */}
          <Route path='read' element={<Read/>} />
        {/* </div> */}

        <Route path='update' element={<Update/>} />
</Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
