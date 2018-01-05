export const SELECT_GAME = 'SELECT_GAME'
export const INVALIDATE_GAME = 'INVALIDATE_GAME'
export const REQUEST_STREAMS = 'REQUEST_STREAMS'
export const RECEIVE_STREAMS = 'RECEIVE_STREAMS'

export function selectGame(game) {
  return {
    type: SELECT_GAME,
    id: game._id
  }
}


export function invalidateGame(game) {
  return {
    type: INVALIDATE_GAME,
    name: game.name
  }
}

export function requestStreams(game) {
  return {
    type: REQUEST_STREAMS,
    name: game.name
  }
}


export function receiveStreams(game, streams) {
  return {
    type: RECEIVE_STREAMS,
    game,
    streams,
    receivedAt: Date.now()
  }
}
