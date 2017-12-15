import React from 'react'
import './Entity.css'

function Game (props) {
  return (
      <article className={props.entityName}>
        <figure className={`${props.entityName}__details`}>
          <img className={`${props.entityName}__picture`} src={props.picture} alt={props.title}/>
          <figcaption>
            <h3 className={`${props.entityName}__title`}>{props.title}</h3>
            <p className={`${props.entityName}__viewers-count`}>Viewers: {props.viewers}</p>
          </figcaption>
        </figure>
      </article>

  )
}

export default Game
