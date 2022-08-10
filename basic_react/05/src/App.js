import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Layout'
function App() {
  return (
    <Router>
      <div className="App">
        {/* <h3>App根组件</h3> */}
        {/* <Link to="/login">登录</Link>
        <Link to="/home">首页</Link> */}
      </div>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  )
}
export default App
