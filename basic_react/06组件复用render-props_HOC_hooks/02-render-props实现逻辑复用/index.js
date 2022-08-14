import React from 'react'
import ReactDom from 'react-dom'
import Cat from './Cat'
import Position from './Position'
import Mouse from './Mouse'
import Scroll from './Scroll'
const element = (
  <div style={{ height: 10000, width: 10000 }}>
    <h1>根组件</h1>
    {/* <Mouse>{(data) => <Cat {...data}></Cat>}</Mouse> */}
    <Scroll>
      {({ left, top }) => (
        <div style={{ position: 'fixed' }}>
          {left} - {top}
        </div>
      )}
    </Scroll>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
