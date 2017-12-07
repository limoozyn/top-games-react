import React from 'react'
import './game.css'

function Game (props) {
    return (
        <article className="game" onClick={props.onClick}>
          <figure className="game-details">
            <img className="game-details__picture" src={props.value.game.box.small} alt={props.value.game.name}/>
            <figcaption>
              <h3 className="game-details__title">{props.value.game.name}</h3>
            </figcaption>
          </figure>
          <p className="game__viewers-count">Viewers: {props.value.viewers}</p>
        </article>
    )
}

export default Game
