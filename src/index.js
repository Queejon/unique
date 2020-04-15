import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

setInterval(() => {ReactDOM.render(<App/>, document.getElementById('root'));}, 200);
