import Twitch from 'twitch.tv-api';
const twitch = new Twitch({
  id: process.env.REACT_APP_TWITCH_ID,
  secret: ''
});

export function getTopGames () {
  return twitch.getTopGames().then((data) => data.top)
}

export function getGameStreams (game) {
  return twitch.getTopStreams({game}).then((data) => data.streams)
}
