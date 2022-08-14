import React from 'react'
import ReactDom from 'react-dom'
import Cat from './Cat'
import Position from './Position'
import withMouse from './withMouse'
import withScroll from './withScroll'

// 库： 封装一些高阶组件
const P = withScroll(withMouse(Position))
const element = (
  <div style={{ width: 10000, height: 10000 }}>
    <h1>根组件</h1>
    {/* <CatWithMouse></CatWithMouse> */}
    <P money="100"></P>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
