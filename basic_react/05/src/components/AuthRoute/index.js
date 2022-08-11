import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { hasToken } from '../../utils/storage'

export default class AuthRoute extends Component {
  render() {
    // console.log(this.props)
    const { component: Component, ...rest } = this.props
    // console.log(Component)
    // console.log(rest)
    return (
      <Route
        {...rest}
        render={(props) => {
          // console.log(props)
          if (hasToken()) {
            return <Component {...props}></Component>
          } else {
            return (
              <Redirect
                to={{
                  pathname: '/login',
                  state: {
                    from: props.location.pathname,
                  },
                }}
              ></Redirect>
            )
          }
        }}
      ></Route>
    )
  }
}
