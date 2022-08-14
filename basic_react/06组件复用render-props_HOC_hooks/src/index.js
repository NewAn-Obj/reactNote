import React from 'react'
import ReactDom from 'react-dom'
import Cat from './Cat'
import Position from './Position'
import Mouse from './Mouse'
const element = (
  <div>
    <h1>根组件</h1>
    {/* <Cat></Cat> */}
    {/* <Position></Position> */}
    {/* <Mouse render={({ x, y }) => <Cat x={x} y={y}></Cat>}></Mouse> */}
    {/* <Mouse render={(state) => <Cat {...state}></Cat>}></Mouse> */}
    <Mouse render={({ x, y }) => <Position x={x} y={y}></Position>}></Mouse>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
