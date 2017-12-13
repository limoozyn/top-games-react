import React from 'react'
import './Stream.css'

function Stream (props) {
  return (
    <article className="stream">
      <figure className="stream__details">
        <img className="stream__logo" src={props.value.channel.logo} alt={props.value.channel.display_name}/>
        <figcaption>
          <h3 className="stream__title">{props.value.channel.display_name}</h3>
          <p className="stream__viewers-count">Viewers: {props.value.viewers}</p>
        </figcaption>
      </figure>
    </article>
  )
}

export default Stream
