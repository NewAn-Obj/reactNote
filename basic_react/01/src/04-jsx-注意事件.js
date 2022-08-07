// import React from 'react'
import ReactDOM from 'react-dom'

// 幽灵节点 节点不会渲染任何的内容
// <></>  <React.Fragment>
// const element = (
//   <>
//     <div className="aa"></div>
//     <span>456</span>
//     <a href="http://www.baidu.com">百度一下</a>
//     <img src="./abc.gif" alt="" />
//     <br />
//     <label htmlFor="box">哈哈哈</label>
//     <input type="checkbox" id="box" />
//   </>
// );

// const element1 = (
//   <div>
//     <p>123</p>
//     <a href="www.baidu.com">哈哈哈</a>
//   </div>
// );

function render() {
  return <div>123</div>
}

ReactDOM.render(render(), document.getElementById('root'))
