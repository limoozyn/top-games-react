import React from 'react'
import './game.css'

function Game (props) {
    return (
        <article className="games-list__game" onClick={props.onClick}>
            Game content
        </article>
    )
}

export default Game
