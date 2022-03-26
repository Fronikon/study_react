import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {name: 'Dima', id: '1'},
  {name: 'Sveta', id: '2'},
  {name: 'Ira', id: '3'},
  {name: 'Sergey', id: '4'},
  {name: 'Anton', id: '5'},
  {name: 'Semen', id: '6'},
  {name: 'Ulia', id: '7'},
  {name: 'Ura', id: '8'},
  {name: 'Diana', id: '9'}
];

let messagesData = [
  {message: 'hi', id: 1},
  {message: 'hello', id: 2},
  {message: 'yo', id: 3},
];

ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
