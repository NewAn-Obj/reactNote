import ReactDOM from 'react-dom'
import './index.css'
import classnames from 'classnames'

const isRed = false
const isPink = true

// const classArr = ['box']
// if (isRed) classArr.push('red')
// if (isPink) classArr.push('pink')
// function classNames(obj) {
//   return Object.keys(obj)
//     .filter((key) => obj[key])
//     .join(' ')
// }

const element = (
  <div>
    <h1 className={classnames('box', { red: isRed, pink: isPink })}>
      我是标题
    </h1>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
