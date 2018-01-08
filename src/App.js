import React from 'react';
import './App.css'
import { getTopGames, getGameStreams } from './api';
import Entity from './Entity';
import cx from 'classnames';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      games: [],
      streams: [],
      selectedGame: null
    }
  }

  onGameClick (e, game) {
    e.preventDefault();
    this.setState({selectedGame: game.name});
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
                <li className = { cx( "games-list__game-item",
                                    { "games-list__game-item--active"
                                        : this.state.selectedGame === game.game.name
                                    }
                                ) }
                    key = { game.game._id }>
                  <a href="" className="games-list__game-clickable"
                     onClick={(e)=>this.onGameClick(e, game.game)}>
                    <Entity
                      picture={game.game.box.small}
                      title={game.game.name}
                      viewers={game.viewers}
                      name="game"/>
                  </a>
                </li>
              )}
            </ul>
          </aside>
          <main className="main">
            <div className="streams">
              <ul className="streams-list">
                {this.state.streams.map(stream =>
                  <li key={stream._id} className = "streams-list__streams-item">
                    <Entity
                      picture={stream.preview.medium}
                      title={stream.channel.display_name}
                      viewers={stream.viewers}
                      name="stream"/>
                  </li>
                )}
              </ul>
            </div>
          </main>
        </div>
    )
  }
}

export default App
