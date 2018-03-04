import { combineReducers } from 'redux'
import {
  SELECT_GAME,
  REQUEST_STREAMS,
  RECEIVE_STREAMS,
  REQUEST_GAMES,
  RECEIVE_GAMES,
} from './actions'

const initialState = {
  "gamesAreFetching": false,
  "games": [],
  "streamsAreFetching": false,
  "streamsByGame": [],
  "activeGameId": null
};

function activeGameId(state=null, action) {
  switch (action.type){
    case SELECT_GAME:
      return action.id
    default:
      return state

  }
}

const topGamesApp = combineReducers({
  activeGameId
})

export default topGamesApp