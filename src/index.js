import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Sheet from './sheet';

ReactDOM.render(<Sheet/>, document.getElementById('root'));
registerServiceWorker();
