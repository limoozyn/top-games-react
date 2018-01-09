import { combineReducers } from 'redux'
import {
  SELECT_GAME,
  INVALIDATE_GAME,
  REQUEST_STREAMS,
  RECEIVE_STREAMS
} from './actions'

function selectedGame(state = null, action) {
  switch (action.type) {
    case SELECT_GAME:
      return Object.assign({},state, {
        selectedGame: action.gameName
      })
      return action.gameName
    default:
      return state
  }
}

function streams( state = {},action) {
  switch (action.type) {
    case INVALIDATE_GAME:
      return Object.assign({},state, {
        didInvalidate: true
      })
    case REQUEST_STREAMS:
      return Object.assign({},state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_STREAMS:
      return Object.assign({},state,{
        isFetching: false,
        didInvalidate: false,
        items: action.streams,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function streamsByGame(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_GAME:
    case RECEIVE_STREAMS:
    case REQUEST_STREAMS:
      return Object.assign({}, state, {
        [action.gameName]: streams(state[action.gameName], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  streamsByGame,
  selectedGame
})

export default rootReducer