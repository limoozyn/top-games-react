import React from "react";
import './App.css'
import { getTopGames, getGameStreams } from './api';
import Game from './Game';
import Stream from './Stream';
import classNames from "classnames";

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
    this.setState({active_id: game._id});
    getGameStreams(game.name).then(streams => {
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
                <li className = { classNames( 'game-item',
                                            { 'game-item_active' : ( this.state.active_id === game.game._id) }
                                          )}
                              key = { game.game._id }>
                  <Game game={game.game} viewers={game.viewers} onGameClick={() => this.onGameClick (game.game)}/>
                </li>
              )}
            </ul>
          </aside>
          <main>
            <div className="streams" >
              <ul className="streams-list">
                {this.state.streams.map(stream =>
                    <li key={stream._id}><Stream value={stream}/></li>
                )}
              </ul>
            </div>
          </main>
        </div>
    )
  }
}

export default Sheet
