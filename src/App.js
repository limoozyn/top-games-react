import React from 'react';
import { createStore } from 'redux';
import './App.css'
import { getTopGames, getGameStreams } from './api';
import Entity from './Entity';
import cx from 'classnames';
import {selectGame} from "./actions";
import topGamesApp from "./reducers";

let store = createStore(topGamesApp);

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// store.dispatch(selectGame(1));

// unsubscribe();

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      games: [],
      streams: [],
      active_game_id: null
    }
  }

  onGameClick (e, game) {
    e.preventDefault();
    this.setState({active_game_id: game._id});
    getGameStreams(game.name).then(streams => {
      this.setState({streams});
    });
    store.dispatch(selectGame(game.name));
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
                    : this.state.active_game_id === game.game._id
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
