import React from 'react'
import './Game.css'

function Game (props) {
    return (
        <a className="game-link" href='#' onClick={props.onGameClick}>
          <article className="game">
            <figure className="game-details">
              <img className="game-details__picture" src={props.game.box.small} alt={props.game.name}/>
              <figcaption>
                <h3 className="game-details__title">{props.game.name}</h3>
              </figcaption>
            </figure>
            <p className="game__viewers-count">Viewers: {props.viewers}</p>
          </article>
        </a>

    )
}

export default Game
