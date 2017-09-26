import React from 'react'
import jump from 'jump.js'

const HeaderBody = () => (
    <div>
        <h1 className="title is-1" onClick={() => jump('.app-body')}>
          <a>What's For Lunch?</a>
        </h1>
        <h2 className="animated bounce ClickMe" onClick={() => jump('.app-body')}>
          <a>click me</a>
        </h2>
    </div>
)

export default HeaderBody
