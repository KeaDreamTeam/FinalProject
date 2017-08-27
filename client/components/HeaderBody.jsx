import React from 'react'
import jump from 'jump.js'


const HeaderBody = () => (
  <div>
    <h1 className="title">
      What's For Lunch
    </h1>
    <h2 onClick={() => jump('.app-body')}>
      <a>continue</a>
    </h2>
  </div>
)

export default HeaderBody
