import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getTopGames, getGameStreams } from './api';
import Game from './game';
import Stream from './stream';

class Sheet extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        games: [],
        streams: []
      }
  }

  componentDidMount() {
    getTopGames().then(games => {
      this.setState({games});
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.games.map(game =>
            <li key={game.id}><Game value={game} onClick={() => this.getGameStreams(game.name)}/></li>
          )}
        </ul>
        <ul>
          {this.state.streams.map(stream =>
            <li key={stream.id}><Stream value={stream}/></li>
          )}
        </ul>
      </div>
    )
  }
}


getTopGames().then(games => {

    console.log(games);
    getGameStreams(games[0].game.name)
      .then(stream => console.log(stream))
})

ReactDOM.render(<Sheet/>, document.getElementById('root'));
registerServiceWorker();
