import React from 'react'

export default function Review({name, text}) {
  return (
      <div className="otherrev-block">
          <div className="otherrev-title">{name}</div>
          <div className="feetback">{text}</div>
      </div>
  )
}
