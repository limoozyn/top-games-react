import React from 'react'
import './Game.css'

function Game (props) {
    return (
          <article className="game">
            <figure className="game__details">
              <img className="game__picture" src={props.game.box.small} alt={props.game.name}/>
              <figcaption>
                <h3 className="game__title">{props.game.name}</h3>
              </figcaption>
            </figure>
            <p className="game__viewers-count">Viewers: {props.viewers}</p>
          </article>

    )
}

export default Game
