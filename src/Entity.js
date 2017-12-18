import React from 'react'
import './Entity.css'

function Entity (props) {
  return (
    <article className={props.name}>
      <figure className={`${props.name}__details`}>
        <img className={`${props.name}__picture`} src={props.picture} alt={props.title}/>
        <figcaption>
          <h3 className={`${props.name}__title`}>{props.title}</h3>
          <p className={`${props.name}__viewers-count`}>Viewers: {props.viewers}</p>
        </figcaption>
      </figure>
    </article>
  )
}

export default Entity
