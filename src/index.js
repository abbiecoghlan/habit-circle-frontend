import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProgressProvider } from './context/progress'
import { UserProvider } from './context/user';
import { DateProvider } from './context/date';

ReactDOM.render(
  <React.StrictMode>
    <DateProvider>
      <UserProvider>
        <ProgressProvider>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </ProgressProvider>
      </UserProvider>
    </DateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
