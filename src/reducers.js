import { combineReducers } from 'redux'
import {
  SELECT_GAME,
  GAMES_REQUEST,
  GAMES_SUCCESS,
  STREAMS_REQUEST,
  STREAMS_SUCCESS,
} from './actions'

const initialState = {
  "gamesAreFetching": false,
  "games": [],
  "gamesReceivedAt": "",
  "streamsAreFetching": false,
  "streamsByGame": [],
  "activeGameName": null
};

function activeGameName(state=null, action) {
  switch (action.type){
    case SELECT_GAME:
      return action.name
    default:
      return state

  }
}

function games(
  state = {
    "gamesAreFetching": false,
    "games": [],
    "gamesReceivedAt": ""
  },
  action
) {
  switch (action.type){
    case GAMES_REQUEST:
      return {...state, ...{"gamesAreFetching": true}}
    case GAMES_SUCCESS:
      return {
        ...state,
        ...{
          "gamesAreFetching": false,
          "games": action.games,
          "gamesReceivedAt": action.receivedAt,
        }
      }
    default:
      return state
  }
}

function streams(
    state = {
      "streamsAreFetching": false,
      "streamsByGame": [],
    },
    action
) {
  switch (action.type){
    case STREAMS_REQUEST:
      return {...state, ...{"streamsAreFetching": true}}
    case STREAMS_SUCCESS:
      let newStreams = {};
      //TODO: needs to be fixed to update streams
      return state
      // return {
      //   ...state,
      //   ...{
      //     "streamsAreFetching": false,
      //     "streamsByGame": [
      //         ...state.streamsByGame, {newStreams[action.gameName]: {
      //           "streams": action.games,
      //           "streamsReceivedAt": action.receivedAt
      //         }}
      //     ]
      //   }
      // }
    default:
      return state
  }
}

const topGamesApp = combineReducers({
  activeGameName,
  games
})

export default topGamesApp