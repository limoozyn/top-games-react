export const SELECT_GAME = 'SELECT_GAME'
export const REQUEST_STREAMS = 'REQUEST_STREAMS'
export const RECEIVE_STREAMS = 'RECEIVE_STREAMS'
export const REQUEST_GAMES = 'REQUEST_GAMES'
export const RECEIVE_GAMES = 'RECEIVE_GAMES'

export function selectGame(id) {
  return {
    type: SELECT_GAME,
    id
  }
}

export function requestStreams(game) {
  return {
    type: REQUEST_STREAMS,
    status: "streams_loading"
  }
}

export function receiveStreams(streams) {
  return {
    type: RECEIVE_STREAMS,
    streams,
    receivedAt: Date.now()
  }
}

export function requestGames() {
  return {
    type: REQUEST_GAMES,
    status: "games_loading",
  }
}

export function receiveGames(games) {
  return {
    type: RECEIVE_GAMES,
    games,
    receivedAt: Date.now()
  }
}