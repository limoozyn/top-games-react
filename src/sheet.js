import React from "react";
import './sheet.css'
import { getTopGames, getGameStreams } from './api';
import Game from './game';
import Stream from './stream';

class Sheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      games: [],
      streams: [],
      active_id: null
    }
  }

  onGameClick (game) {
    getGameStreams(game.name).then(streams => {
      this.setState({streams});
      this.setState({active_id: game._id});
    })
  }

  componentDidMount() {
    getTopGames().then(games => {
      this.setState({games});
    })
  }

  render() {
    return (
        <div className="sheet">
          <aside className="games">
            <ul className="games-list">
              {this.state.games.map(game =>
                <li className={"game-item " + (this.state.active_id === game.game._id ? 'active' : '')} key={game.game._id}>
                  <Game value={game} onClick={() => this.onGameClick (game.game)}/>
                </li>
              )}
            </ul>
          </aside>
          <main className="streams">
            <ul className="streams-list">
              {this.state.streams.map(stream =>
                  <li key={stream._id}><Stream value={stream}/></li>
              )}
            </ul>
          </main>
        </div>
    )
  }
}

export default Sheet
