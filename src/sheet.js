import React from "react";
import './sheet.css'
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

  onGameClick (name) {
    getGameStreams(name).then(streams => {
      this.setState({streams});
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
                  <li key={game.game._id}><Game value={game} onClick={() => this.onGameClick (game.game.name)}/></li>
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
