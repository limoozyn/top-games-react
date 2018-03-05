export const SELECT_GAME = 'SELECT_GAME'
export const STREAMS_REQUEST = 'STREAMS_REQUEST'
export const STREAMS_SUCCESS = 'STREAMS_SUCCESS'
export const STREAMS_FAILURE = 'STREAMS_FAILURE'
export const GAMES_REQUEST = 'GAMES_REQUEST'
export const GAMES_SUCCESS = 'GAMES_SUCCESS'
export const GAMES_FAILURE = 'GAMES_FAILURE'

export function selectGame(name) {
  return {
    type: SELECT_GAME,
    name
  }
}

export function requestStreams(gameName) {
  return {
    type: STREAMS_REQUEST,
    gameName
  }
}

export function receiveStreams(gameName, json) {
  return {
    type: STREAMS_SUCCESS,
    gameName,
    streams: json.data,
    receivedAt: Date.now()
  }
}

export function requestGames() {
  return {
    type: GAMES_REQUEST,
  }
}

export function receiveGames(games, json) {
  return {
    type: GAMES_SUCCESS,
    games: json.data,
    receivedAt: Date.now()
  }
}