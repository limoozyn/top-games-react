const Twitch = require("twitch.tv-api");
const twitch = new Twitch({
  id: process.env.REACT_APP_TWITCH_ID,
  secret: ''
});

function getTopGames () {
  return twitch.getTopGames().then((data) => data.top)
}

function getGameStreams (game) {
  return twitch.getTopStreams(game)
}

module.exports = {getTopGames,getGameStreams}
