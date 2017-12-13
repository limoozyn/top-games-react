import React from 'react';
import './App.css'
import { getTopGames, getGameStreams } from './api';
import Game from './Game';
import Stream from './Stream';
import cx from 'classnames';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      games: [],
      streams: [],
      active_id: null
    }
  }

  onGameClick (e, game) {
    e.preventDefault();
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
        <div className="app">
          <aside className="games">
            <ul className="games-list">
              {this.state.games.map(game =>
                  <a href="" className="games-list__game-clickable"
                     onClick={(e)=>this.onGameClick(e, game.game)}
                     key = { game.game._id }>
                    <li className = { cx( "games-list__game-item",
                                                { "games-list__game-item--active" : this.state.active_id === game.game._id }
                                              )}>
                        <Game game={game.game} viewers={game.viewers}/>
                    </li>
                  </a>

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

export default App
