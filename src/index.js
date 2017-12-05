import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getTopGames, getGameStreams } from './api';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

getTopGames().then(games => {
  console.log(games);
  getGameStreams(games.top[0].game.name)
      .then(stream => console.log(stream))
})