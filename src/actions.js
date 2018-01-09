import Twitch from 'twitch.tv-api';
import { getTopGames, getGameStreams } from './api';
const twitch = new Twitch({
  id: process.env.REACT_APP_TWITCH_ID,
  secret: ''
});

export const SELECT_GAME = 'SELECT_GAME'
export const INVALIDATE_GAME = 'INVALIDATE_GAME'
export const REQUEST_STREAMS = 'REQUEST_STREAMS'
export const RECEIVE_STREAMS = 'RECEIVE_STREAMS'

export function selectGame(game) {
  return {
    type: SELECT_GAME,
    gameName: game.name
  }
}


export function invalidateGame(game) {
  return {
    type: INVALIDATE_GAME,
    gameName: game.name
  }
}

export function requestStreams(game) {
  return {
    type: REQUEST_STREAMS,
    gameName: game.name
  }
}


export function receiveStreams(gameName, streams) {
  return {
    type: RECEIVE_STREAMS,
    gameName: gameName,
    streams,
    receivedAt: Date.now()
  }
}

export function fetchStreams(gameName) {
  return function (dispatch) {
    dispatch(requestStreams(gameName))
    return getGameStreams(gameName)
        .then(data =>
        dispatch(receiveStreams(gameName, data)))
  }
}

function shouldFetchStreams(state, gameName) {
  const streams = state.streamsByGame[gameName]
  if(!streams) { return true }
  else if (streams.isFetching) {return false}
  else { return streams.didInvalidate }
}

function fetchStreamsIfNeeded(gameName) {
  return (dispatch, getState) => {
    if (shouldFetchStreams(getState(), gameName)) {
      console.log('needed');
      return dispatch(fetchStreams(gameName))
    } else {
      console.log('not needed');
      return Promise.resolve()
    }
  }
}

export function clickOnGame(gameName) {
  return (dispatch) => {
    dispatch(selectGame(gameName))
    return dispatch(fetchStreamsIfNeeded(gameName))
  }
}