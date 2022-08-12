import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Layout'
import AuthRoute from './components/AuthRoute'
import history from './utils/history'

function App() {
  return (
    <Router history={history}>
      <div className="App">
        {/* <h3>App根组件</h3> */}
        {/* <Link to="/login">登录</Link>
        <Link to="/home">首页</Link> */}
      </div>

      <Switch>
        <Redirect exact from="/" to="/login"></Redirect>
        {/* <Route path="/home" component={Home}></Route> */}
        <Route path="/login" component={Login}></Route>
        <AuthRoute path="/home" component={Home}></AuthRoute>
      </Switch>
    </Router>
  )
}
export default App
