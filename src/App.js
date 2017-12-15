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
                      <Entity
                        picture={game.game.box.small}
                        title={game.game.name}
                        viewers={game.game.viewers}
                        entityName={'game'}/>
                    </li>
                  </a>

              )}
            </ul>
          </aside>
          <main>
            <div className="streams" >
              <ul className="streams-list">
                {this.state.streams.map(stream =>
                  <li key={stream._id}>
                    <Entity
                      picture={stream.channel.logo}
                      title={stream.channel.display_name}
                      viewers={stream.viewers}
                      entityName={'stream'}/>
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
