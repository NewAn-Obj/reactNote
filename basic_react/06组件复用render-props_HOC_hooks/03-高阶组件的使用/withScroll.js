import { Component } from 'react'

export default function withScroll(Base) {
  class Scroll extends Component {
    // 逻辑
    state = {
      top: 0,
      left: 0,
    }

    componentDidMount() {
      window.addEventListener('scroll', this.scroll)
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.scroll)
    }

    scroll = () => {
      this.setState({
        left: window.pageXOffset,
        top: window.pageYOffset,
      })
    }
    render() {
      return <Base {...this.props} {...this.state}></Base>
    }
  }
  return Scroll
}
